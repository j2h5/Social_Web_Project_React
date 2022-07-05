import React from 'react';
import '../cssFolder/Challenge.css';

const MoimForm = () => {
    return(
        <div>
        <h1>모임등록</h1>
            <div className="Meeting">
                {/* memo form */}
                <table style={{width:'800px', margin:'auto'}}>
                <thead>
                    <tr>
                        <td className="td_1">모임명</td>
                        
                        <td colSpan={3}  style={{width:'720px'}}>
                        <input type='text' className="form-control"
                        style={{width:'600px'}} placeholder="모임명 입력"
                        />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td  className="td_1">방장</td>
                        <td  className="td_2">
                        <input type='text' className="form-control"
                        style={{width:'210px', height:'30px'}} placeholder="방장"
                  
                        />
                        </td>
                        
                        <td  className="td_1" >장소</td>
                        <td className="td_2">
                        <input type='text' className="form-control"
                        style={{width:'210px', height:'30px'}} placeholder="장소"
                      
                        />
                        </td>
                        
                    </tr>
                  
                    <tr>
                        <td  className="td_1">참여인원수</td>
                        <td>
                        <input type='text' className="td_2"
                        style={{width:'210px'}} placeholder="닉네임 입력"
                  
                        />
                       
                        </td>
                            
                        <td  className="td_1">사진</td>
                        <td>
                        <input type='file' className="td_2"
                        style={{width:'210px', height:'30px'}} placeholder="사진"
               
                        />
                        </td>

                    </tr>

                </tbody>
                </table>
                <div>
                    <div>
                        <b>모집글 작성</b>
                    </div>
                    <div>
                        <input type='text' className="form-control"
                        style={{width:'600px', height:'230px'}} placeholder="메세지 입력 후 엔터를 누르세요"
                        />
                    </div>
                </div>
                <button type="submit">등록</button>
            </div>
    </div>
)
}


export default MoimForm;