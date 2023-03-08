const { Exercise, User } = require("../models")

const resolvers = {
    Query: {
        user: async (_, {_id}) => {
            const user = await User.findById(_id)
            return user

        },
        exercises: async () => {
            const exercises = await Exercise.find({})
                return exercises
        }
       
    },
    Mutation: {
        addExercise: async (_,  {
            _id,
            exerciseName, 
            duration, 
            amount, 
            date, 
            exerciseType
        }) => {
            const newExercise = {
                _id: ID || undefined,
                exerciseName: exerciseName || "Workout",
                duration: duration || 0,
                amount: amount || 0,
                date: new Date (date) || undefined,
                exerciseType: exerciseType || "Cardio"
            
            }
            const exercise = Exercise.create(newExercise)
            return exercise
        }

    },
}

module.exports = resolvers