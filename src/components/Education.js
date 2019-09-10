import React, { Component } from 'react'

export class Education extends Component {
    render() {
        return (
            <>
            <div className="row">
            <div className="col-md-4 EducationLeft">
           
            <p style={{fontSize:"18px"}}>{this.props.start}-{this.props.end}</p>
            </div>
            <div className="col-md-8 EducationRight
            ">
            <h3>{this.props.college}</h3>
            <p className="text-justify" style={{fontSize:"18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            
            </div>
                
            </>
        )
    }
}

export default Education
