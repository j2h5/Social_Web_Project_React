{/* 챌린지 등록폼 */}
<div className="challenge_form">
                
<form onSubmit={onInsert}>
<h1>✨챌린지 등록</h1>
    <div className='category_row'
    onChange={(e)=>{setCh_category(e.target.value);}}>
    <span className='title_span'
    >카테고리</span>
        <button type="button" name="규칙적인 생활" value="규칙적인 생활"
        className='category_btn'>규칙적인 생활</button>

        <button type="button" name="운동" value="운동"
        className='category_btn'>운동</button>

        <button type="button" name="식습관" value="식습관"
        className='category_btn'>식습관</button>

        <button type="button" name="마음챙김" value="마음챙김"
        className='category_btn'>마음챙김</button>

        <button type="button" name="취미" value="취미"
        className='category_btn'>취미</button>

        <button type="button" name="셀프케어" value="셀프케어"
        className='category_btn'>셀프케어</button>
    </div>
        
    <div className='ch_title_row' style={{display:'inline-block'}}>
        <span className='title_span'
        >챌린지명</span>
            <input type="text" className="ch_name" name="ch_title"
            value={ch_title}  onChange={(e)=>{  setCh_title(e.target.value); }}
            style={{width:'400px', display:'inline-block', borderRadius:'10px'
            }} required placeholder='ex) 매일 7:00am 기상하기'/>
            <span className="tulp">
            <HelpOutlineIcon style={{fontSize:'20px', marginLeft:'10px'}}/>
            <span className="tulc">
                챌린지의 내용, 빈도를 한 눈에 알아보기 쉽도록 작성 해주세요!
            </span>
        </span>
    </div>    
    
    <div className='ch_titlephoto_row' style={{display:'inline-block'}}>
        <span className='title_span'>대표사진</span>
        <br/>
        {/* <input type="file" className="form-control" name="ch_title_photo" onChange={imageUpload} style={{width:'250px'}}/> */}
        <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" 
            style={{display:'none'}} onChange={imageUpload}/>

            <Button variant="contained" component="span" 
            style={{fontSize:'13px', fontWeight:'bold', backgroundColor:'#3751fa'}}>파일 업로드</Button>
        </label>
        <div className='img1' style={{display:'inline-block'}}>
            <img alt="" src={photoUrl+ch_title_photo} style={{width:'400px', height:'300px'}}/>
        </div>
    </div>
                        
    <div className='ch_freq_row'>
    <span className='title_span'>인증빈도</span>
            <input type="text" className="form-control" placeholder='매일 하루 한 번' disabled
            style={{width:'300px'}} required />
    </div>
        
    <div className='ch_period_row'>
    <span className='title_span'>챌린지 기간</span>
    <br/>
            {/* 달력에서 기간 선택 가능 */}
        <div style={{display:'inline-block'}}>
            <b>시작일</b>
            <DatePicker
            ch_startday={ch_startday}
            selected = {ch_startday}
            setCh_startday={setCh_startday}
            locale = { ko }
            placeholderText="챌린지 시작일을 선택해주세요"
            dateFormat="yyyy년 MM월 dd일"
            onChange={date => setCh_startday(date)}
            />
        </div>
        <div style={{display:'inline-block'}}>
            <b>종료일</b>
            <DatePicker
            ch_endday={ch_endday}
            selected = {ch_endday}
            setCh_endday={setCh_endday}
            locale = { ko }
            placeholderText="챌린지 종료일을 선택해주세요"
            dateFormat="yyyy년 MM월 dd일"
            onChange={date => setCh_endday(date)}
            />
        </div>

    </div>
    
    <div className='ch_deposit_row'>
        <span className='title_span'>최소 예치금</span>
                <div className='chalDeposit'>
                <input type="number" className="form-control"  step='1000' value={ch_deposit}
                onChange={(e)=>{  setCh_deposit(e.target.value); }}
                onKeyDown={moneyChange} defaultValue='10000'
                style={{width:'200px', display:'inline-block'}} required
                />&nbsp;만원
                &nbsp;

                {/* 예치금 고정 체크하면 전체 disabled */}
                <label><input type="checkbox"
                />예치금 고정</label>
                </div>
    </div>
    <div className='ch_content_row'>
    <span className='title_span'>챌린지를 소개해주세요</span>
        <br/>
        <textarea className="textarea1"
            placeholder="클래스 전 숙지해야할 사항을 적어주세요.
            대여비, 준비물 등 추가 비용이 있는 경우 반드시 적어주세요
            (ex.시간당 1,000원~1,500원 정도의 장소대여비는 별도입니다.)"
            onChange={(e)=>{
                setCh_content(e.target.value);
            }}></textarea>
    </div>

    {/* 인증샷예시 */}
    <img alt="" src={photoUrl+ch_exphoto1} className="imgphoto"/>
    <div className='ch_certi_photo_row'>
    <span className='title_span'>올바른 인증샷 예시</span>
        <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" onChange={imageUpload2} style={{display:'none'}}/>
            <IconButton color="primary" aria-label="upload picture" component="span">
            <AddPhotoAlternateIcon sx={{fontSize: '50px', color:'black'}}/>
            </IconButton>
        </label>

        <img alt="" src={photoUrl+ch_exphoto2} className="imgphoto"/>
        <span className='title_span'>나쁜 인증샷 예시</span>
            <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" onChange={imageUpload3} style={{display:'none'}}/>
            <IconButton color="primary" aria-label="upload picture" component="span">
            <AddPhotoAlternateIcon sx={{fontSize: '50px', color:'black'}}/>
            </IconButton>
    </label>
    </div>
            <div className='ch_button_row'>
                <button type="submit" className="submit_btn"
                // onClick={()=>{setShow(!show);
                // }}
                > 다음(임시)
                    {/* {show ? "수정하기" : "다음"} */}
                </button>

                {show && <ChallengeExample/>}
            </div>
            {/* 다음 버튼 누르면 미리보기 */}
            </form>
</div>