import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookPage from './component/BookPage';
import AutherPage from './component/AutherPage';
import AddAuther from './forms/AddAuther';
import AddBook from './forms/AddBook';

const Aclient = new ApolloClient({
  uri:'http://localhost:8000/'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={Aclient}>
        <div className="App">
          <div className="container mt-md-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 float-left">
              <div className="card bg-info p-md-3">
                <BookPage/>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 float-left">
                <div className="card bg-success p-md-3">
                  <AddBook/>
                </div>
            </div>
          </div>
          <div className="container mt-md-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 float-left mt-md-3">
              <div className="card bg-danger p-md-3">
                <AutherPage/>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 float-left mt-md-3 mb-md-3">
                <div className="card bg-warning p-md-3">
                  <AddAuther/>
                </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
