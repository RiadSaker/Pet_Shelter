import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import DeleteButton from '../components/DeleteButton'
import LikeButton from '../components/LikeButton'

const PetDetails = () => {
    const {id} = useParams()
    const [pet,setPet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div className='container'>
            <Banner path={"/"} title={"Back to Home"}/>

            <div className="card">
                <div className="card-header">
                    <div className='flex-between-center'>
                        <h2>Details About: {pet.name}</h2>
                        <DeleteButton id={pet._id} name={pet.name} />
                    </div>
                </div>
                <div className="card-body">
                    <div className='flex-gap-base'>
                        <section>
                            <h3><strong>Pet Type:</strong></h3>
                        </section>
                        <section>
                            <h4>{pet.petType}</h4>
                        </section>
                    </div>
                    <div className='flex-gap-base'>
                        <section>
                            <h3><strong>Description:</strong></h3>
                        </section>
                        <section>
                            <h4>{pet.description}</h4>
                        </section>
                    </div>
                    <div className='flex-gap-base'>
                        <section>
                            <h3><strong>Skills:</strong></h3>
                        </section>
                        <section>
                        {pet.tricks && 
                            pet.tricks.map((trick,i) => {
                                if (trick.length>0) {
                                    return(
                                        <h4 key={i}>{trick}</h4>
                                    )
                                }
                            })
                        }
                        </section>
                    </div>
                    <br/>
                    <LikeButton />
                </div>
            </div>
        </div>
    )
}

export default PetDetails