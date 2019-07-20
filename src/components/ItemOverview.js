import React, { Component } from 'react'
import { Container, DropdownButton, Dropdown } from 'react-bootstrap';

export default class ItemOverview extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        const { handle } = this.props.match.params
        const { id, video, imgWide, imgPoster, longDescription } = this.props.location.state
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <div className="float-right div-location">
                        <DropdownButton className="location-btn" variant="danger" id="dropdown-item-button" title="Location">
                            <Dropdown.Item as="button">Warsaw</Dropdown.Item>
                            <Dropdown.Item as="button">New York</Dropdown.Item>
                            <Dropdown.Item as="button">Los Angeles</Dropdown.Item>
                            <Dropdown.Item as="button">Berlin</Dropdown.Item>
                            <Dropdown.Item as="button">Rio</Dropdown.Item>
                            <Dropdown.Item as="button">Paris</Dropdown.Item>
                            <Dropdown.Item as="button">Madrit</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="float-right div-text">
                        <p>Choose your showing below:</p>
                    </div>
                    <div className="float-right div-time">
                        <a className="time-btn" href="#"><button className="time-btn-style"><h2 style={{color: 'white'}}>11:00</h2></button></a>
                        <a className="time-btn" href="#"><button className="time-btn-style"><h2 style={{color: 'white'}}>12:30</h2></button></a>
                        <a className="time-btn" href="#"><button className="time-btn-style"><h2 style={{color: 'white'}}>17:00</h2></button></a>
                        <a  className="time-btn" href="#"><button className="time-btn-style"><h2 style={{color: 'white'}}>20:30</h2></button></a>
                    </div>
                    <div className="img-poster d-block">
                        <img src={this.props.location.state.imgPoster} alt="" />
                        <div style={{ display: 'inline-block',position: 'absolute'}}>
                            <h3 style={{marginLeft: '150px', marginRight: '150px', color: 'white'}}>Description</h3>
                            <p style={{marginLeft: '10px', color: 'white'}}>{this.props.location.state.longDescription}</p>
                        </div>
                    </div>
                </Container>
                {this.props.location.state.video ? <div className="wrapper">
                    <div className="video-style"></div>
                    <video className="background-video" autoPlay loop muted>
                        <source src={this.props.location.state.video} type="video/mp4" />
                    </video>
                </div> : <img className="img-wide" src={this.props.location.state.imgWide} alt=""/>}
            </div>
        )
    }
}
