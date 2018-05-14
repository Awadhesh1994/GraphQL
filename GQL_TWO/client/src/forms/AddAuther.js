import React, { Component } from 'react';
import { RAuther, AddMutationAuther } from '../query/queries';
import { graphql, compose } from 'react-apollo';

class AddAuther extends Component{
    constructor(props){
        super(props);
        this.state = {
            aname: '',
            aage: ''
        };
    }
    submitForm(e){
        e.preventDefault();
        this.props.AddMutationAuther({
            variables:{
                aname: this.state.aname,
                aage: this.state.aage
            },
            refetchQueries: [{query: RAuther}]
        });
    }
    render(){
        return(
            <form onSubmit={this.submitForm.bind(this)}>
                <input onChange={(e) => this.setState({aname:e.target.value})} className="form-control m-md-2" placeholder="enter auther name" type="text"/>
                <input onChange={(e) => this.setState({aage:e.target.value})} className="form-control m-md-2" placeholder="enter auther age" type="number"/>
                <button className="btn btn-primary m-md-2" type="submit"> Save </button>
            </form>
        );
    }
}

export default compose(
    graphql(RAuther, {name:"RAuther"}),
    graphql(AddMutationAuther, {name:"AddMutationAuther"})
)(AddAuther);