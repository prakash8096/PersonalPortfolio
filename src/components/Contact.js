import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className="ContactBody" >
            {/* Maps Starts Here*/ }
            <section >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60868.624435591446!2d78.44892810344383!3d17.541420715946963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb855e9adf4dcf%3A0x6cd4e902af254f87!2sKompally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1566733822428!5m2!1sen!2sin" width="100%" height="400" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
            </section>
            {/* Maps Ends Here*/ }
            <section className="Form" >
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            
            <div className="form-group">
            <label>Your Name (required)
            </label>
            <input type="text" className="form-control" />
            
            </div>
            <div className="form-group">
            <label>Your Email (required)
            </label>
            <input type="email" className="form-control" />
            
            </div>
            <div className="form-group">
            <label>Subject
            </label>
            <input type="text" className="form-control" />
            
            </div>
            <div className="form-group">
            <label>Your Message</label>
            <textarea className="form-control" rows="10">
            </textarea>
            </div>
            <button className="btn btn-primary btn-lg">Send <i class="fas fa-paper-plane"></i></button>
            
           
            </div>
            </div>
            {/*Text area */}
            <div className="row">
            <div className="col-md-12">
            </div></div>
            </div>
            </section>
            </div>
            
        )
    }
}

export default Contact
