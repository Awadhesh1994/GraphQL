import React, { Component } from 'react';
import { BookDetailCode } from '../query/queries';
import { graphql } from 'react-apollo';

class BookDetails extends Component{
    displayDetails(){
        const {BookSearch} = this.props.data;
        if(BookSearch){
            return(
                <div>
                    <h1> {BookSearch.bname} </h1>
                    <p> {BookSearch.id} </p>
                    <p> {BookSearch.FindAuther.aaname} </p>
                    <h3> All Book of Auther </h3>
                    <ul> 
                        {BookSearch.FindAuther.FindBook.map(i=>{
                            return  <li key={i.id}> {i.bname} </li>             
                        })}
                    </ul>
                </div>
            )
        }else{
            return(
                <div>
                    No Book
                </div>
            )
        }
    }
    render(){
        console.log(this.props);
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-md-3">
                <div className="card bg-dark p-md-3">
                    <h1>
                        Book Details
                    </h1>
                    {this.displayDetails()}
                </div>
            </div>
        );
    }
}

export default graphql(BookDetailCode,{
    options:(props) => {
        return{
            variables:{
                id:props.bookid
            }
        }
    }
})(BookDetails);