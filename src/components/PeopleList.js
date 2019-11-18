import React from "react";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Input,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button,
  Row,
  Col
} from "reactstrap";

class PeopleList extends React.Component {
  state = {
    People: [],
    newPersonData: {
      Name: ""
    },
    editPersonData: {
      Id: "",
      Name: ""
    },
    deletePersonData: {
        Id: "",
        Name: ""
    },
    swalDelete: null,
    swalSuccess: null,
    swalError: null,
    newPersonModal: false,
    editPersonModal: false
  };

  componentWillMount() {
    this.refreshPeople();
  }
  openSwalDelete(Id) {
    this.setState({
      deletePersonData: { Id: Id, Name: "" },
      swalDelete: (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"          
          onConfirm={this.deletePerson.bind(this)}
          onCancel={this.closeSwalDelete.bind(this)}
          focusCancelBtn
        >
          You will not be able to recover this contact!
        </SweetAlert>
      )
    });
  }
  disposeAllSwal(){
    this.setState({
        swalSuccess: null,
        swalError: null,
        swalDelete: null
    })
}
  closeSwalDelete(){
      this.setState({
          deletePersonData: {Id: "", Name: ""},
          swalDelete: null
      })
  }
  toggleNewPersonModal() {
    this.setState({
      newPersonModal: !this.state.newPersonModal
    });
  }
  toggleEditPersonModal() {
    this.setState({
      editPersonModal: !this.state.editPersonModal
    });
  }
  addPerson() {
    axios
      .post("http://localhost:61827/api/people", this.state.newPersonData)
      .then(response => {
        let { People } = this.state;

        this.refreshPeople();

        this.setState({
          People,
          newPersonModal: false,
          newPersonData: {
            Name: ""
          }
        });
      });
  }
  updatePerson() {
    axios
      .put(
        "http://localhost:61827/api/people",

        this.state.editPersonData
      )
      .then(response => {
        this.refreshPeople();

        this.setState({
          editPersonModal: false,
          editPersonData: { Id: "", Name: "" }
        });
      });
  }
  editPerson(Id, Name) {
    this.setState({
      editPersonData: { Id, Name },
      editPersonModal: !this.state.editPersonModal
    });
  }
  deletePerson() {
    axios.delete("http://localhost:61827/api/people", { data: this.state.deletePersonData } ).then(response => {
        this.closeSwalDelete(this);
        response.status == 204 ? this.setState({ swalSuccess: <SweetAlert success title="Deleted!" onConfirm={this.disposeAllSwal} onCancel={this.disposeAllSwal}>
        This person was deleted!
      </SweetAlert>})  : this.setState({swalError: <SweetAlert error title="Wooops!" onConfirm={this.disposeAllSwal} onCancel={this.disposeAllSwal}>
  An unexpected error! Try Again!
</SweetAlert>})
      this.refreshPeople();
    });
  }
  refreshPeople() {
    axios.get("http://localhost:61827/api/people").then(response => {
      this.setState({
        People: response.data
      });
    });
  }

  handleChangePage(id){
      
  }
  render() {
    let people = this.state.People.map(person => {
      return (
        <tr key={person.Id}>
          <th scope="row">{person.Id}</th>
          <td>{person.Name}</td>
          <td>
            <Button color="info" size="sm" className="mr-3" onClick={() =>{window.location.href = "./contact-page/" + person.Id}}>
              Contact Info
            </Button>
            <Button
              color="success"
              size="sm"
              className="mr-3"
              onClick={this.editPerson.bind(this, person.Id, person.Name)}
            >
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              onClick={this.openSwalDelete.bind(this, person.Id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        {/* Modal Create */}
        <Modal
          isOpen={this.state.newPersonModal}
          toggle={this.toggleNewPersonModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewPersonModal.bind(this)}>
            Add a Person
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
                id="Name"
                value={this.state.newPersonData.Name}
                onChange={e => {
                  let { newPersonData } = this.state;

                  newPersonData.Name = e.target.value;

                  this.setState({ newPersonData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addPerson.bind(this)}>
              Add Person
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toggleNewPersonModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/* Modal Edit */}
        <Modal
          isOpen={this.state.editPersonModal}
          toggle={this.toggleEditPersonModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleEditPersonModal.bind(this)}>
            Edit a Person
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
                id="Name"
                value={this.state.editPersonData.Name}
                onChange={e => {
                  let { editPersonData } = this.state;

                  editPersonData.Name = e.target.value;

                  this.setState({ editPersonData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updatePerson.bind(this)}>
              Update Person
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toggleEditPersonModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Row>
          <Col className="col-1">
            <h2>People</h2>
          </Col>
          <Col className="col-3">
            <Button
              className="my-3"
              color="primary"
              onClick={this.toggleNewPersonModal.bind(this)}
            >
              Add Person
            </Button>
          </Col>
          <Col className="col-6"></Col>
        </Row>

        <Row>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{people}</tbody>
          </Table>
          {this.state.swalDelete}
        </Row>
      </div>
    );
  }
}

export default PeopleList;
