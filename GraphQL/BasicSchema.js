var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(
    `type Query{
        user: User
    }
    
    type Photos {
        id: String
        path: String
    }
    
    type User {
        id: String
        name: String
        email: String
        photos: [Photos]
    }`
);

var root = {
    user: () => {
        return {
            id: 323223,
            name: 'John Doe',
            email: 'john.doe@example.com',
            photos: [{
                id: 123,
                path: '/img/path/here'
            }]
        }
    },

    photos: () => {
        return {
            id: 123,
            path: '/img/path/here'
        }
    }
}