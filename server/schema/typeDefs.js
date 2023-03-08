const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        exercises: [Exercise]
    }

    type Exercise {
        _id: ID
        exerciseName: String
        duration: Number
        amount: Number
        date: Date
        exerciseType: String

    }

    type Query {
        user(id: ID): User
        exercise: [Exercise]
    }

    type Mutation {
        addExercise(
            exerciseName: String
            duration: Number
            amount: Number
            date: Date
            exerciseType: String
        ): Exercise
    }
   
`
module.exports = typeDefs