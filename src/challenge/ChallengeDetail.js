import React from 'react';

const ChallengeDetail = () => {
    return (
        <div>
            <div className='example_container'><h1>미리보기</h1>
            {/* 큰 div */}
            <div className='row'>
                
                <div className='example_pic' style={{display:'inline-block'}}>
                {/* 사진 div */}
                    <img src="../logo192.png" style={{width:'200px'}}></img>

                    <div className='example_detail' style={{display:'inline-block'}}>
                    {/* 상세 정보 div */}

                        <input type="text" className='example_title' required/>




                        <input type="text" className='example_cate' required />
                        <input type="text" className='example_cate' required />

                        <input type="text" className='example_freq' required/>

                        <input type="text" className='example_period' required/>
                    </div>
                </div>
            </div>
            {/* row 닫힘 */}
            <br/><br/>
            <h3>챌린지 소개</h3>
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

        </div>
        </div>
    );
};

export default ChallengeDetail;