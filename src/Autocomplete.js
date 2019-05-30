import React, { Component } from "react";
import { BASE_URL } from ".";
export default class Autocomplete extends Component {
    constructor(props){
        super(props)
        this.state={
            autocompleteData: []
        }
    }
    async componentWillMount(){
        let response=await fetch(BASE_URL + "/documentos-clientes");
        let data= await response.json();
        this.setState({autocompleteData: data})
        console.log(data)
    }

    render() {
      return (
        <div>

        </div>
      );
    }
  }