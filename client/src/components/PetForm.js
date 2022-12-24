import { useState } from 'react'

const PetForm = ({submitProp,initName,initType,initDesc,initTricks,initLikes,errors,icon,btn}) => {
    const [name,setName] = useState(initName)
    const [petType,setPetType] = useState(initType)
    const [description,setDescription] = useState(initDesc)
    const [trick1,setTrick1] = useState(initTricks[0])
    const [trick2,setTrick2] = useState(initTricks[1])
    const [trick3,setTrick3] = useState(initTricks[2])

    const handleSubmit = e => {
        e.preventDefault()
        submitProp({
            name,
            petType,
            description,
            tricks: [
                trick1,trick2,trick3
            ],
            likes: initLikes
        })
    }

    return (
        <form>
            <div className='flex-gap-center'>
                <div className='flex-col-evenly-start'>
                    <p>
                        <label>
                            Pet Name: <br/>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                    </p>
                    {errors.name && <p className='error'>{errors.name.message}</p>}
                    <p>
                        <label>
                            Pet Type: <br/>
                            <input type="text" value={petType} onChange={e => setPetType(e.target.value)} />
                        </label>
                    </p>
                    {errors.petType && <p className='error'>{errors.petType.message}</p>}
                    <p>
                        <label>
                            Pet Description: <br/>
                            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                        </label>
                    </p>
                    {errors.description && <p className='error'>{errors.description.message}</p>}
                </div>
                <div className='flex-col-evenly-start'>
                    <h6>Skills (Optional):</h6>
                    <p>
                        <label>
                            Skill 1: <br/>
                            <input type="text" value={trick1} onChange={e => setTrick1(e.target.value)} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Skill 2: <br/>
                            <input type="text" value={trick2} onChange={e => setTrick2(e.target.value)} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Skill 3: <br/>
                            <input type="text" value={trick3} onChange={e => setTrick3(e.target.value)} />
                        </label>
                    </p>
                </div>
            </div>
            <button onClick={e => handleSubmit(e)} className="btn btn-primary">
                {icon}
                &nbsp;&nbsp;&nbsp;{btn}
            </button>
        </form>
    )
}

export default PetForm