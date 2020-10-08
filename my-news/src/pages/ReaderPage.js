import React, { Component } from 'react';
import { Button,   } from 'react-bootstrap';

export default class ReaderPage extends Component {  
    render() {
        const {
            source, 
            author, 
            title, 
            description, 
            url, 
            urlToImage,
            publishedAt,
            content,
        } = this.props.readerArr  
        return (
            <div>
                <div>
                    <Button variant="outline-secondary"  style={{float: 'right', margin: '1rem'}}   onClick={ this.props.handleBackButton  }  >Back To Home</Button>{' '}
                </div>
                <div  style={{ marginTop: '10rem' }}   >
                    <h1>
                        Example heading <Badge variant="secondary">New</Badge>
                    </h1>
                </div>
            </div>
        )
    }
}
