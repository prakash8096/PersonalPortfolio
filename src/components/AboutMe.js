import React, { Component } from 'react'

export class AboutMe extends Component {
    render() {
        return (
            <div>
            {/*Top Section */}
                <section>
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6">
                <img src={require('./jos.jpg')}  height="700" width="660"/>
                </div>
                <div className="col-md-6 JosSide">
                
                <div className="row padtop">
                <div className="col-md-5 ">
                <h1 className="">Sai</h1>
                <h1 className="">Prakash</h1><hr />
                <p className="lead text-justify text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
                </div>
                
                
               
                </div>

                </div>
                </div>
                </section>
                {/* Ended The top section */}
                {/*sectio 2 Start */}
                <section className="section2">
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-3 col-md-offset-3" ><h1>08</h1></div>
                <div className="col-md-6" >
                <p className="" >PROJECTS COMPLETED</p>
                <p id="parasec2">I have completed over 8 projects including iOS/Android apps, Mac/Windows programs,Unity/Unreal video games,and web apps for clients</p>
                </div>

                </div>
                </div>
                </section>
                {/*section 2 ended here */}
                {/*section 3 starts here */}
                <div className="swarnil">
                <div className="row">
                <div className="col-md-10 col-md-offset-1">
                <h1 >In Short If I can Summerize who Iam</h1><hr />
                <p className="text-justify text-center lead">Ordinary boy from one middle class family,Passionate on coding ,Self taught  Web Developer who love to code for Web,I Love Playing with Javascript Libraries and CSS Frameworks.I keep Learning latest trends and stay updated in Web Dev Community . I have good knowledge on Django Most of my Projects are done with Django,I learn things which I found intersting.Internet is my teacher.I believe following passion along with the profession is one of  the best thing in the world.I love Travelling.Iam fun loving guy,Backbencher,Single but not shakth launda ready melt if girl love to code</p>
                </div></div>
                </div>
                {/*section 3 ends here */}
            </div>
        )
    }
}

export default AboutMe
