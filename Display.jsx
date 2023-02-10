import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Display = () => {
    const [woodList, setWoodList] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8001/api/woods')
        .then((res) => {
            console.log("This is my display page data", res.data)
            setWoodList(res.data)
        })
        .catch((err) => {console.log('This is my display page error: ', err)})
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        console.log(`Delete hero ${id}`, e)
        axios.delete(`http://localhost:8001/api/wood/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <div className='p-3 bg-dark text-white'>
                <h1 className='logo'>Wooden Delight</h1>
            <button className='btn btn-outline-success'><Link to={`/create`}>Add a Project</Link></button>
            <button className='btn btn-outline-success'><Link to={`/products`}>Customer View</Link></button>
                <button className='btn btn-outline-success'><Link to={`/contactus`}>Contact Us</Link></button>
            </div>
            <h1 className='bg-light p-2'>My Projects</h1>
            <table className='table'>
                <thead className='bg-secondary'>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Free Shipping</th>
                        <th>Product Link</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        woodList.map((wood, i) => {
                            return(
                                <tr key={i}>

                                    <td>{wood.title}</td>
                                    <td>${wood.price}.00</td>
                                    <td>{wood.shipping ? "Yes" : "No"}</td>
                                    {/* Condition ? Truthy : Falsy */}
                                    <button className="btn btn-outline-success"><Link to={`${wood.buy}`}>Purchase</Link></button>
                                    <td><button className='btn btn-info'>< Link to={`/details/${wood._id}`}>View Specs</Link></button> | <button 
                                    className='btn btn-warning'>< Link to={`/update/${wood._id}`}>Edit</Link></button> | 
                            <button className='btn btn-danger' onClick={(e) => {handleDelete(e, wood._id)}}>Delete</button> |</td>
                                </tr>
                            )
                        })
                    }    
                </tbody>
            </table>
        </div>
    )
}

export default Display