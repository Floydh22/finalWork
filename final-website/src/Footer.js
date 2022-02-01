import React, { Component } from 'react';

export class Footer extends Component{
    myname = 'Floyd';
    render() {
        return <div><h2>This is {this.myname}'s footer</h2></div>
    }
}

export default Footer;