import React, { Component } from 'react'
import Education from './Education';


export class Resume extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid ContactBody">
            <div className="row">
            <div className="col-md-4 col-md-offset-0 ResumeLeft" >
            <img src={require('./avatar.png')}  height="200px" className="img-circle" />
            <h1 className="">Prakash Kasula</h1>
            <h2>Programmer
            </h2>
            <hr/>
            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <hr />
            <h2>Address</h2>
            <p className="">4-28 Hyderabad Secundrabad</p>
            <h2>Phone</h2>
            <p className="">8096512197</p>
            <h2>Email</h2>
            <p>saiprakadh@gmail.com</p>
            <h2>Website</h2>
            <p>www.prakash04.ml</p>


            </div>
            <div className="col-md-7 ResumeRight">
            <h1>Education</h1>
            <div className="SpaceTop">
            <Education title="Education" start={1992} end={1996} college="MyUniversity"/>
           <Education start={1992} end={1996} college="My 2nd University"/>
           <Education start={1992} end={1996} college="My 3rd University"/>
<hr />
<div className="row">
<div className="col-md-9 col-md-offset-1">
<h1>Skills</h1>
<h3>Python</h3>
<div className="progress">
            <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style={{width:"75%"}}>
            
            </div>
            </div>
            <h3>Django</h3>
<div className="progress">
            <div className="progress-bar progress-bar-striped active " role="progressbar" style={{width:"60%"}}>
            
            </div>
            </div>
            <h3>HTML/CSS</h3>
<div className="progress">
            <div className="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style={{width:"80%"}}>
            
            </div>
            </div>
            <h3>Bootstrap</h3>
<div className="progress">
            <div className="progress-bar progress-progress-bar-info progress-bar-striped active " role="progressbar" style={{width:"70%"}}>
            
            </div>
            </div>
            <h3>JavaScript</h3>
<div className="progress">
            <div className="progress-bar progress-bar-warning progress-bar-striped active " role="progressbar" style={{width:"82%"}}>
            
            </div>
            </div>
            <h3>React</h3>
<div className="progress">
            <div className="progress-bar progress-bar-danger active progress-bar-striped " role="progressbar" style={{width:"46%"}}>
            
            </div>
            </div>
            <h3>jQuery</h3>
<div className="progress">
            <div className="progress-bar progress-bar-success active progress-bar-striped " role="progressbar" style={{width:"54%"}}>
            
            </div>
            </div>
            <h3>MySQL</h3>
<div className="progress">
            <div className="progress-bar progress-bar-primary active progress-bar-striped " role="progressbar" style={{width:"50%"}}>
            
            </div>
            </div>
</div>
</div>






            </div>
           
            </div>
            </div>
            </div>
            </div>
            
                
            
        )
    }
}

export default Resume
