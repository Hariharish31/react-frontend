import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      {/* <video src='/assets/video1.mp4' autoPlay loop muted /> */}
      <h1>Making Health Check-up facilities a lot easier!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('Logged In Successfully')}
        >
          LOG IN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Signed Up Successfully')}

        >
          SIGN UP
        </Button>
      </div>
    </div><div className='medical-management'>
        
        <div className='medical-management-features'>
          <div className='feature'>
            <h1>Easy Appointment Scheduling</h1>
            <img src='https://media.tenor.com/RGbK4WU69-0AAAAi/update-status-appointment.gif' alt='Icon' />
          </div>
          <div className='feature'>
            <h2>Secure Medical Records</h2>
            <img src='https://fastchart.com/wp-content/uploads/2020/09/Fast-Chart_Secure-Healthcare-Data-1024x536.jpeg' alt='Icon' />
          </div>
          <div className='feature'>
            <h1>Online Prescription Renewal</h1>
            <img src='https://media1.tenor.com/m/3iixVvDUInAAAAAC/mental-health-wellbeing.gif' alt='Icon' />
          </div>
        </div>
      </div></>
  );
}


export default HeroSection;