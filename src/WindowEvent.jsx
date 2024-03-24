import React from 'react'
import { useEffect, useState } from 'react'

const WindowEvent = () => {

  let [windowInnerWidth, setWindowInnerWidth] = useState({
    innerWidth : window.innerWidth, innerHeight : window.innerHeight
  });

  const handleResize = () => {
    setWindowInnerWidth({innerWidth : window.innerWidth, innerHeight : window.innerHeight})
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return window.removeEventListener("resize", handleResize)
  })

  return (
    <>
      <h1>{`Window width => ${windowInnerWidth.innerWidth}`}</h1>
      <h1>{`Window height => ${windowInnerWidth.innerHeight}`}</h1>
    </>
  )
}

export default WindowEvent