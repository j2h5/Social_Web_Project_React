import React from 'react';
import './Modal.css';

import river from './classImage/aa캡처2.jpg';
import img4 from './classImage/guide4.JPG';
const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
            <header>
                {header}
                <button className="close" onClick={close}>
                &times;
                </button>
            </header>
            <main>{props.children}
            <img src={img4} alt=""
                style={{ width:'500px'}}/><br/><br/>
            </main>
            <footer>
                <button className="close" onClick={close}>
                닫기
                </button>
            </footer>
            </section>
        ) : null}
        </div>
    );
    };
    export default Modal;