import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShelterContext } from "../App"
import Banner from "../components/Banner"
import DeleteButton from "../components/DeleteButton"

const Home = () => {
    const [petList] = useContext(ShelterContext)
    return (
        <div className='container'>
            <Banner path={"/pets/new"} title={"Add a pet to the shelter"} />
            <h2>These pets are looking for a good home</h2>
            <table className="table table-hover table-dark table-striped" style={{minWidth:"fit-content", width:"50vw"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {petList &&
                        petList.map((pet,i) => {
                            return (
                                <tr key={i}>
                                    <td>{pet.name}</td>
                                    <td>{pet.petType}</td>
                                    <td>
                                        <Link to={`/pets/${pet._id}`}>Details</Link> | &nbsp;
                                        <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Home