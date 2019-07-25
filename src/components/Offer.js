import React, { Component } from 'react'

export default class Offer extends Component {
    render() {
        return (
            <div className="offer-container">
                <img className="img-offer" src={this.props.offer.src}/>
                <div className="offer-info">
                    <h2 style={{color: 'white'}}>{this.props.offer.title}</h2>
                </div>
            </div>
        )
    }
}
