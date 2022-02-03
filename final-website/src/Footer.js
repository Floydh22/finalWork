import React, { Component } from 'react';
import Body from './Body';

export class Footer extends Component{
    render() {
        return <div><h2>This is {Body.value}'s footer</h2></div>
    }
}

export default Footer;