import React from 'react'
import ownStyle from '../Titles.module.css'
export default function index({text,style}) {
  return (
    <h1 style={{...style}} className={ownStyle["MainTitle"]}>{text}</h1>
  )
}
