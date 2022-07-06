import React from 'react';
import '../cssFolder/ChallengeDetail.css';
import ProgressBar from "@ramonak/react-progress-bar";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


const ChallengeDetail = () => {
    return (
        <div className='challenge_detail'>
            <div className='detail_container'><h1>챌린지 상세페이지</h1>
            {/* 큰 div */}
                <div className='row'>
                    <div className='example_pic' style={{display:'inline-block'}}>
                    {/* 사진 div */}
                        <img src="../logo192.png" style={{width:'200px'}}></img>

                    <div className='detail_info' style={{display:'inline-block'}}>
                    {/* 상세 정보 div */}

                        <input type="text" className='example_title' required value='하루 한번 달리기 30분하기'/>

                        <input type="text" className='example_cate' required value='#건강'/>
                        <input type="text" className='example_cate' required value='#좋은습관'/>

                        <input type="text" className='example_freq' required value=''/>

                        <input type="text" className='example_period' required value='하이'/>
                    </div>
                    </div>
                </div>
                {/* row 닫힘 */}
            <br/><br/>
                <div className='row' style={{marginLeft:'50px'}}>
                    <h3>챌린지 소개</h3>
                    <div className='example_content' style={{display:'inline-block'}}>
                
                    </div>

                    <div className='example_deposit' style={{display:'inline-block'}}>

                    </div>
                </div>
            <br/><br/><br/>
            
                <div className='row'>
                    <div className='example_certifi_pics'>
                        <div className='example_certifi_good_pic' style={{display:'inline-block'}}>

                        </div>
                        <div className='example_certifi_bad_pic' style={{display:'inline-block'}}>

                        </div>
                    </div>
                    <div className='example_certifi_rule' style={{display:'inline-block'}}>
                        <span>인증 규칙</span>
                        <br/>
                        <span>챌린지 진행시 꼭 알아주세요!</span>
                        <br/>
                            <span>n일 동안 하루에 1번 인증샷을 촬영하셔야 합니다.
                        <br/>
                            올바른 인증샷 예시를 참고하셔서 올리셔야지만 인증이 완료됩니다.
                        <br/>
                            인증샷 피드에 인증샷이 공개됩니다.
                        <br/>
                            인증 가능한 요일은 월,화,수,목,금,토,일 입니다.
                        </span>
                    </div>
                </div>
                
                <div className='row' style={{marginTop:'100px', marginLeft:'30px'}}>
                    <button type="button" className="goTo_Moim">
                        이 챌린지를 함께 도전할<br/>
                        <b>모임 찾기</b>
                    </button>

                    <button type="button" className="goTo_Class">
                        전문가에게 배울 수 있는<br/>
                        <b>클래스 찾기</b>
                    </button>

                <div> 
                {/* row 닫힘 */}
                
                <br/><br/>
                
                <div className='row' style={{marginTop:'50px'}}>
                    <h3>내 인증내역</h3>
                <br/><br/><br/>
                    <div className='accomplish_bar'>
                        <h4>달성률</h4>
                        <ProgressBar 
                        completed={80}
                        bgColor="#abfdb8"
                        height="23px"
                        width="50%"
                        labelColor="#212221"
                        />
                    </div>
                <br/><br/><br/>
                    <h4 style={{marginTop:'50px'}}>내 인증샷들</h4>
                    <div className='certifi_photos'>
                        <div className='certifi_photo' style={{display:'inline-block'}}>

                        </div>
                        <div className='certifi_photo' style={{display:'inline-block'}}>

                        </div>
                        <div className='certifi_photo' style={{display:'inline-block'}}>

                        </div>
                        <div className='certifi_photo' style={{display:'inline-block'}}>

                        </div>
                        <div className='certifi_photo' style={{display:'inline-block'}}>

                        </div>

                        {/* ... 반복문 처리하세요 */}
                    </div>
                </div>
                {/* row 닫힘 */}

            </div>

                <div className='detail_buttons' style={{marginTop:'200px'}}>
                {/* 챌린지 미참여중일시 챌린지 참여하기 / 참여중일시 챌린지 인증하기 */}
                    <button type="submit" className="challenge_join">챌린지 참여하기</button>

                    {/* <button type="submit" className="challenge_certifi">챌린지 인증하기</button> */}

                </div>
            </div>
            {/* detail_container 닫힘 */}
        </div>
        </div>
    );
};

export default ChallengeDetail;