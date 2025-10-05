import React, { useState } from 'react'
import './Vector1.css'
import beta from "../../assets/images/vector1/beta.jpg";  
import milestone from "../../assets/images/vector1/milestone.jpg";  
import percent from "../../assets/images/vector1/percent.jpg";  
import rayleigh from "../../assets/images/vector1/rayleigh.jpg";  
import trapezoid from "../../assets/images/vector1/trapezoid.jpg";  
import weibull from "../../assets/images/vector1/weibull.jpg";  
import Beta from './Beta'
import Milestone from './Milestone'
import Percent from './Percent'
import Rayleigh from './Rayleigh'
import Trapezoid from './Trapezoid'
import Weibull from './Weibull'


const Vector1 = () => {
  const [activeSection, setActiveSection] = useState(null); 


  return (
    <>
      {activeSection === null && (
        <>
          <div className='box1'>
            <img src={beta} onClick={() => setActiveSection("beta")} />
            <img src={milestone} onClick={() => setActiveSection("milestone")}/>
            <img src={percent} onClick={() => setActiveSection("percent")}/>
            <img src={rayleigh} onClick={() => setActiveSection("rayleigh")}/>
            <img src={trapezoid} onClick={() => setActiveSection("trapezoid")}/>
            <img src={weibull} onClick={() => setActiveSection("weibull")}/>
          </div>

          <div className='box2'>
            <h3>EQUATION or VALUE REPRESENTS TOTAL <br/>SPREAD OVER TIME</h3>
            <p>
              Specify total value/equation, and how to spread it over time using <br/> 
              Beta curve, Weibull, Rayleigh, Trapezoid, Percentages, or Milestone phasing profile. <br/> 
              Click a button above to enter time phasing information.
            </p>
          </div>
        </>
      )}

      {activeSection === "beta" && <Beta setActiveSection={setActiveSection} />}
{activeSection === "milestone" && <Milestone setActiveSection={setActiveSection} />}
{activeSection === "percent" && <Percent setActiveSection={setActiveSection} />}
{activeSection === "rayleigh" && <Rayleigh setActiveSection={setActiveSection} />}
{activeSection === "trapezoid" && <Trapezoid setActiveSection={setActiveSection} />}
{activeSection === "weibull" && <Weibull setActiveSection={setActiveSection} />}

    
    </>
  )
}

export default Vector1
