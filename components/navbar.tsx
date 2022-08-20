/** @format */

import React, { useRef, useState } from "react";
import Styles from "../styles/Nav.module.css";

export default function Navbar() {
  const [zoom, setZoom] = useState(false);
  // const [scroll, setScroll] = useState(0);
  // const ref: any = useRef<HTMLElement>();
  // const refTwo: any = useRef<HTMLElement>();

  const handleZoom = () => {
    setZoom(!zoom);
  };
  const handleClose = () => {
    setZoom(false);
  };
  //  onScroll={(e) => handleScroll(e)}
  // const handleScroll = (event: any) => {
  //   console.log("scrollTop: ", event);
  //   // console.log("offsetParent: ", event.target.offsetParent);

  //   console.log("offsetTop: ", event.currentTarget.offsetTop);
  //   // console.log("offsetHeight: ", event.currentTarget.offsetHeight);
  //   // console.log("clientHeight: ", event.currentTarget.clientHeight);
  //   console.log(
  //     (event.currentTarget.scrollTop /
  //       (event.currentTarget.offsetHeight - event.currentTarget.offsetTop)) *
  //       100
  //   );
  //   const newScroll =
  //     (event.currentTarget.scrollTop /
  //       (event.currentTarget.offsetHeight - event.currentTarget.offsetTop)) *
  //     100;
  //   ref.current.style.width = `${newScroll}%`;
  // };
  return (
    <div className='userIco'>
      <div className='item1'>
        <div className='item1_overlay'>
          <div className='line-top'></div>
          <div className='top_img'>
            <div className='img'>
              <img
                src='https://2sao.vietnamnetjsc.vn/images/2019/06/18/09/51/hotboy-01.jpg'
                alt='user'
                className='img-circle'
              />
              <div className='hoverimg' onClick={handleZoom}>
                <img src='/7304806.png' alt='not img' className='img-zoom' />
              </div>
            </div>
            <div className='top_text font-godman'>Nguyễn Anh Việt</div>
            <div className='top_des font-robotoo'>
              Front-end Deweloper Ui/UX Designer
            </div>
          </div>
        </div>
        <div className='item1_overlay_two'>
          <div className=''>
            <div className='profile'>
              <ul>
                <li className='profile_li'>
                  <h6>Country:</h6>
                  <span>VietNam</span>
                </li>
                <li className='profile_li'>
                  <h6>City:</h6>
                  <span>QuangNgai</span>
                </li>
                <li className='profile_li'>
                  <h6>Age:</h6>
                  <span>21</span>
                </li>
              </ul>
            </div>
            <hr className='profile-hr' />
            <div className='language'>
              <div className='circle-wrap col_one'>1</div>
              <div className='circle-wrap col_two'>2</div>
              <div className='circle-wrap col_three'>3</div>
            </div>
            <hr className='profile-hr' />
            <div className='education'>
              <div className='rows'>
                <div className='row_all'>
                  <li>
                    <div className='ct-center'>
                      <h6>HTML</h6>
                      <span>90%</span>
                    </div>
                    <span className='bar'>
                      <span className='html'></span>
                    </span>
                  </li>
                  <li>
                    <div className='ct-center'>
                      <h6>CSS</h6>
                      <span>90%</span>
                    </div>
                    <span className='bar'>
                      <span className='css'></span>
                    </span>
                  </li>
                  <li>
                    <div className='ct-center'>
                      <h6>JAVASCRIPT</h6>
                      <span>70%</span>
                    </div>
                    <span className='bar'>
                      <span className='javascript'></span>
                    </span>
                  </li>
                  <li>
                    <div className='ct-center'>
                      <h6>JQUERY</h6>
                      <span>60%</span>
                    </div>
                    <span className='bar'>
                      <span className='jquery'></span>
                    </span>
                  </li>
                  <li>
                    <div className='ct-center'>
                      <h6>WORDPRESS</h6>
                      <span>70%</span>
                    </div>
                    <span className='bar'>
                      <span className='wordpress'></span>
                    </span>
                  </li>
                </div>
              </div>
            </div>
            <hr className='profile-hr' />
            <div className='experience'>
              <ul>
                <li className='experience-list'>
                  <span className='exper-ico'>✔</span> Bootstrap, Tailwind
                </li>
                <li className='experience-list'>
                  <span className='exper-ico'>✔</span> Sass, Less
                </li>
                <li className='experience-list'>
                  <span className='exper-ico'>✔</span> Redux,TypeScript
                </li>
                <li className='experience-list'>
                  <span className='exper-ico'>✔</span> GIT knowledge
                </li>
              </ul>
            </div>
            {/* <div className='scroll-down'>⤋</div> */}
          </div>
        </div>
        <div className='item1_overlay_three'>
          <div className='social'>
            <a
              href='/Nguyễn Anh Việt - Fresher Frontend Developer.pdf'
              download>
              Download CV💫
            </a>
          </div>
        </div>
      </div>
      {zoom ? (
        <div className='zoom-img-sc'>
          <div className='overlay'></div>
          <div className='zoom-sc-inner'>
            <div className='ico hv' onClick={handleClose}>
              ❌
            </div>
            <div className='ico2 hv'>🔎</div>
          </div>
          <div className='zoom-sc'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2019/06/18/09/51/hotboy-01.jpg'
              alt='user'
              className='zoom-img'
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
