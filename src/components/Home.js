import React, { Component } from 'react'
import avatar from './avatar.png'

export class Home extends Component {
    render() {
        return (
            <div>
            <section className="navig">
            <div className="container">
            <div className="row ">
            <div className="col-md-8 col-md-offset-5 Image" >
            <img src={require('./avatar.png')}  height="200px" />
            
            </div>
           
           <div className="col-md-9 col-md-offset-2">
           <div className="well Well">
           <h1 className="text-center">FullStack Web Developer</h1>
           <hr  />
           <p className="lead text-center"> HTML/CSS | Bootstrap | JavaScript | React | jQuery | Python |Django| MySQL</p>
           
           <div className="row" >
           <div className="col-md-3 col-md-offset-2">
           <a><i class="fab fa-5x fa-linkedin-in"></i></a>
           </div>
           <div className="col-md-3 ">
           <a><i class="fab fa-5x fa-github"></i></a>
           </div>
           <div className="col-md-3 ">
           <a><i class="fab fa-5x fa-linkedin-in"></i></a>
           </div>
           </div>
           
          
           </div>
           </div>
           
           
            </div>
            
        
            </div>
            </section>
            </div>
            
        )
    }
}

export default Home
