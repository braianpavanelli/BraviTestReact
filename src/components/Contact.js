import React from "react";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import Select from "./DynamicSelect.js";
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
const ContactTypes = [
  {
    id: 1,
    name: "Phone"
  },
  {
    id: 2,
    name: "Email"
  },
  {
    id: 3,
    name: "WhatsApp"
  }
];

class Contact extends React.Component {
  state = {
    Contacts: [
      {
        Person: {},
        ContactType: {}
      }
    ],
    newContactData: {
      IdPerson: "",
      Description: "",
      IdContactType: ""
    },
    editContactData: {
      Id: "",
      Description: "",
      IdContactType: ""
    },
    deleteContactData: {
      Id: "",
      Description: "",
      IdContactType: ""
    },
    PersonName: "Name",
    swalDelete: null,
    swalSuccess: null,
    swalError: null,
    newPersonModal: false,
    editPersonModal: false
  };

  componentWillMount() {
      axios.get("http://localhost:61827/api/people/" + this.props.id).then(response =>{
          this.setState({
            PersonName: response.data.Name
          })
          
      })
      this.refreshContacts();
  }
  openSwalDelete(Id) {
    this.setState({
        deleteContactData: { Id: Id},
      swalDelete: (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"          
          onConfirm={this.deleteContact.bind(this)}
          onCancel={this.closeSwalDelete.bind(this)}
          focusCancelBtn
        >
          You will not be able to recover this contact!
        </SweetAlert>
      )
    });
  }
  closeSwalDelete(){
    this.setState({
        deleteContactData: {Id: "", Name: ""},
        swalDelete: null
    })
}
  toggleNewContactModal() {
    this.setState({
      newContactModal: !this.state.newContactModal
    });
  }
  toggleEditContactModal() {
    this.setState({
      editContactModal: !this.state.editContactModal
    });
  }

  addContact() {
    axios
      .post("http://localhost:61827/api/contact", this.state.newContactData)
      .then(response => {
        let { Contacts } = this.state;

        this.refreshContacts();

        this.setState({
          Contacts,
          newContactModal: false,
          newContactData: {
            Description: ""
          }
        });
      });
  }
  updateContact() {
    axios
      .put(
        "http://localhost:61827/api/contact",

        this.state.editContactData
      )
      .then(response => {
        this.refreshContacts();

        this.setState({
          editContactModal: false,
          editContactData: { Id: "", Description: "", IdContactType: "" }
        });
      });
  }
  editContact(Id, Description, IdContactType) {
    this.setState({
      editContactData: { Id, Description, IdContactType },
      editContactModal: !this.state.editContactModal
    });
  }
  deleteContact() {
    axios
      .delete("http://localhost:61827/api/contact", {
        data: this.state.deleteContactData
      })
      .then(response => {
        this.closeSwalDelete(this);
        this.refreshContacts();
      });
  }
  refreshContacts() {
    axios
      .get(
        "http://localhost:61827/api/Contact/GetListByPerson?idPerson=" +
          this.props.id
      )
      .then(response => {
        this.setState({
          Contacts: response.data
        });
      });
  }

  render() {
    let contacts = this.state.Contacts.map(contact => {
      return (
        <tr key={contact.Id}>
          <th scope="row">{contact.Id}</th>
          <td>{contact.ContactType == null ? "" : contact.ContactType.Name}</td>
          <td>{contact.Description}</td>
          <td>
            <Button
              color="success"
              size="sm"
              className="mr-3"
              onClick={this.editContact.bind(
                this,
                contact.Id,
                contact.Description
              )}
            >
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              onClick={this.openSwalDelete.bind(this, contact.Id)}
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
          isOpen={this.state.newContactModal}
          toggle={this.toggleNewContactModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewContactModal.bind(this)}>
            Add a Contact
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Description">Description</Label>
              <Input
                id="Description"
                value={this.state.newContactData.Description}
                onChange={e => {
                  let { newContactData } = this.state;

                  newContactData.Description = e.target.value;

                  this.setState({ newContactData });
                }}
              />
              <Label for="customSearch">Contact Type</Label>
              <Select
                arrayOfData={ContactTypes}
                
                onSelectChange={e => {
                  let { newContactData } = this.state;
                  newContactData.IdContactType = e;
                  newContactData.IdPerson = this.props.id;
                  this.setState({ newContactData });
                }}
              ></Select>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addContact.bind(this)}>
              Add Contact
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toggleNewContactModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/* Modal Edit */}
        <Modal
          isOpen={this.state.editContactModal}
          toggle={this.toggleEditContactModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleEditContactModal.bind(this)}>
            Edit a Contact
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Description">Description</Label>
              <Input
                id="Description"
                value={this.state.editContactData.Description}
                onChange={e => {
                  let { editContactData } = this.state;

                  editContactData.Description = e.target.value;

                  this.setState({ editContactData });
                }}
              />
              <Label for="customSearch" className="mt-3">
                Contact Type
              </Label>
              <Select
                arrayOfData={ContactTypes}
                selectedId={this.state.editContactData.IdContactType}
                onSelectChange={e => {
                  let { editContactData } = this.state;
                  editContactData.IdContactType = e;
                  this.setState({ editContactData });
                }}
              ></Select>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateContact.bind(this)}>
              Update Contact
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toggleEditContactModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Row>
          <Col className="col-9">
            <h2>{this.state.PersonName}'s Contacts</h2>
          </Col>
          <Col className="col-3">
            <Button
              className="my-3"
              color="primary"
              onClick={this.toggleNewContactModal.bind(this)}
            >
              Add Contact
            </Button>
          </Col>
        </Row>
        <Row>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{contacts}</tbody>
          </Table>
          {this.state.swalDelete}
        </Row>
      </div>
    );
  }
}
export default Contact;
