import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import img from './UserIMG/profile.jpg';
import './UserCss/Register.css';
import TextField from '@mui/material/TextField';

export default function Review(props) {
  return (
    <div className='container_regis'>
      <div className='box_title'>회원 정보 확인</div><br/>
      <div style={{width:'100px',height:'100px',borderRadius:'100%',overflow:'hidden',margin:'auto',cursor:'pointer'}}>
      <img src={img} alt='' style={{display:'block',margin:'auto',width:'100px'}}/></div>
      

      <div style={{margin:'auto',width:'200px',height:'70px', marginTop:'10px', fontSize:'15px'}}>
        닉네임 : {props.nickname} <br/>
        관심 카테고리 : {props.category}
      </div>

      <div style={{border:'0px solid black', height:'400px', fontSize:'15px' }}>
      <Grid container spacing={2} >
      <Grid item xs={12} sm={2} style={{marginTop:'15px', marginLeft:'80px'}}>E-Mail</Grid>
      <Grid item xs={12} sm={8} style={{marginTop:'15px', color:'gray'}}>{props.email}</Grid>
      <Grid item xs={12} sm={2} style={{marginTop:'15px', marginLeft:'80px'}}>이름</Grid>
      <Grid item xs={12} sm={8} style={{marginTop:'15px', color:'gray'}}>{props.username}</Grid>
      <Grid item xs={12} sm={2} style={{marginTop:'15px', marginLeft:'80px'}}>주소</Grid>
      <Grid item xs={12} sm={3} style={{marginTop:'15px', color:'gray'}}>{props.addr1}</Grid>
      <Grid item xs={12} sm={3} style={{marginTop:'15px', color:'gray'}}>{props.addr2}</Grid>
      <Grid item xs={12} sm={2} style={{marginTop:'15px', marginLeft:'80px'}}>연락처</Grid>
      <Grid item xs={12} sm={8} style={{marginTop:'15px', color:'gray'}}>{props.phone}</Grid>
      </Grid>
      </div>
    </div>
  );
}