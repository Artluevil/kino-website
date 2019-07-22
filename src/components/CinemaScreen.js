import React, { Component } from 'react'
import {Container, Carousel, Button, Row, Col} from 'react-bootstrap'
import Posters from './Posters'
import PostersEvent from './PostersEvent'

const CinemaPhoto = require('./Images/Cinema.jpg')

export default class CinemaScreen extends Component {
    render() {
        return (
        <main>
            <div className="cinemaContainer">
                <div className="caurosel">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.props.films[0].src}
                        alt="First slide"
                        />
                        <Carousel.Caption className="textFix">
                            <h3 className="filmName">{this.props.films[0].title}</h3>
                            <p>{this.props.films[0].description}</p>
                            <Button>Buy Ticket</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                     <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.films[1].src}
                            alt="Third slide"
                            />
                        <Carousel.Caption className="textFix">
                            <h3 className="filmName">{this.props.films[1].title}</h3>
                            <p>{this.props.films[1].description}</p>
                            <Button>Buy Ticket</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.props.films[2].src}
                        alt="Third slide"
                        />

                        <Carousel.Caption className="textFix">
                            <h3 className="filmName">{this.props.films[2].title}</h3>
                            <p>{this.props.films[2].description}</p>
                            <Button>Buy Ticket</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                    <img className="cinemaPhoto" src={CinemaPhoto} alt="Cinema Screen" height="1000" />
                </div>
                <Container style={{background: 'black'}}>
                    <Row>

                        <Col className="mt-5 mb-2" xs={12}>
                            <h3 className="ml-4 mb-4" style={{color: 'white'}}>RECOMENDED</h3>
                            <hr/>
                        </Col>

                        <Posters posters={this.props.posters}/>

                        <Col className="mt-5 mb-2" xs={12}>
                            <h3 className="ml-4 mb-4" style={{color: 'white'}}>EVENTS</h3>
                            <hr/>
                        </Col>

                        <PostersEvent events={this.props.events}/>
                        
                    </Row>
                </Container>
            </main>
        )
    }
}
