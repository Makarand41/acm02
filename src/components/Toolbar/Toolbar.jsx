import React from 'react';
import './Toolbar.css'; 

import Phased from '../../assets/images/toolbar/1Phased.png';

import Learning from '../../assets/images/toolbar/2Learning.png';
import Narrative from '../../assets/images/toolbar/3Narrative.png';
import CustomColumns from '../../assets/images/toolbar/4CustomColumns.png';
import RiskStatistics from '../../assets/images/toolbar/5RiskStatistics.png';
import WhatIf from '../../assets/images/toolbar/6WhatIf.png';
import Delta from '../../assets/images/toolbar/7Delta.png';
import Inflation from '../../assets/images/toolbar/8Inflation.png';
import Documentation from '../../assets/images/toolbar/9Documentation.png';
import InputSheets from '../../assets/images/toolbar/10InputSheets.png';
import More from '../../assets/images/toolbar/11More.png';
import Favourites from '../../assets/images/toolbar/12Favourites.png';
import ManageSheets from '../../assets/images/toolbar/13ManagSheets.png';
import DesignNewReports from '../../assets/images/toolbar/14DesignNewReports.png';
import ImportReports from '../../assets/images/toolbar/15ImportReports.png';



const Toolbar = () => {
  return (
    <div className="toolbar">

      {/* View Section */}
      <div className="vsection">
        <div className="vtools">
          <div className="tool"><img src={Phased}  />Phased</div>
          <div className="tool"><img src={Learning}  />Learning</div>
          <div className="tool"><img src={Narrative} />Narrative</div>
          <div className="tool"><img src={CustomColumns}  />Custom<br />Columns</div>
          <div className="tool"><img src={RiskStatistics}  />RISK<br />Statistics</div>
          <div className="tool"><img src={WhatIf}  />What-if</div>
          <div className="tool"><img src={Delta}  />Delta</div>
          <div className="tool" style={{ marginRight: '25px' }}><img src={Inflation}  />Inflation</div>
          


        <div className="tool" style={{ marginRight: '22px' }}>
          <img src={Documentation} />Documentation
        </div>


          <div className="tool"><img src={InputSheets}  />Input Sheets</div>
          <div className="tool"><img src={More}  />More</div>
        </div>
        <div className="vsection-title">View</div>
      </div>


      {/* Organize Section */}
      <div className="osection">
        <div className="otools">
          <div className="tool" style={{ marginRight: '16px' }}><img src={Favourites} />Favorites</div>
          <div className="tool"><img src={ManageSheets}  />Manage<br />Sheets</div>
        </div>
        <div className="osection-title">Organize</div>
      </div>


       {/* Custom Reports Section */}
      <div className="crsection">
        <div className="crtools">
          <div className="tool" style={{ marginRight: '20px',marginLeft: '20px' }} ><img src={DesignNewReports}/>Design New&nbsp;Reports</div>
          <div className="tool" style={{ marginLeft: '7px'}}><img src={ImportReports} />Import<br />Reports</div>
        </div>
        <div className="crsection-title custom">Custom Reports</div>
      </div>

      </div>



        


     
  );
};

export default Toolbar;
