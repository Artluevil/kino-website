import React, {Component} from 'react'
import Header from './components/Header'
import DataFilms from './components/DataFilms'
import DataPosters from './components/DataPosters'
import DataEvents from './components/DataEvents'
import ItemOverview from './components/ItemOverview'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const CinemaScreen = require('./components/CinemaScreen')

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
          <CinemaScreen />
          <Route exact path='/PosterOverview' component={ItemOverview} />
        </div>
      </Router>
    )
  }
}