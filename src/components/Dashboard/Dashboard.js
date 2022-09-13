import React from 'react'

const Dashboard = ({getItems}) => {
  return (
    <div>
        
        {getItems.map((getItem,index) => {
            return(
            <img className='w-1/4' src={getItem} alt="foto" key={index} />
            )
        })}
    </div>
  )
}

export default Dashboard