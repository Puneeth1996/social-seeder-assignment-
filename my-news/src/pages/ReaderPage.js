import React, { Component } from 'react';
import { Button,   } from 'react-bootstrap';

export default class ReaderPage extends Component {
    render() {
        return (
            <div>
                <Button variant="outline-secondary"   onClick={ this.props.handleBackButton  }  >Back To Home</Button>{' '}
                <div>
                    ReaderPage
                </div>
            </div>
        )
    }
}
