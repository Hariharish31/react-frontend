import React, { useState } from 'react';
import styled from 'styled-components';
import "./manager.css";
import Navbar from '../Navbar';

import { useNavigate } from 'react-router-dom';
function Userdashboard() {
   let [state,setState] = useState({ selectedFile: null })
   const[setSuccess]=useState([]);
   const[success]=useState("");
   const[text1,setText1]=useState("");
   const[text2,setText2]=useState("");
   const fileChangedHandler = (event) => {
    setState({ selectedFile: event.target.files[10] })
  }
  const changehandle1 = (event) => {
    setText1(event.target.value)
  }
  const changehandle2 = (event) => {
    setText2(event.target.value)
  }

  // const uploadHandler = () => {
  //   console.log(state.selectedFile)
  //   fileToArrayBuffer(state.selectedFile).then(data => {
  //       const buf = Buffer.from(data)
  //       console.log(buf)
  //       setReports(buf);
  // })}
  const uploadHandler = () => {
    const formData = new FormData();
    formData.append('file', state.selectedFile);
    formData.append('patient', text1);
    formData.append('doctor', text2);
  
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setSuccess("File uploaded successfully");
    })
    .catch(error => {
      console.error('Error:', error);
      setSuccess("Error uploading file");
    });
  }
  
const navi = useNavigate();
  return (
    <>
    <Dashboard>
    <Navbar />
        <Main>
            {/* <Top src='dashboard_top.png' /> */}
            <Certificate className='' color='#e6d5b8'>Manager Desk</Certificate>
            <input className='choose' id='selectfile'  type="file"  onChange={fileChangedHandler}/>
            <button className='upload'  onClick={uploadHandler}>Upload</button>
            <input className='patient' id='patient'  type="text" placeholder='Patient'  onChange={changehandle1}/>
            <input className='doc' id='doctor'  type="text" placeholder='doctor' onChange={changehandle2}/>
            <button className='sub' onClick={() => navi('/')}>Submit</button>
            <span className='suc'>{success}</span>
        </Main>
        </Dashboard>
    </>
  )
}

export default Userdashboard;

const Dashboard = styled.div`
// display: flex;
// flex-direction: row;
background-color:#c8d8e8;
width:100vw;
height:100vh;
`

const Main = styled.div`
// background-color:#121212;
    
`
const Certificate = styled.div`
font-color: #121212
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 60px;
margin-top:10px;
line-height: 55px;
padding-left:20px;
padding-top:20px;
align-items: center;
justify-content: center;
text-align: center;

`