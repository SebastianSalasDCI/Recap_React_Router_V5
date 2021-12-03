import React from 'react'
import SelectButtons from '../../components/SelectButtons/SelectButtons'

export default function CatsView({match,history}) {

  const imgSrc = require(`../../assets/images/cats/cat${match.params.id}.jpg`)

  return (
    <div className="catContainer" >
      <SelectButtons />
      <img src={imgSrc.default} alt="cat photos" />
      <button 
        onClick={()=>history.push('/')}
        className="backButton"
      >Back to Landing</button>
    </div>
  )
}
