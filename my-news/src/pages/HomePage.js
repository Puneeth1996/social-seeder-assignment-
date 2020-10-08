import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, CardColumns, FormControl,   } from 'react-bootstrap';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <FormControl style={{ margin: "20vh 0 10vh 25vw",  width: "50%"}} type="text" placeholder="Search" value={this.props.search} onChange={this.props.updateSearch}  onKeyDown={this.props.keyPress} className="mr-sm-2"  />
                <CardColumns  md={6}>
                    {this.props.articles.map( (itm, index) => 
                        (
                            <Card key={itm.publishedAt + itm.author}  onClick={ () => { this.props.handleShowMore(itm) } } style={{ width: '25rem', marginLeft: '1.75rem' }}>
                                <Card.Img variant="top" src={itm.urlToImage} style={{ width: '25rem', hieght: '14rem' }} />
                                <Card.Body>
                                    <Card.Title>{itm.title}</Card.Title>
                                    <Card.Text>{itm.description}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Published By {itm.author} At {itm.publishedAt}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    Source: <Card.Link href={itm.url}>{itm.source.name}</Card.Link>
                                </Card.Body>
                            </Card>
                        )
                    )}
                </CardColumns>
            </div>
        )
    }
}
