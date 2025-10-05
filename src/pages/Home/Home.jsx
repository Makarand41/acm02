import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Mainbar from '../../components/Mainbar/Mainbar'
import MainFooter from '../../components/Footer/MainFooter'
import './Home.css'

const Home = () => {
  return (
    <>
      
      <Toolbar/>

      <div className="content-container">
        <Sidebar />

        <div className="main-content">
          <Mainbar />
          <MainFooter />
        </div>
      </div>
    </>
  )
}

export default Home
