import React, { Component } from 'react';
import axios from 'axios';

export class BookComponent extends Component {
    constructor() {
        super();
        this.state = {
            bookList:[]
        }
    }

    async componentDidMount() {
        let book = await axios("https://fakerestapi.azurewebsites.net/api/CoverPhotos");
        console.log(book);
        this.setState({bookList:book.data});
    }

    bindDatatoBook = () => {
        return this.state.bookList.map((item,index)=>{
            return <img src={item.Url} alt={index}></img>
        })
    }
    
    render() {
        return <div>
            <label>Select Preferred</label>
            <div>
            {this.bindDatatoBook()}
            </div>
        </div>
    }
}
