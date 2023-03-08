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
            exerciseName, 
            duration, 
            amount, 
            date, 
            exerciseType
        }) => {
            const newExercise = {
                exerciseName: exerciseName || "Workout",
                duration: duration || 0,
                amount: amount || 0,
                date: date || Date.now().toLocaleString(),
                exerciseType: exerciseType || "Cardio"
            
            }
            const exercise = Exercise.create(newExercise)
            return exercise
        }

    },
}

module.exports = resolvers