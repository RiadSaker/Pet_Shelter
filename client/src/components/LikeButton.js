import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


const LikeButton = () => {
    const {id} = useParams()
    const [pet,setPet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    },[pet])

    const addLike = () => {
        document.getElementById("btn").disabled = true
        const updatedPetLikes = {
            name: pet.name,
            petType: pet.petType,
            description: pet.description,
            tricks: pet.tricks,
            likes: pet.likes+=1
        }
        axios.put(`http://localhost:8000/api/pets/${id}`, updatedPetLikes)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div id="like-btn">
            <button id="btn" className="btn btn-success" onClick={addLike}>
                Like {pet.name}
            </button> &nbsp;
            <span>Like(s): {pet.likes}</span>
        </div>
    )
}

export default LikeButton