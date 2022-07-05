import { getRadioUtilityClass } from '@mui/material';
import React, {useState, useEffect, useRef} from 'react';
import '../cssFolder/Challenge.css';
import DatePicker from 'react-datepicker';


const ChallengeExample = () => {
    return (
        <div className='challenge_example'>
            <div className='example_container'><h1>미리보기</h1>
            {/* 큰 div */}
            <div className='row'>
                
                <div className='example_pic' style={{display:'inline-block'}}>
                {/* 사진 div */}
                    <img src="../logo192.png" style={{width:'200px'}}></img>

                    <div className='example_detail' style={{display:'inline-block'}}>
                    {/* 상세 정보 div */}

                        <input type="text" className='example_title' required/>

                        <input type="text" className='example_cate' required value='카테고리1'/>
                        <input type="text" className='example_cate' required value='카테고리2'/>

                        <input type="text" className='example_freq' required value='평일 매일, 하루 한번'/>

                        <input type="text" className='example_period' required value='기간'/>
                    </div>
                </div>
            </div>
            {/* row 닫힘 */}
            <br/><br/>
            <div className='row'>
                <div className='example_content' style={{display:'inline-block'}}>
                
                </div>

                <div className='example_deposit' style={{display:'inline-block'}}>
                </div>
            </div>
            <br/><br/>
            <div className='row'>
                <div className='example_certifi_pics'>
                    <div className='example_certifi_good_pic' style={{display:'inline-block'}}>

                    </div>
                    <div className='example_certifi_bad_pic' style={{display:'inline-block'}}>
                    </div>
                </div>
                <div className='example_certifi_rule' style={{display:'inline-block'}}>

                </div>
            </div>

            <button type="submit" className="btn btn-info">챌린지 개설</button>
        </div>
        </div>
    );
};

export default ChallengeExample;