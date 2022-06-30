import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';



const ChallengeForm = () => {

    const [value, onChange] = useState(new Date());


    return (
        <div>
            <h1>챌린지 등록</h1>
            <form>
                    {/* 챌린지 등록폼 */}
                <table className="table table-borderless" style={{width:'600px'}}>
                    <tbody>
                        <tr>
                            <th style={{backgroundColor:'#d5bbdd'}} width='100'>카테고리</th>
                            <td><select>
                                    <option disabled selected>카테고리 선택</option>
                                    <option>규칙적인 생활</option>
                                    <option>운동</option>
                                    <option>식습관</option>
                                    <option>마음챙김</option>
                                    <option>취미</option>
                                    <option>셀프케어</option>
                                    </select></td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#d5bbdd'}} width='100'>챌린지명</th>
                            <td><input type="text" className="form-control"
                            style={{width:'300px'}} required placeholder='ex) 매일 7:00am 기상하기'
                            />
                            </td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#d5bbdd'}} width='100'>대표사진</th>
                            <td><input type="file" className="form-control"
                            style={{width:'250px'}}
                            />
                            </td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#d5bbdd'}} width='100'>인증빈도</th>
                            <td><input type="text" className="form-control" placeholder='매일 하루 한 번' disabled
                            style={{width:'300px'}} required
                            />
                            </td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#d5bbdd'}} width='100'>챌린지 기간</th>
                            <td><input type="text" className="form-control"
                            style={{width:'300px'}} required
                            /><DateRangeIcon/>
                            </td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#d5bbdd'}} width='100'>예치금</th>
                            <td><input type="text" className="form-control"
                            style={{width:'300px'}} required
                            />
                            </td>
                        </tr>
                        <tr>
                            {/* 에디터 사용 */}
                            <td colSpan={2}> 
                            <b>챌린지를 소개해주세요</b>
                                <textarea className="form-control" required
                                style={{width:'400px', height:'120px'}}
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#d5bbdd'}} width='100'>인증샷 예시</th>
                            <td><input type="text" className="form-control"
                            style={{width:'300px'}} required
                            />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <button type="submit" className="btn btn-info">다음</button>
                            </td>
                        </tr>

                        {/* 다음 버튼 누르면 미리보기 */}

                    </tbody>
                </table>
            </form>
        </div>
    );
};    

export default ChallengeForm;