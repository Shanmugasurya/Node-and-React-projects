import React,{Component} from 'react';
import axios from 'axios';
export class BookComponent1 extends Component{
    constructor()
    {
        super();
        this.state={
            book:[
            
            
            ]
        }
        
    }
    
async componentDidMount()
    {
        let bookList =await axios("https://fakerestapi.azurewebsites.net/api/CoverPhotos");
        console.log(bookList);
        this.setState({book: bookList.data});
    }

    bindData=()=>
    {
        return this.state.book.map((item,index)=>{
        return <img src={item.Url}alt={index}></img>
        })
    }
    render()
    {
        
        return <div>
            {this.bindData()}
    </div>
        
    }
}
