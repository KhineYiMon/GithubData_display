import React from 'react'

function Display({displayData}) {
 
  return (
    <div>
        {
          displayData.map((displayinfo)=>{
            return(
              <div>
                <img src={displayinfo.avatar_url} width={100} height={100} alt="Logo" />
              <div>
              <h4>{displayinfo.name}</h4>
              <p>{displayinfo.blog}</p>
              </div>
              </div>
                )
            })
        }
    </div>
  )
}
export default Display