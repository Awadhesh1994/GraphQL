const _ = require('lodash');
const {
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

const demoBook = [
    {id: "1", bname: "2 state", bcategory: "love", brateing: "4.5", bpublishyear: 2014, autherID: "1"},
    {id: "2", bname: "three mistry in my life", bcategory: "life", brateing: "4", bpublishyear: 2013, autherID: "1"},
    {id: "3", bname: "3 idiots", bcategory: "collage", brateing: "4.5", bpublishyear: 2011, autherID: "2"},
    {id: "4", bname: "steve jobs", bcategory: "technical", brateing: "5", bpublishyear: 2015, autherID: "3"},
    {id: "5", bname: "liunx", bcategory: "technica", brateing: "4.8", bpublishyear: 2012, autherID: "2"}
];

const demoAuther = [
    {id: "1", aname: "ABCD", aage: 29},
    {id: "2", aname: "EFGH", aage: 29},
    {id: "3", aname: "GKLM", aage: 29},
    {id: "4", aname: "NOPQ", aage: 29},
    {id: "5", aname: "RSTU", aage: 29}
];

const Book = new GraphQLObjectType({
    name: 'Book',
    fields:() => ({
        id: {type:GraphQLID},
        bname: {type:GraphQLString},
        bcategory: {type:GraphQLString},
        bpublishyear: {type:GraphQLInt},
        brateing: {type:GraphQLString},
        autherID: {type:GraphQLString},
        FindAuther:{
            type: new GraphQLList(Auther),
            resolve(parent, args){
                return _.filter(demoAuther, {id:parent.autherID});
            }
        }
    })
});

const Auther = new GraphQLObjectType({
    name: 'Auther',
    fields:() => ({
        id: {type:GraphQLID},
        aname: {type:GraphQLString},
        aage: {type:GraphQLInt},
        FindBook:{
            type: new GraphQLList(Book),
            resolve(parent, args){
                return _.filter(demoBook, {autherID:parent.id});
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
   name: 'RootQuery',
   fields:{
       BookSearch:{
           type: Book,
           args: {
               id: {type:GraphQLID}
           },
           resolve(parent, args){
               return _.find(demoBook, {id:args.id});
           }
       },
       BookList:{
           type: new GraphQLList(Book),
           resolve(parent, args){
               return demoBook;
           }
       },
       AutherSearch:{
           type: Auther,
           args: {
               id: {type:GraphQLID}
           },
           resolve(parent, args){
               return _.find(demoAuther, {id:args.id});
           }
       },
       AutherList:{
           type: new GraphQLList(Auther),
           resolve(parent, args){
               return demoAuther;
           }
       }
   } 
});


module.exports = new GraphQLSchema({
    query:RootQuery
});