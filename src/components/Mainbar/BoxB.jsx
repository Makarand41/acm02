import React from 'react'
import periodic from '../../assets/images/boxB/periodic.jpg';
import constants from '../../assets/images/boxB/constants.png';
const BoxB = () => {
  return (
    <>
         
      <div style={{paddingLeft:'15px'}}>
        <label style={{color:'red' ,fontWeight:'bold'}}>Equation/Value</label><br/>
        <input type="text" style={{ width: '800px' }} />
      </div>
     <br/>

       <div style={{paddingLeft:'15px'}}>
        <label style={{fontWeight:'bold'}}>Start Date: <input type="date" /></label>

        <label style={{fontWeight:'bold',paddingLeft:"30px"}}>Finish Date: <input type="date" /></label>
      </div>
    <br/>
      <div style={{paddingLeft:'15px'}} >
        <label>$ Approx: <input type="text" /></label>
        <label style={{paddingLeft:'15px'}}>FY: <input type="text" /></label>
        <label style={{paddingLeft:'15px'}}>Units: <input type="text" /></label>
      </div>

      <div style={{paddingLeft:'15px'}}>
        <p>Status: <span style={{color:'green',fontWeight:'bold'}}>Complete</span></p>
      </div>

   <hr style={{ border: "1px solid black", margin: "1px 0px" }} />


    <div >
        <label ><input type="checkbox" /> Calculate Total as average</label>
      </div>

      <div>
        <label >  <span style={{fontWeight:'bold'}}>Calculate</span>: <input value={'Annual'}  style={{ width: '60px' ,textAlign:
        'center'}}/></label>
        
        <label style={{paddingLeft:'15px'}}> <span style={{fontWeight:'bold'}}>Lead/Lag</span>: None</label>
      </div>

      <div>
        <label ><span style={{fontWeight:'bold'}}>RISK Specification</span>: None</label>
      </div>

     
    </>
  )
}

export default BoxB
