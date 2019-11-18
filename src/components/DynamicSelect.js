import React, {Component} from 'react';

class DynamicSelect extends Component{
    constructor(props){
        super(props)
    }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.name}
                </option>
            );
        
            return (
            <select id="customSearch" name="customSearch" className="form-control" onChange={this.handleChange} value={this.props.selectedId}>
                <option>Select Item</option>
                {options}
           </select>
        )
    }
}

export default DynamicSelect;