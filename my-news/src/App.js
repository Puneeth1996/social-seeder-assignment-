import React, { Component } from 'react'
import { Card, Dropdown } from 'react-bootstrap';
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
              <Card className="bg-dark text-white">
                <Card.Img src={itm.urlToImage} style={ {  width: 200, height: 120, } } alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>{itm.title}</Card.Title>
                  <Card.Text>
                    {itm.description}
                  </Card.Text>
                  <Card.Text>{itm.publishedAt}</Card.Text>
                </Card.ImgOverlay>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itm.urlToImage} />
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
      </div>
    )
  }
}
