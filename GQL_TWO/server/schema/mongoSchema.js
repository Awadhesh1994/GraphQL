const {
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

const BookSchema = require('../model/Book');
const AutherSchema = require('../model/Auther');

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
            type: Auther,
            resolve(parent, args){
                return AutherSchema.findById(parent.autherID);
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
                return BookSchema.find({autherID:parent.id});
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
               return BookSchema.findById(args.id);
           }
       },
       BookList:{
           type: new GraphQLList(Book),
           resolve(parent, args){
               return BookSchema.find({});
           }
       },
       AutherSearch:{
           type: Auther,
           args: {
               id: {type:GraphQLID}
           },
           resolve(parent, args){
               return AutherSchema.findById(args.id);
           }
       },
       AutherList:{
           type: new GraphQLList(Auther),
           resolve(parent, args){
               return AutherSchema.find({});
           }
       }
   } 
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        AddBook:{
            type: Book,
            args:{
                bname: {type:GraphQLString},
                bcategory: {type:GraphQLString},
                bpublishyear: {type:GraphQLString},
                brateing: {type:GraphQLString},
                autherID: {type:GraphQLString}
            },
            resolve(parent, args){
                let BS = new BookSchema({
                    bname:args.bname,
                    bcategory:args.bcategory,
                    bpublishyear:args.bpublishyear,
                    brateing:args.brateing,
                    autherID:args.autherID
                });
                return BS.save();
            }
        },
        AddAuther:{
            type: Auther,
            args:{
                aname: {type:GraphQLString},
                aage: {type:GraphQLInt}
            },
            resolve(parent, args){
                let AS = new AutherSchema({
                    aname:args.aname,
                    aage:args.aage
                });
                return AS.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
});