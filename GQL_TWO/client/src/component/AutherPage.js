import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { RAuther } from '../query/queries';

class AutherPage extends Component{
    displayAuther(){
        const Data = this.props.data;
        if(Data.loading){
            return(
                <h1> Loading ... </h1>
            ); 
        }else{
            return Data.AutherList.map( a => {
                return(
                    <p key={a.id} id={a.id} className="btn btn-warning m-md-1">{a.aname}</p>
                )
            })
        }
    }
    render(){
        return(
            <div>
                <h1> Auther Page </h1>
                {this.displayAuther()}
            </div>
        );
    }
}

export default graphql(RAuther)(AutherPage);