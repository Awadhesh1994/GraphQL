import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { RBook } from '../query/queries';
import BookDetails from '../details/BookDetails';

class BookPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBook(){
        const Data = this.props.data;
        if(Data.loading){
            return (
                <h1> Loading ... </h1>
            );
        }else{
            return Data.BookList.map( b => {
                return(
                    <button key={b.id} onClick={(e) => {this.setState({selected:b.id})}} className="btn btn-danger m-md-1">{b.bname}</button>
                );
            });
        }
    }
    render(){ 
       return(
        <div>   
            <h1> BookPage </h1>
            {this.displayBook()}
            <BookDetails  bookid={this.state.selected}/>
        </div>
       );
    }
}

export default graphql(RBook)(BookPage);