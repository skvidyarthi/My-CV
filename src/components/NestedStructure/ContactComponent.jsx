import React from 'react'
import axios from 'axios'

class ContactCompnent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            message:'',

        }


    }

    handleSubmit(e){
        e.preventDefault();
        
        axios({
            method:'POST',
            url:'http://localhost:3001/config',
            data:'this.state'
        }).then((response) =>{

           if (response.data.status === 'success' ){
               alert('Message Sent SuccessFully')
           }
           else if(response.data.status ==='fail'){
               alert('Message failed to send.')
           }
        })
    }

    resetForm(){
        this.setState({name:'',email:'', message:''})
    }

    render(){

        return(

            <>

<section  id="contact"  className="contact">
                <div className="section-inner start-page-full-width">
                <div className="start-page-full-width">
<h1>Contact Us</h1>
<form id="contact-form" onSubmit={this.handleSubmit.bind(this)}  method="POST">
<div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
</div>
<div className="form-group">
    <label htmlFor="email">Email Address</label>
    <input type="text" id="email" className="form-control" area-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
</div>
<div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" className="form-control" rows="5" value={this.state.message} 
    onChange={this.onMessageChange.bind(this)}></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>

</form>

                </div> 
                </div>
            </section>

</>
        )
    }

    onNameChange(event){
        this.setState({name: event.target.value})
    }
    onEmailChange(event){
        this.setState({email: event.target.value})
    }
    onMessageChange(event){
        this.setState({message: event.target.value})
    }
    
}


export default ContactCompnent