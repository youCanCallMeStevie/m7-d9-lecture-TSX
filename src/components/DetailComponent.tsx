import React, { Component } from 'react';
import {RouteComponentProps} from 'react-router-dom'
//this is essentially a typescript interface coming from react-router-dom


// interface CustomInterface{
//     title: string
// }

// type MyMixedCustomInterface = RouteComponentProps & CustomInterface

interface MyMixedCustomInterface extends RouteComponentProps {
    title: string;
}

// this extended interface is the same as both above

//type & interface can be used for the same purposes, but interfaces are: 
//1) only for objects
//2) interfaces can be extended


export class DetailComponent extends Component <MyMixedCustomInterface>  {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h1>{this.props.location.pathname}</h1>
            </div>
        )
    }
}

export default DetailComponent

