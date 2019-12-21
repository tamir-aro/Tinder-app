import React, { Component } from 'react';
import './Gender_style.css';


class Gender extends Component {

    constructor(props) {
        super (props);
        this.state = {gender: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render () {

        var SelectedGender = this.state.value
        return (
            <div class = "gender">
       <select value = {this.state.value} onChange={this.handleChange} >
         <option>Select gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
       </select>
    <h1> {SelectedGender} </h1>


            </div>
        );
    }
}

export default Gender;