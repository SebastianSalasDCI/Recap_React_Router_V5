import React from 'react'
import { useHistory } from 'react-router-dom'

export default function SelectButtons() {

  const history = useHistory();
  console.log(history);
  const basePath = history.location.pathname.substr(0,5); // This is not robust, maybe using split('/') will be better
  return (
    <div className="buttonContainer" >
      {
        [1,2,3,4,5].map(id=> (
          <button   
            key={id}
            onClick={()=>history.push(`${basePath}/${id}`)} 
          >
            {id}
          </button>
        ))
      }
    </div>
  )
}
