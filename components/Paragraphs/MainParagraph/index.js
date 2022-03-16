import React from 'react'
import ownStyles from '../Paragraphs.module.css'
export default function index({content,style}) {
  return (
    <p className={ownStyles["MainParagraph"]} style={{...style}}>{content}</p>
  )
}
