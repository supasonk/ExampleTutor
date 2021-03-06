import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/navbar.css";
import MobileNavbar from './MobileNavbar.js'
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'
const Desktop = ({ children }) => <MediaQuery minWidth={1280} children={children} />;
const Tablet = ({ children }) => <MediaQuery minWidth={768} maxWidth={1279} children={children} />;
const Mobile = ({ children }) => <MediaQuery maxWidth={768} children={children} />;

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className = 'navbar-wrapper'>
                        <div className = 'row contact-row'>
                            <div className = 'col-md-2 col-md-offset-7'>
                                <img src = {"src/client/app/assets/logo/phone.png"}  />
                                Contact : 096 883-4441
                            </div>
                            <div className = 'col-md-2 line'>
                                <img src = {"src/client/app/assets/logo/line.png"}  />
                                Line : <a className = 'line' href = 'http://line.me/ti/p/@CULH'>CULearningHome</a>
                            </div>
                            <div className = 'col-md-1  social-bar'>
                                <a className = 'facebook' href = 'https://www.facebook.com/CULearningHome/'><img src = {"src/client/app/assets/logo/facebook.png"}  /></a>
                                <a className = 'instagram-icon' href = 'https://www.instagram.com/cu_learning_home/'><img src = {"src/client/app/assets/logo/instagram.png"}  /></a>
                            </div>


                        </div>
                        <div className = 'row menubar-row'>
                            <Link to = '/' style={{ textDecoration: 'none' }}>
                            <div className = 'col-md-2 header-grid logo-grid'>
                                <img src = {"src/client/app/assets/logo/culearninghome.png"}/>
                            </div>
                            <div className="col-md-2  m-blue header-grid">
                                <img src={"src/client/app/assets/logo/appbar.home.png"} />
                            	<span className ='navbar-item'>หน้าแรก</span>

                        	</div>
                            </Link>
                            <div className="col-md-2 m-green header-grid dropdown"  >
                                <img src={"src/client/app/assets/logo/appbar.book.hardcover.open.writing.png"} />
                                <span className ='navbar-item'>หลักสูตร</span>
                                <ul className="dropdown-menu multi-level m-green dropdown-font" role="menu" aria-labelledby="dropdownMenu">
                                <li><Link to = '/course' style={{ textDecoration: 'none' }}><strong>อัตราค่าเรียน</strong></Link></li>
                                  <li><Link to = '/kindergarten' style={{ textDecoration: 'none' }}>อนุบาล</Link></li>
                                  <li><Link to = '/primaryschool' style={{ textDecoration: 'none' }}>ประถมต้น</Link></li>
                                  <li><a href="#" style={{ textDecoration: 'none' }}>ประถมปลายและมัธยมต้น</a></li>
                                  <li><a href="#" style={{ textDecoration: 'none' }}>มัธยมปลาย</a></li>
                                  <li><a href="#" style={{ textDecoration: 'none' }}>บุคคลทั่วไป</a></li>
                                </ul>
                        	</div>
                            <div className=" col-md-2 m-yellow header-grid" >
                                <img src={"src/client/app/assets/logo/appbar.leaderboard.png"} />

                            	<span className ='navbar-item'>ความสำเร็จของเรา</span>
                        	</div>
                            <Link to = '/register' style={{ textDecoration: 'none' }} >
                            <div className="col-md-2 m-red header-grid">
                                <img src={"src/client/app/assets/logo/appbar.edit.png"} />
                            	<span className ='navbar-item'>สมัครเรียน</span>
                        	</div>
                            </Link>
                            <Link to = '/articles' style={{ textDecoration: 'none' }}>
                            <div className="col-md-2 m-purple header-grid">
                                <img src={"src/client/app/assets/logo/appbar.book.open.text.png"} />
                            	<span className ='navbar-item'>สูตรลับเรียนเก่ง</span>

                        	</div>
                            </Link>
                        </div>
                    </div>
                </Desktop>
                <Tablet>
                    <div className = 'navbar-wrapper'>
                        <div className = 'row contact-row'>
                            <div className = 'col-sm-3 col-sm-offset-4'>
                                <img src = {"src/client/app/assets/logo/phone.png"}  />
                                Contact : 096 883-4441
                            </div>
                            <div className = 'col-sm-3 line'>
                                <img src = {"src/client/app/assets/logo/line.png"}  />
                                Line : <a className = 'line' href = 'http://line.me/ti/p/@CULH'>CULearningHome</a>
                            </div>
                            <div className = 'col-sm-2  social-bar'>
                                <a className = 'facebook' href = 'https://www.facebook.com/CULearningHome/'><img src = {"src/client/app/assets/logo/facebook.png"}  /></a>
                                <a className = 'instagram-icon' href = 'https://www.instagram.com/cu_learning_home/'><img src = {"src/client/app/assets/logo/instagram.png"}  /></a>
                            </div>


                        </div>
                        <div className = 'row menubar-row'>
                            <Link to = '/' style={{ textDecoration: 'none' }}>
                            <div className = 'col-sm-2 header-grid logo-grid'>
                                <img src = {"src/client/app/assets/logo/culearninghome.png"}/>
                            </div>
                            <div className="col-sm-2  m-blue header-grid">
                                <img src={"src/client/app/assets/logo/appbar.home.png"} />
                            	<span className ='navbar-item'>หน้าแรก</span>

                        	</div>
                            </Link>
                            <div className="col-sm-2 m-green header-grid dropdown"  >
                                <img src={"src/client/app/assets/logo/appbar.book.hardcover.open.writing.png"} />
                                <span className ='navbar-item'>หลักสูตร</span>
                                <ul className="dropdown-menu multi-level m-green dropdown-font" role="menu" aria-labelledby="dropdownMenu">
                                <li><Link to = '/course' style={{ textDecoration: 'none' }}><strong>อัตราค่าเรียน</strong></Link></li>
                                  <li><Link to = '/kindergarten' style={{ textDecoration: 'none' }}>อนุบาล</Link></li>
                                  <li><Link to = '/primaryschool' style={{ textDecoration: 'none' }}>ประถมต้น</Link></li>
                                  <li><a href="#">ประถมปลายและมัธยม</a></li>
                                </ul>
                        	</div>
                            <Link to = '/success' style={{ textDecoration: 'none' }} >
                            <div className=" col-sm-2 m-yellow header-grid" >
                                <img src={"src/client/app/assets/logo/appbar.leaderboard.png"} />
                            	<span className ='navbar-item'>ความสำเร็จของเรา</span>
                        	</div>
                            </Link>
                            <Link to = '/register' style={{ textDecoration: 'none' }} >
                            <div className="col-sm-2 m-red header-grid">
                                <img src={"src/client/app/assets/logo/appbar.edit.png"} />
                            	<span className ='navbar-item'>สมัครเรียน</span>
                        	</div>
                            </Link>
                            <Link to = '/articles' style={{ textDecoration: 'none' }}>
                            <div className="col-sm-2 m-purple header-grid">
                                <img src={"src/client/app/assets/logo/appbar.book.open.text.png"} />
                            	<span className ='navbar-item'>สูตรลับเรียนเก่ง</span>

                        	</div>
                            </Link>
                        </div>
                    </div>
                </Tablet>
                <Mobile>
                    <MobileNavbar />
                </Mobile>
            </div>


    );
  }
}

export default Navbar;
