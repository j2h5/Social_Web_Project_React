import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './UserCss/Register.css';
import { useScrollFadeIn } from '../hooks';
import { useForm } from "react-hook-form";


export default function Register1({changeEmail, changePassword, changeUserame, changeAddr1, changeAddr2, changePost, changePhone}) {

  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0), 1: useScrollFadeIn('up', 1, 0.2), 2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4), 4: useScrollFadeIn('up', 1, 0.5), 5: useScrollFadeIn('up', 1, 0.6),
    6: useScrollFadeIn('up', 1, 0.7), 7: useScrollFadeIn('up', 1, 0.7), 8: useScrollFadeIn('up', 1, 0.8)
  };
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div className='container_regis'>
        <div className='box_title'>회원 정보 입력</div><br/>
        <Grid container spacing={3} >
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="E-Mail"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={changeEmail}
            {...animatedItem[0]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="비밀번호"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={changePassword}
            {...animatedItem[1]}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="비밀번호 확인"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            {...animatedItem[2]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="이름"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={changeUserame}
            {...animatedItem[3]}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="addr1"
            name="addr1"
            label="주소"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={changeAddr1}
            {...animatedItem[4]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="post"
            name="post"
            label="우편 번호"
            fullWidth
            variant="standard"
            onChange={changePost}
            {...animatedItem[5]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addr2"
            name="addr2"
            label="상세 주소"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={changeAddr2}
            {...animatedItem[6]}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="핸드폰 번호"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={changePhone}
            {...animatedItem[7]}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="(필수) 개인정보 수집ㆍ이용에 동의합니다." {...animatedItem[8]}
          />
        </Grid>
      </Grid>
    </div> 
  );
}