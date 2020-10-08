import React, { Component } from 'react';
import {  Image,    } from 'react-bootstrap';

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

        
        const mybutton =  {
            position: 'fixed',
            bottom: '-4px',
            right: '10px',
        }

        const feedback =  {
            backgroundColor : '#4acd7f',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            borderColor: '#46b8da',
        }
        return (
            <div>
                <div style={mybutton}>
                    <button style={feedback}   onClick={ this.props.handleBackButton } >Bock To Home</button>
                </div>
                <div  style={{ margin: '2rem 2rem 2rem 2rem' }}   >
                    <h1 style={{ color: '#000000bd' , margin: '0 0 2rem 0'  }}  >{title}</h1>
                    <Image src={urlToImage} style={{ height: '60vh', width: '100vw' }} fluid />
                    <h3  style={{ margin: '1rem 2rem 6rem 2rem' }}  >{description}</h3>
                    <p  style={{ margin: '1rem 4rem 6rem 4rem' }}  >{content}{content}{content}{content}{content}{content}{content}{content}{content}{content}</p>
                </div>
                <div  style={{ margin: '2rem 2rem 2rem 2rem' }}   > <p> By <span>{author}</span> on <span>{publishedAt}</span>  </p>
                <p>Taken From <a href={url}  target="_blank"  rel="noopener noreferrer" > Article </a> </p>
                </div>
            </div>
        )
    }
}
