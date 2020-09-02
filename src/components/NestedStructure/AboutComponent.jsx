import React from 'react';

class AboutComponent extends React.Component{

render(){
    return(
        <>
    	<section id="about-me"  className="pt-page about-me">

<div className="section-inner start-page-full-width">
    <div className="start-page-full-width">
        	
            <div className="row">
            	<div className=" col-xs-12 col-sm-12 col-md-7 col-lg-7">
                	<h1>Sanjit Vidyarthi</h1>
                    <h5 className="subHeading">Sr. Frontend and UI/UX Developer</h5>
                    <p>Professional Synopsis: I have around 12 years of experience in Web Development. Solution-driven professional excelling in highly collaborative work environment, finding solutions to challenges and focused on customer satisfaction. Proven experience developing consumer-focused web sites using React, HTML, CSS, JQuery and JavaScript. Experience building products for desktop, phone and mobile app users, meeting highest standards for web design, user experience, best practices, usability and speed. Responding to challenges by designing and developing solutions and building web applications aligned to customer's services. Translating solutions into code and working across many different APIs, third-party integrations and databases.

</p>
                    
                     
                     
                     <a href="/doc/SanjitKumarVidyarthi.docx" className="bntDownload">Download Resume</a>
                </div>
                <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 proPic">
                	<img src="/images/profile-img.jpg" alt="" className="topmar" />
                </div>
            </div>
        
        </div><br /><br />
        <h2>What I do</h2>
        <div class="featured-boxes">
	
	<div className="row">
	<div className="col-sm-4">
	<div className="panel">
	<i className="fa fa-code"></i>
	<h3>Frontend Development</h3>
	<p>I am Converting Web design to an interactive Web page, Using Frameworks React and Angular JS, with frontend language JavaScript, html and css.</p>
	
	</div>
	</div>
	
	<div className="col-sm-4">
	<div className="panel">
	<i className="fa fa-laptop"></i>
	<h3>UI Development</h3>
	<p>I have around 10 years of experience in UI Development, I am converting PSD and Prototype like UXPin to Interactive Web page using tool html css bootsrap.</p>
	
	</div>
	</div>
	
	<div className="col-sm-4">
	<div className="panel">
	<i className="fa fa-paint-brush"></i>
	<h3>UX Development</h3>
	<p>As an UX developer I plan, design, and develop web applications and web pages using Photoshop, XD, html css visual design tools</p>
	
	</div>
	</div>
	</div>
	</div>
	

        </div>
        </section>
</>
    )

}

}
export default AboutComponent