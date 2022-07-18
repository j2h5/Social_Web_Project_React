import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import img1 from './UserIMG/profile.jpg';
import { useRef } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import BrushIcon from '@mui/icons-material/Brush';
import PetsIcon from '@mui/icons-material/Pets';
import './UserCss/Register.css';

export default function PaymentForm({changeNickname, changeProfile, changeCategory}) {

  const [img,setImg]=React.useState(img1);

      //사진 누르면 인증샷 업로드 file
      const photoInput = useRef();
      const imgChange = () =>{
          photoInput.current.click();
      };

  return (
    <div className='container_regis'>
      <div className='box_title'>프로필 등록</div><br/>
      <div className='profile' onClick={imgChange}>
      <img src={img} alt='' style={{display:'block',margin:'auto',width:'150px'}}/></div>
      <input type="file" multiple ref={photoInput} style={{display:'none'}}/><br/>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="cardName"
            label="닉네임"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={changeNickname}
          />
        </Grid>
      </Grid>
      <br/><br/><br/>

      <div className='content_title'>카테고리</div><br/>
      <button type="button" name="운동" value="운동" className='category_bn'>운동</button>
      <button type="button" name="사교" value="사교" className='category_bn'>사교</button>
      <button type="button" name="음악" value="음악" className='category_bn'>음악</button>
      <button type="button" name="독서" value="독서" className='category_bn'>독서</button>
      <button type="button" name="취미" value="취미" className='category_bn'>취미</button>
      <button type="button" name="반려동물" value="반려동물" className='category_bn'>반려동물</button>
      <br/><br/><br/>
    </div>
  );
}