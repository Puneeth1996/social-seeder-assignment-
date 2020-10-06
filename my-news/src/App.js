import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
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
  
  render() {
    return (
      <div>
        {this.state.articles.map( (itm, index) => (
          
            <>
              <h2>{itm.title}</h2>
            </>
          
        ) )}
      </div>
    )
  }
}
