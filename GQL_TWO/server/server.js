const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoSchema = require('./schema/mongoSchema');
const simpleSchema = require('./schema/schema');

app.use(cors());

mongoose.connect("mongodb://awadhesh:toor12345@ds123534.mlab.com:23534/gql-awadhesh", ()=> {
    console.log("Mongoose Connectd");
})

app.use('/', graphqlHTTP({
    schema:mongoSchema,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Your server running at http://localhost:8000');
});
