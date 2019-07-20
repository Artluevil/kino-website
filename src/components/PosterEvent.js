import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class PosterEvent extends Component {
    render() {
        return (
            <Col md={4}>
                <img className="mx-auto d-block mt-5 img-shadow poster-img" src={this.props.event.src} width="184" height="273"/>
                <p className="text-center mt-3" style={{color: 'white'}}>{this.props.event.title}</p>
                <hr className="under-image-hr" />
            </Col>
        )
    }
}
