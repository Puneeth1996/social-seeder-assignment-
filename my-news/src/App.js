import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem, CardColumns,  } from 'react-bootstrap';
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
        <CardColumns  md={6}>
            
          {this.state.articles.map( (itm, index) => (
            
            <>
              <Card style={{ width: '25rem', marginLeft: '1.75rem' }}>
                <Card.Img variant="top" src={itm.urlToImage} style={{ width: '25rem', hieght: '14rem' }} />
                <Card.Body>
                  <Card.Title>{itm.title}</Card.Title>
                  <Card.Text>{itm.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{itm.publishedAt}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </>
          
          ) )}

        </CardColumns>
      </div>
    )
  }
}
