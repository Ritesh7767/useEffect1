import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const Fetch = () => {

    let [data, setData] = useState([])

    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products")
        .then(res => {
            setData(res.data)
        })
        .catch(err => console.log(err))

        return () => console.log("component unmounted") 

    }, [])
    
  return (
    <>
        {data.map(ele => {
            return <img src={ele.image}/>
        })}
    </>
  )
}

export default Fetch