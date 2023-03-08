import {gql, useMutation} from "@apollo/client"

const ADD_EXERCISE = gql`
mutation AddExercise($exerciseName: String, $duration: Number, $amount: Number, $date: Date, $exerciseType: String){
    addExercise(exerciseName: $exerciseName, duration: $duration, amount: $amount, date: $date, exerciseType: $exerciseType){
        exerciseName
        duration
        amount
        date
        exerciseType
    }
}
`

const Add = () => {
    const[
        addExercise,
        {loading, data} ] = useMutation(ADD_EXERCISE)
    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData (form);

        const formJson = Object.fromEntries(formData.entries());
        addExercise({
            variables: formJson
        })

    }
    return(
    <>
    <h1>Add new exercise entry</h1>
    <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exerciseName">Exercise: </label>
            <input name = "exerciseName" id = "exerciseName" type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="duration">Duration in minutes: </label>
            <input name = "duration" id = "duration" type="type" />
        </div>
        <div className="form-group">
            <label htmlFor="amount">Reps/Distance: </label>
            <input name = "amount" id = "amount" type="number" />
        </div>
        <div className="form-group">
            <label htmlFor="date"> Date: </label>
            <input name = "date" id = "date" type="date" />
        </div>
        <div className="form-group">
            <label htmlFor="exerciseType">Exercise type: </label>
            <input name = "exerciseType" id = "exerciseType" type="text" />
        </div>
        <button type= "submit">Add Exercise to Journal</button>
    </form>
    </>
)}

export default Add