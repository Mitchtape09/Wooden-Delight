import React, {useState} from "react";
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [buy, setBuy] = useState("")
    const [price, setPrice] = useState(5)
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [shipping, setShipping] = useState(false)

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const songObj = {title, image, buy, price, description, email, shipping}

        axios.post(`http://localhost:8001/api/woods`, songObj)
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            console.log("This is our create page catch error: ", err)
            const errorResponse = err.response.data.errors; //Get the errors from the <err className="response data
            const errorArr = []; //Define a temp error array to push the messages in
            for(const key of Object.keys(errorResponse)) { //Loop through all the errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            //Set Errors
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <div className='p-3 mb-3 bg-dark text-white'>
                <h1 className='logo'>Wooden Delight</h1>
                <button className='btn btn-outline-success'><Link to={`/products`}>Customer View</Link></button>
                <button className='btn btn-outline-success'><Link to={`/contactus`}>Contact Us</Link></button>
            </div>
            <form onSubmit={handleSubmit} className="position-absolute top-50 start-50 translate-middle w-25 p-5 bg-light">
                    {errors.map((err,index) => <p key={index}>{err}</p>)}
                <div>
                    <label className='form-label'>Title</label>
                    <input className='form-control' type="text" onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Image</label>
                    <input className='form-control' type="text" onChange={(e) => {setImage(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Purchase Link</label>
                    <input className='form-control' type="text" onChange={(e) => {setBuy(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Price</label>
                    <input className='form-control' type="number" onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Description</label>
                    <input className='form-control' type="text" onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Email</label>
                    <input className='form-control' type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Free Shipping?</label>
                    <input type="checkbox" onChange={(e) => {setShipping(e.target.checked)}}/>
                </div>
                <div>
                    <button className='btn btn-outline-success' type="submit">Add Project</button> | <button className="btn btn-outline-danger"><Link to={'/'}>Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Create;