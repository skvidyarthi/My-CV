import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
class HeaderComponent extends React.Component {
    render(){
        return(
        <header className='header' id="header">
           <div className="header-content clearfix">
                <div className="header-image" >
                 <a href="#about-me"><img src="/images/profile-img.jpg" alt="image" /></a>
                </div>
            <div className="site-title-block">
                <h1 className="site-title"><a href="#about-me">Sanjit Vidyarthi</a></h1>
            </div>
            <div className="site-nav navbar-wrapper">
                <ul id="nav" className="site-main-menu site-auto-menu nav">
                    <li className="menuItem"><a className="nav-link active" href="#about-me" >About Me</a></li>
                    <li className="menuItem"><a  className="nav-link" href="#resume" >Resume</a></li>
                    <li className="menuItem"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                    <li className="menuItem"><a className="nav-link" href="#contact">Contacts</a></li>
                    
                    </ul>
            </div>
            <div className="social-links">
                <a href="https://twitter.com/sanjitvid" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/sanjit-vidyarthi-19155342/" target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.facebook.com/sanjit.vidyarthi" target="_blank"><i className="fa fa-facebook-f"></i></a>
            </div>
            <div className="copyrights">© 2020 All rights reserved.</div>
             </div>
    </header>
       
     
    )
}
    
    }
    export default HeaderComponent

