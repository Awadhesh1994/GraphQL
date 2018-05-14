import React, { Component } from 'react';
import { RAuther, AddMutationAuther, AddMutationBook, RBook } from '../query/queries';
import { graphql, compose } from 'react-apollo';

class AddBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            brateing: '',
            bname: '',
            bcategory: '',
            autherID: '',
            bpublishyear: ''
        };
    }
    displayAutherList(){
        const Data = this.props.RAuther;
        if(Data.loading){
            return(
                <option> Loading .. </option>
            );
        }else{
            return Data.AutherList.map( a => {
                return(
                <option key={a.id} value={a.id}>{a.aname}</option>
                );
            })
        }
    }
    submitForm(e){
        e.preventDefault();
        this.props.AddMutationBook({
            variables:{
                brateing: this.state.brateing,
                bname: this.state.bname,
                bcategory: this.state.bcategory,
                autherID: this.state.autherID,
                bpublishyear: this.state.bpublishyear
            },
            refetchQueries: [{query:RBook}]
        });
    }
    render(){
        return(
            <form onSubmit={this.submitForm.bind(this)}>
                <input onChange={(e) => this.setState({bname:e.target.value})} className="form-control m-md-2" placeholder="enter book name" type="text"/>
                <input onChange={(e) => this.setState({bcategory:e.target.value})} className="form-control m-md-2" placeholder="enter book category" type="text"/>
                <input onChange={(e) => this.setState({bpublishyear:e.target.value})} className="form-control m-md-2" placeholder="enter book publishyear" type="text"/>
                <input onChange={(e) => this.setState({brateing:e.target.value})} className="form-control m-md-2" placeholder="enter book rateing" type="text"/>
                <select className="form-control m-md-2" onChange={(e) => this.setState({autherID:e.target.value})}>
                    <option> Select </option>
                    {this.displayAutherList()}
                </select>
                <button className="btn btn-primary m-md-2" type="submit"> Save </button>
            </form>
        );
    }
}

export default compose(
    graphql(RAuther, {name:"RAuther"}),
    graphql(AddMutationAuther, {name:"AddMutationAuther"}),
    graphql(AddMutationBook, {name:"AddMutationBook"})
)(AddBook);