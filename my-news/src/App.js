import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';

import {BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      search: "",
    }
  }

  componentDidMount(){
    fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=24317ff2add448729f246e75e63393e7')
    .then( (resp) => {
      return resp.json();
    })
    .then( (myJson) => {
      this.setState({ articles: myJson.articles });
    });
  }
  

  updateSearch = (evt) => {
    this.setState({ search: evt.target.value.substr(0,25) })
  }

  keyPress = (e) => {
    if(e.keyCode === 13 && this.state.search){
      let searchTerm = e.target.value
      this.setState({ search: "" })
      fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=24317ff2add448729f246e75e63393e7`, {mode: 'cors'})
      .then( (resp) => {
        return resp.json();
      })
      .then( (myJson) => {
        this.setState({ articles: myJson.articles });
      });
      
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <HomePage keyPress={this.keyPress} updateSearch={this.updateSearch} articles={this.state.articles} search={this.state.search} />} />
        </Switch>
      </Router>
    )
  }
}
