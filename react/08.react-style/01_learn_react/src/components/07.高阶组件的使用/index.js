import React, { Component } from 'react'
import PropTypes from 'prop-types'
import About from './About';
import Home from './Home';


export default class componentName extends Component {
    constructor(props){
        super(props)
    }
    static propTypes = {

    }

    render() {
        return (
            <div>
                <About/>
                <br/>
                <Home/>
            </div>
        )
    }
}
