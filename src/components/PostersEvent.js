import React, { Component } from 'react'
import PosterEvent from './PosterEvent'

export default class PostersEvent extends Component {
    render() {
        return this.props.events.map(event => (
            <PosterEvent event={event} key={event.id} />
        ))
    }
}
