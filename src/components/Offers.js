import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Offer from './Offer'

export default class Offers extends Component {
    render() {
        return this.props.offers.map(offer => (
            <Offer offer={offer} key={offer.id} />
        ))
    }
}
