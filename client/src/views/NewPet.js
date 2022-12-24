import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Banner from "../components/Banner"
import PetForm from "../components/PetForm"

const NewPet = () => {
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const addPet = newPet => {
        axios.post("http://localhost:8000/api/pets", newPet)
            .then(() => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div className='container'>
            <Banner path={"/"} title={"Back to Home"} />
            <h2>Know a pet needing a home?</h2>
            <PetForm 
                submitProp={addPet}
                initName={""}
                initType={""}
                initDesc={""}
                initTricks={["","",""]}
                initLikes={0}
                errors={errors}
                icon={<i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>}
                btn={"Add Pet"}
            />
        </div>
    )
}

export default NewPet