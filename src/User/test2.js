import React from 'react';
import './UserCss/test2.css';

const test2 = () => {
    return (
        <div class="container">
      <h1>로그인 폼</h1>
      <form>
        <div class="form-control">
          <input type="text" required />
          <label>이메일</label>
        </div>

        <div class="form-control">
          <input type="password" required />
          <label>패스워드</label>
        </div>

        <button class="btn">로그인</button>

        <p class="text">회원이 아니신가요? </p>
      </form>
    </div>
    );
};

export default test2;