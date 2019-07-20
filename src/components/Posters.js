import React, { Component } from 'react'
import Poster from './Poster'

export default class Posters extends Component {
    render() {
        return this.props.posters.map(poster => (
            <Poster poster={poster} key={poster.id}/>
        ))
    }
}

