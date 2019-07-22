import React, {Component} from 'react'
import Header from './components/Header'
import DataFilms from './components/DataFilms'
import DataPosters from './components/DataPosters'
import DataEvents from './components/DataEvents'
import DataOffers from './components/DataOffers'
import CinemaScreen from './components/CinemaScreen'
import ItemOverview from './components/ItemOverview'
import Offers from './components/Offers'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  state = {
    films: DataFilms,
    posters: DataPosters,
    events: DataEvents,
    offers: DataOffers
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={(routeProps) => (<CinemaScreen {...routeProps} events={this.state.events} posters={this.state.posters} films={this.state.films} />)}/>
          <Route exact path='/PosterOverview' component={ItemOverview} />
          <Route exact path='/Offers' render={(routeProps) => (<Offers {...routeProps} offers={this.state.offers} />)} />
        </div>
      </Router>
    )
  }
}