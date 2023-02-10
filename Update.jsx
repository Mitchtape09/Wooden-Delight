import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'



//useEffect, useState, axios, useParams, useNavigate
const Update = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [buy, setBuy] = useState("")
    const [price, setPrice] = useState(5)
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [shipping, setShipping] = useState(true)

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8001/api/woods/" + id)
        .then((res) => {
            console.log("This is my update get request: ", res.data)
            const wood = res.data
            setTitle(wood.title)
            setImage(wood.image)
            setBuy(wood.buy)
            setPrice(wood.price)
            setDescription(wood.description)
            setEmail(wood.email)
            setShipping(wood.shipping)
        })
        .catch((err) => console.log("This is our update page get req error: ", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const putObj = {title, image, buy, price, description, email, shipping}
        axios.put(`http://localhost:8001/api/wood/${id}`, putObj)
        .then((res) => {
            navigate("/")
        })
        .catch(err => console.log("This is my update put request error: ", err))
    }

    return (
        <div>
            <div className='p-3 mb-3 bg-dark text-white'>
                <h1 className='logo'>Wooden Delight</h1>
                <button className='btn btn-outline-success'><Link to={`/`}>Home</Link></button>
                <button className='btn btn-outline-success'><Link to={`/contactus`}>Contact Us</Link></button>
            </div>
            <form onSubmit={handleSubmit} className="position-absolute top-50 start-50 translate-middle w-25 p-5 bg-light">
                <div>
                    <label className='form-label'>Title</label>
                    <input className='form-control' type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Image</label>
                    <input className='form-control' type="text" value={image} onChange={(e) => {setImage(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Purchase Link</label>
                    <input className='form-control' type="text" value={buy} onChange={(e) => {setBuy(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Price</label>
                    <input className='form-control' type="number" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Description</label>
                    <input className='form-control' type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Email</label>
                    <input className='form-control' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label className='form-label'>Free Shipping?</label>
                    <input  type="checkbox" checked={shipping} onChange={(e) => {setShipping(e.target.checked)}}/>
                </div>
                    <button className='btn btn-outline-success' type="submit">Update Project</button> | <button className="btn btn-outline-danger"><Link to={'/'}>Cancel</Link></button>
                <div>
                </div>
            </form>
        </div>
    )
}

export default Update