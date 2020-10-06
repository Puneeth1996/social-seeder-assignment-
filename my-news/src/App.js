import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem, CardColumns, Form, FormControl,   } from 'react-bootstrap';
import './App.css';


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
    if(e.keyCode == 13 && this.state.search){
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
      <div>


        {/* <Form inline style={{ margin: "20vh 0 10vh 25vw"}}>
            <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch} className="mr-sm-2"  style={{ width: "50%"}}  onSubmit={ () => this.submitHandler() } />
        </Form> */}

          <FormControl style={{ margin: "20vh 0 10vh 25vw",  width: "50%"}} type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch}  onKeyDown={this.keyPress} className="mr-sm-2"  />

        <CardColumns  md={6}>
            
          {this.state.articles.map( (itm, index) => (
            
            
              <Card key={itm.publishedAt} style={{ width: '25rem', marginLeft: '1.75rem' }}>
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
                  <Card.Link href={itm.url}>Read Full</Card.Link>
                </Card.Body>
              </Card>
            
          
          ) )}

        </CardColumns>
      </div>
    )
  }
}
