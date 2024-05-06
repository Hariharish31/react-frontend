// import React, { useState } from 'react';
// import './doctor.css';
// import { useNavigate } from 'react-router-dom';


// const doctor = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add logic here to send the appointment data to the server
//     console.log('Appointment booked:', { name, email, date, time });
//     // Reset form fields
//     setName('');
//     setEmail('');
//     setDate('');
//     setTime('');
//   };
//   const Navi = useNavigate();
  

//   return (
//     <div className="appointment-form-container">
//       <h2>Book an Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         </label>
//         <label>
//           Time:
//           <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
//         </label>
//         <button type="submit" onClick={() => Navi('/')} >Book Appointment</button>
//       </form>
//     </div>
//   );
// };

// export default doctor;

import React, { useState } from 'react';
import './doctor.css';
import { useNavigate } from 'react-router-dom';

// const Doctor = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add logic here to send the appointment data to the server
//     console.log('Appointment booked:', { name, email, date, time });
//     // Reset form fields
//     setName('');
//     setEmail('');
//     setDate('');
//     setTime('');
//   };

//   const navi = useNavigate();

//   return (
//     <div className="appointment-form-container">
//       <h2>Book an Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         </label>
//         <label>
//           Time:
//           <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
//         </label>
//         <button type="submit" onClick={() => navi('/')}>Book Appointment</button>
//       </form>
//       {/* <button onClick={() => navigate('/')}>Cancel</button> */}
//     </div>
//   );
// };
const Doctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the appointment data to the server
    console.log('Appointment booked:', { name, email, date, time });
    // Reset form fields
    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  const navi = useNavigate();

  return (
    <div className="appointment-form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ color: 'black' }}>
          Name:
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label style={{ color: 'black' }}>
          Email:
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label style={{ color: 'black' }}>
          Date:
          <input type="date" placeholder="Select date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label style={{ color: 'black' }}>
          Time:
          <input type="time" placeholder="Select time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <button type="submit" onClick={()=>navi('/')}>Book Appointment</button>
      </form>
    </div>
  );
};

export default Doctor;
