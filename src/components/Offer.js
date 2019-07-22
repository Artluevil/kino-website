import React, { Component } from 'react'

export default class Offer extends Component {
    render() {
        return (
            <div style={{marginTop: '0px'}}>
                <img className="img-offer" src={this.props.offer.src}/>
            </div>
        )
    }
}
