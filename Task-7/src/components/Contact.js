import React from 'react'


const Contact = () => {
  return (
   <div style={{ margin: 'auto', padding: '90px', display : 'block', color: 'black', height: '10px', width: '10px' }  } >
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Enter the name' />
      <label htmlFor="">Email</label>
      <input type="text" placeholder='Enter the email' />
      <button type='submit'>Submit</button>
    </div>
    
  )
}

export default Contact