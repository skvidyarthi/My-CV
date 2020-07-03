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
                    <h5 className="subHeading">Web designer</h5>
                    <p>Professional Synopsis: I have around 12 years of experience in Web Development. Solution-driven professional excelling in highly collaborative work environment, finding solutions to challenges and focused on customer satisfaction. Proven experience developing consumer-focused web sites using React, HTML, CSS, JQuery and JavaScript. Experience building products for desktop, phone and mobile app users, meeting highest standards for web design, user experience, best practices, usability and speed. Responding to challenges by designing and developing solutions and building web applications aligned to customer's services. Translating solutions into code and working across many different APIs, third-party integrations and databases.

</p>
                    
                     
                     
                     <a href="/doc/SanjitKumarVidyarthi.docx" className="bntDownload">Download Resume</a>
                </div>
                <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 proPic">
                	<img src="/images/profile-img.jpg" alt="" className="img-circle topmar" />
                </div>
            </div>
        
        </div><br /><br />
        <h2>What I do</h2>
        <div className="skill">

<div className="row">
<div className="col-sm-12 col-md-6">
    <div className="skillset">
    <div className="icon">
    <i className="fa fa-file-code-o" aria-hidden="true"></i>
    </div>   
    <div className="tab-content">
    <h3>Frontend Development</h3>
    Providing Frontend Development solutions for web app using skill React, JavaScript, JQuery, Bootstrap, HTML and CSS.
        </div>
    </div> 
</div>

<div className="col-sm-12 col-md-6">
    <div className="skillset">
    <div className="icon">
    <i className="fa fa-desktop" aria-hidden="true"></i>
    </div>   
    <div className="tab-content">
    <h3>Web Design</h3>
    I am specialize in creating beautiful web pages, UX and UI Development using tools Adobe XD, Phtotoshop, UXPin, HTML, CSS, Bootstrap.
    
        </div>
    </div> 
</div>
</div>

<div className="row">
<div className="col-sm-12 col-md-6">
    <div className="skillset">
    <div className="icon">
    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    </div>   
    <div className="tab-content">
    <h3>Ecommerce</h3>
    I am loving to create Ecommerce site using opensource like opencart, wordpress with woocommerce etc.
        </div>
    </div> 
</div>

<div className="col-sm-12 col-md-6">
    <div className="skillset">
    <div className="icon">
    <i className="fa fa-users" aria-hidden="true"></i>
    </div>   
    <div className="tab-content">
    <h3>Management</h3>
    I have soft skills like Agile and Scrum,Time Management, People Management, Communicate within team, Leadership and Analytical Thinking.
    
        </div>
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