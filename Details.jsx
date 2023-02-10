import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

const Details = () => {

    const [wood, setWood] = useState("")
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8001/api/woods/${id}`)
        .then((res) =>{ console.log(res); setWood(res.data)})
        .catch((err) => console.log("This is our detail page: ", err))
    }, [id])

    return (
        <div>
            <div className='p-3 mb-3 bg-dark text-white'>
                <h1 className='logo'>Wooden Delight</h1>
                <button className='btn btn-outline-success'><Link to={`/`}>Home</Link></button>
                <button className='btn btn-outline-success'><Link to={`/products`}>Customer View</Link></button>
                <button className='btn btn-outline-success'><Link to={`/contactus`}>Contact Us</Link></button>
            </div>
            <div className='bg-light m-3 p-3'>
                <p>Title: {wood.title}</p>
                <p>Image: {wood.image}</p>
                <p>Purchase Link: {wood.buy}</p>
                <p>Price: {wood.price}</p>
                <p>Description: {wood.description}</p>
                <p>Email: {wood.email}</p>
                <p>Free Shipping?: {wood.shipping ? "Yes" : "No"}</p>
            </div>


        </div>
    )
}

export default Details;