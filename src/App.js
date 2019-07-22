import React, {Component} from 'react'
import Header from './components/Header'
import DataFilms from './components/DataFilms'
import DataPosters from './components/DataPosters'
import DataEvents from './components/DataEvents'
import CinemaScreen from './components/CinemaScreen'
import ItemOverview from './components/ItemOverview'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  state = {
    films: DataFilms,
    posters: DataPosters,
    events: DataEvents
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={(routeProps) => (<CinemaScreen {...routeProps} events={this.state.events} posters={this.state.posters} films={this.state.films} />)}/>
          <Route exact path='/PosterOverview' component={ItemOverview} />
        </div>
      </Router>
    )
  }
}