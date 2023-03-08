import {gql, useQuery} from "@apollo/client"

const EXERCISE_QUERY = gql`
    query Exercises {
        exercises {
            _id
            exerciseName
            duration
            amount
            date
            exerciseType
        }
    }
`
const Profile = () => {
    const {
        loading, data
    } = useQuery(EXERCISE_QUERY)
    return loading ? ("loading") : (
    <>
        <h1>Profile</h1>
        <ul>
            {
                data?.exercises && data?.exercises.map(
                    ({
                        exerciseName,
                        duration,
                        amount,
                        date,
                        exerciseType
                    }

                ) => (
                    <li key = {_id}>
                        {exerciseName}
                        <ul>
                            <li>Duration: {duration}</li>
                            <li>Reps/Distance: {amount}</li>
                            <li>Date: {date}</li>
                            <li>Exercise type: {exerciseType}</li>
                        </ul>
                    </li>

                ))
            }

        </ul>
    </>
    )
}

export default Profile