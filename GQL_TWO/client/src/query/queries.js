import { gql } from 'apollo-boost';

const RBook = gql`
{
    BookList{
        id,
        bname,
        autherID
    }
}
`;

const RAuther = gql`
{
    AutherList{
        aname,
        id,
        aage
    }
}
`;

const AddMutationAuther = gql`
mutation($aname:String!, $aage:Int!){
    AddAuther(aname:$aname, aage:$aage){
        aname,
        aage
    }
}
`;

const AddMutationBook = gql`
mutation($bname:String!, $bcategory:String!, $brateing:String!, $autherID:String!,$bpublishyear:String!){
    AddBook(bname:$bname, bcategory:$bcategory, brateing:$brateing, autherID:$autherID, bpublishyear:$bpublishyear){
        brateing,
        bname,
        bcategory,
        autherID,
        bpublishyear
    }
}
`;

const BookDetailCode = gql`
query($id:ID){
    BookSearch(id:$id){
        brateing,
        bname,
        bcategory,
        autherID,
        bpublishyear,
        FindAuther{
            id,
            aname,
            aage,
            FindBook{
                bname,
                id
            }
        }
    }
}
`;

export {RBook, RAuther, AddMutationAuther, AddMutationBook, BookDetailCode};