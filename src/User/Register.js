import * as React from 'react';
import Navbar2 from '../main/Navbar2';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Register1 from './Register1';
import Register2 from './Register2';
import Regsiter3 from './Regsiter3';
import './UserCss/Register.css';
import { useForm } from "react-hook-form";


export default function Checkout() {

  const steps = ['회원 가입', '프로필 등록', '정보 확인'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Register1 changeEmail={changeEmail} changePassword={changePassword} changeUserame={changeUserame} changeAddr1={changeAddr1} changeAddr2={changeAddr2} changePhone={changePhone} changePost={changePost} />;
      case 1:
        return <Register2 changeNickname={changeNickname} changeProfile={changeProfile} changeCategory={changeCategory}/>;
      case 2:
        return <Regsiter3 email={email} password={password} username={username} addr1={addr1} addr2={addr2} post={post} phone={phone} nickname={nickname} profile={profile} category={category}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if(activeStep === steps.length - 1){

      let insertUrl = process.env.REACT_APP_SPRING_URL+"api/signup";

      axios.post(insertUrl, { email, password, username, addr1, addr2, post, phone, nickname } )
      .then(res=>{
          //insert 성공 후 처리할 코드들
          alert("집에가!!")
          
          //목록으로 이동
          //navi("/challenge/list");
        })
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };

//Register 데이터를 서버로 전송하기 관련 코드
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUserame] = React.useState('');
  const [addr1, setAddr1] = React.useState('');
  const [addr2, setAddr2] = React.useState('');
  const [post, setPost] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [profile, setProfile] = React.useState('');
  const [category, setCategory] = React.useState('');
  
  const changeEmail = (e) => { setEmail(e.target.value); }
  const changePassword = (e) => { setPassword(e.target.value); }
  const changeUserame = (e) => { setUserame(e.target.value);}
  const changeAddr1 = (e) => { setAddr1(e.target.value); }
  const changeAddr2 = (e) => { setAddr2(e.target.value); }
  const changePost = (e) => { setPost(e.target.value); }
  const changePhone = (e) => { setPhone(e.target.value); }
  const changeNickname = (e) => { setNickname(e.target.value); }
  const changeProfile = (e) => { setProfile(e.target.value); }
  const changeCategory = (e) => { setCategory(e.target.value); }
  
  return (
    <div>
      <Navbar2/>  {/* header */}
      <br/><br/><br/><br/><br/><br/>

      <Container component="main" maxWidth="sm" sx={{ mb: 6 }} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } , width: '100vh', height: '90vh' }}>
          
          <Typography component="h1" variant="h4" align="center">
          <div className='title1'>회원 가입</div>
          </Typography>
          
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5}}>
            
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  회원가입을 축하드립니다.
                </Typography>
                <Typography variant="subtitle1">
                  왜 가입하셨쬬? 이 프로젝트는 망해가고 있습니다.
                </Typography>
                {/* <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button> */}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    //onClick={onInsert}
                  >
                    {activeStep === steps.length - 1 ? '가입 완료' : '다음'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        </form>
      </Container>
    </div>
  );
}