import React from 'react'

const Navber = () => {
  return (
    <div>
      <div className='bg-img'>
          <div class="topnav">
            <div className='im'>
              <img src="https://techlane.ai/wp-content/uploads/2023/05/cropped-cover-e1685195280576-176x38.png" alt="..." />
            </div>
            <center>
            <div className='st'>
              <a aria-current="page" href="Home">HOME</a>
              <a href="SERVICSE">SERVICES</a>
              <a href="ABOUT">ABOUT</a>
              <a href="CONTACT">CONTACT</a>
            </div></center>
            <div className='he'>
           <button>  <a className='al' href="GetAQuote">GetAQuote</a></button> 
            </div>
          </div>
           <h1 className='anki'>World's Leading AI Consultancy</h1>
         <div className='shubhu'>
         <p className='baba'>If you are looking for an AI consultancy service to help you create a remarkable presence digitally, you’ve come to the right place. We can help you take your business to the next level.</p>
      
         </div>

         
           
          </div>
        </div>
      
  )
}

export default Navber