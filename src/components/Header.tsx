import React, { Component } from 'react'

interface Props {
    title: string, 
    subTitle?: string
}

interface State {
    count: number
}
//above is same as putting it in the line below <{title: string, subtitle: string}> instead of <Props>
export class Header extends Component <Props>  {

    state={
        count: 0
    }
    render() {
        return (
            <div>
            <h1>{this.props.title} - {this.state.count}</h1>
            <h3>{this.props.subTitle|| "hello"}</h3>
            </div>
        )
    }
}

export default Header
