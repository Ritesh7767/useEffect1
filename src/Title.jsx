import React from 'react'
import { useEffect } from 'react'

const Title = ({flag}) => {

    useEffect(() => {
        flag ? document.title = "Event Component Mounted" : document.title = "Fetch Component Mounted"
    })
  return (
    <></>
  )
}

export default Title