import React from 'react'

const Categories = ({Clothes}) => {
  return (
    <div >
      <div className='shadow-md p-8 bg-white '>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="female"> female</label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label htmlFor="male"> I have a car</label>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label htmlFor=""> I have a boat</label>
 
      </div>
      <div className='flex flex-wrap mt-8 '>
        {Clothes.map((cloth) => {
            return(
            <img className='w-44 mx-4' src={cloth.img} alt="foto" key={cloth.id} />
            )
        })}
      </div>


    </div>
  )
}

export default Categories