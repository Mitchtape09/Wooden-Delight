import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Customer = () => {
    const [woodList, setWoodList] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8001/api/products')
        .then((res) => {
            console.log("This is my display page data", res.data)
            setWoodList(res.data)
        })
        .catch((err) => {console.log('This is my display page error: ', err)})
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        console.log(`Delete hero ${id}`, e)
        axios.delete(`http://localhost:8001/api/products/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => console.log(err))
    }
    return (
    <div>
        <div className='p-3 mb-2 bg-dark text-white'>
            <h1 className='logo'>Wooden Delight</h1>
            <button className='btn btn-outline-success'><Link to={`/`}>Back to Business Page</Link></button>
            <button className='btn btn-outline-success'><Link to={`/chat`}>ChatBot</Link></button>
            <button className='btn btn-outline-success'><Link to={`/contactus`}>Contact Us</Link></button>
        </div>
            <div className='cardHolder p-3 m-3 d-flex flex-wrap'>
        {
            woodList.map((wood, i) => {
                return(
                        <div className="card p-3 m-2 d bg-light">
                            <img src={wood.image} className="card-img-top w-50 h-50 p-3 border border-secondary" alt="..."/>
                            <div className="card-body b">
                                <h5 className="card-title">{wood.title}</h5>
                                <p className="card-text">Price: ${wood.price}.00</p>
                                <p className="card-text">Free Shipping: {wood.shipping ? "Yes" : "No"}</p>
                                <p className="card-text">{wood.description}</p>
                                <button className="btn btn-outline-success"><Link to={`${wood.buy}`}>Purchase</Link></button>
                            </div>
                        </div>
                        )
                    })
                }  
        </div>
    </div>
    )
}

export default Customer