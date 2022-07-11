import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import img1 from './profile.jpg';
import { useRef } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import BrushIcon from '@mui/icons-material/Brush';
import PetsIcon from '@mui/icons-material/Pets';
import './Register2.css';



export default function PaymentForm() {

  const [img,setImg]=React.useState(img1);



      //사진 누르면 인증샷 업로드 file
      const photoInput = useRef();
      const imgChange = () =>{
          photoInput.current.click();
      };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        프로필 등록
      </Typography>
      <div style={{border:'0px solid black',width:'310px',height:'310px',borderRadius:'160px',overflow:'hidden',marginLeft:'20%',cursor:'pointer'}}
      onClick={imgChange}>
      <img src={img} alt='' style={{display:'block',margin:'0px auto',width:'310px'}}/>
      </div>

      <input 
        type="file"
        multiple
        ref={photoInput}
        style={{display:'none'}}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="cardName"
            label="닉네임"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="cardName"
            label="생년월일"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
      </Grid>
      <br/>

      <Typography variant="h6" gutterBottom>
        카테고리
      </Typography>
      <br/>

      <Grid container spacing={3}>
      <div className="box1">
        <CameraAltIcon style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
        <div className="boxtext1">스냅사진</div>
      </div>
      <div className="box1">
        <CameraAltIcon style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
        <div className="boxtext1">스냅사진</div>
      </div>
      <div className="box1">
        <CameraAltIcon style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
        <div className="boxtext1">스냅사진</div>
      </div>
      <div className="box1">
        <CameraAltIcon style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
        <div className="boxtext1">스냅사진</div>
      </div>
      <div className="box1">
        <CameraAltIcon style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
        <div className="boxtext1">스냅사진</div>
      </div>
      <div className="box1">
        <CameraAltIcon style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
        <div className="boxtext1">스냅사진</div>
      </div>
      </Grid>
    </React.Fragment>
  );
}