import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import ItemOverview from './ItemOverview'
import { Link, withRouter } from 'react-router-dom'

export default class Poster extends Component {

    render() {
        return (  
            <Col md={4}>
                <Link to={{
                    pathname: '/PosterOverview',
                    state: {
                        id: this.props.poster.id,
                        video: this.props.poster.video,
                        imgWide: this.props.poster.imgWide,
                        imgPoster: this.props.poster.src,
                        longDescription: this.props.poster.longDescription
                    }
                }}>
                    <img className="mx-auto d-block mt-5 img-shadow poster-img" src={this.props.poster.src} alt="" width="184" height="273"/>
                </Link>
                <p className="text-center mt-3" style={{color: 'white'}}>{this.props.poster.title}</p>
                <hr className="under-image-hr" />
            </Col>
        )
    }
}

