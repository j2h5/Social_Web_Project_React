import React,{useState} from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../User/UserRegister.css';

const UserRegister=()=>{

    const navi = useNavigate();
    const [data,setData] = useState({
        nickname:'', password:'', username:''
    });
    const [passOk,setPassOk] = useState(false);
    //const [email1,setEmail1] = useState('');
    //const [email2,setEmail2] = useState('');
    //const [btnOk,setBtnOk] = useState(false);
    //const [emailok,setEmailOk] = useState(false);

    //submit 시 호출 될 함수
    const onSave = (e) => {
        e.preventDefault();//기본이벤트무효화
        console.dir(data);

        // if(!btnOk){
        //     alert("아이디 중복체크를 해주세요");
        //     return;
        // }

        // if(!passOk){
        //     alert("비밀번호 확인을 해주세요");
        //     return;
        // }

        // if(!data.emailok){
        //     alert("이메일 중복 버튼을 눌러주세요")
        //     return;
        // }

        const url=process.env.REACT_APP_SPRING_URL+"api/signup";
            axios.post(url,data)
            .then(res=>{
                alert("성공 집에가")
                //navi("/login")
        })
    }

    // data 관련 데이터 입력 시 호출
    const onDataChange = (e) => {
        const {name,value} = e.target;
        //이벤트 발생 name이 pass일 경우 무조건 passOk는 false
        if(name==='pass')
            setPassOk(false);
            
        setData({
            ...data,
            [name]:value
        })
    }

    //이메일 select 변경 시 호출
    // const onEmailChange = (e) => {
    //     const {value} = e.target;
    //     if(value==='-')
    //         setEmail2('');
    //     else
    //         setEmail2(value);
    // }

    //2번째 pass 입력 시 호출
    const onPassChange = (e) => {
        const {value} = e.target;
        if(value===data.pass)
            setPassOk(true);
        else
            setPassOk(false);
    }

    //아이디 중복체크
    // const onIdJungbok = () => {
    //     const url = process.env.REACT_APP_SPRING_URL+"member/idcheck?id="+data.id;
    //     axios.get(url)
    //     .then(res=>{
    //         if(res.data===0){
    //             setBtnOk(true);
    //             alert("가입 가능한 아이디입니다.");
    //         }else{
    //             setBtnOk(false);
    //             alert("이미 가입되어있는아이디 입니다.");
    //         }
    //     })
    // }
    return (
        <div className="register_form">
            <form class="needs-validation" novalidate  onSubmit={onSave}>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4"/>

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required/>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        

            <div class="input-box">
			<input id="mName" type="text" name="mName" placeholder="이름"/>
			<label for="mName">이름</label>
		    </div>
				
		    <div class="input-box">
			<input id="mEmail" type="email" name="mEmail" placeholder="E-Mail"/>
			<label for="mEmail">E-Mail</label>
		    </div>


            <table style={{width:'500px', marginLeft:'50px'}} className="member_form">
                <caption><h3>회원가입</h3></caption>
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <input type="text" style={{width:'100px'}} name="nickname" required onChange={onDataChange} defaultValue={data.id}/>
                            {/* <button type="button" style={{marginLeft:'5px'}} onClick={onIdJungbok}>중복체크</button> */}
                        </td>
                    </tr>

                    {/* <tr>
                        <th>이름</th>
                        <td>
                            <input type="text" style={{width:'170px'}} name="name" required onChange={onDataChange}/>
                        </td>
                    </tr> */}

                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <input type="password" style={{width:'170px'}} name="password" required onChange={onDataChange}/>
                            <input type="password" style={{width:'170px', marginLeft:'5px'}} required onChange={onPassChange}/>
                            <span style={{marginLeft:'5px', color:'red'}}>{passOk?'ok':''}</span>
                        </td>
                    </tr>

                    {/* <tr>
                        <th>이메일</th>
                        <td>
                            <input type="text" style={{width:'100px'}} required
                            onChange={(e)=>{  setEmail1(e.target.value);  }}/>
                            &nbsp;<b>@</b>&nbsp;
                            <input type="text" style={{width:'100px'}} defaultValue={email2}
                            onChange={(e)=>{  setEmail2(e.target.value);  }}/>&nbsp;&nbsp;
                            <select onChange={onEmailChange}>
                                <option value='-'>직접입력</option>
                                <option value='naver.com'>네이버</option>
                                <option value='gmail.com'>구글</option>
                            </select>
                            <button type="button" onClick={()=>{ setData({ ...data, email:`${email1}@${email2}`,emailok:true  });  
                        alert("이메일 중복 확인"); }}>확인</button>
                        </td>
                    </tr> */}

                    <tr>
                        <th>username</th>
                        <td>
                            <input type="text" style={{width:'180px'}} name="username" required onChange={onDataChange}/>
                        </td>
                    </tr>

                    {/* <tr>
                        <th>주소</th>
                        <td>
                            <input type="text" style={{width:'180px'}} name="addr" required onChange={onDataChange}/>
                        </td>
                    </tr>  */}

                    <tr>
                        <td colSpan={2} style={{textAlign:'center'}}>
                            <button type="submit">가입하기</button>
                            <button type="button" style={{marginLeft:'5px'}}>회원명단</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
            
        </div>
    )
}

export default UserRegister;