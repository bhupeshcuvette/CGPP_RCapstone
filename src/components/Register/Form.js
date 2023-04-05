import React, { useState } from "react";
import "./Form.css";

const Form =()=>{
    const [formValues,setFormValues]=useState({"name":'',"username":'',"email":'',"mobile":'',check:false});
    const [displayErrors,setDisplayErrors]=useState({"name":'',"username":"","email":'',"mobile":'',"check":''});

    const handleFormInput =(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setDisplayErrors(performvalidate(formValues));
    }

    const performvalidate =(formValues)=>{
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const mobileRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(!formValues.name){
            displayErrors.name="Name required";
        }
        if(!formValues.username){
            displayErrors.username="UserName required";
        }
        if(!emailRegex.test(formValues.email)){
            displayErrors.email="Not the correct email format";
        }
        else if(!formValues.email){
            displayErrors.email="Email required";
        }
        if(!mobileRegex.test(formValues.mobile)){
            displayErrors.mobile="This is not a valid number";
        }
        else if(!formValues.mobile){
            displayErrors.mobile="Mobile required";
        }
        if(!formValues.check){
            displayErrors.check="Checkbox required";
        }
        return displayErrors;
    }
    return(
        <div className="right-side">
            <p className="superapp">Super App</p>
            <p className="newaccount">Create your new account</p>
            <p className="em-gm">Email <span>|</span> Gmail</p>
            <form className="Form"  >
                <input type="text" name="name" className="Name" value={formValues.name} onChange={handleFormInput} placeholder="Name"/><p class="name-error">{displayErrors.name}</p>
                <input type="text" name="username" className="UserName" value={formValues.username} onChange={handleFormInput} placeholder="UserName"/><p class="username-error">{displayErrors.username}</p>
                <input type="email" name="email" className="Email" value={formValues.email} onChange={handleFormInput} placeholder="Email"/><p class="email-error">{displayErrors.email}</p>
                <input type="tel" name="mobile" className="Mobile" value={formValues.mobile} onChange={handleFormInput} placeholder="Mobile"/><p class="mobile-error">{displayErrors.mobile}</p>
                <input type="checkbox" name="check" className="Checkbox" value={formValues.check} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.checked})}/><p class="check-error">{displayErrors.check}</p> 
                <p className="CheckboxTest">Share my registration data with Superapp</p>
                <button className="signUp" onClick={handleSubmit}>SIGN UP</button> 
            </form>
            <p className="tnc"> By clicking on Sign up. you agree to Superapp <span>Terms and <br/> Conditions of Use</span></p>
            <p className="privacy">To learn more about how Superapp collects, uses, shares and <br/> protects your personal data please head Superapp <span>Privacy <br/> Policy</span></p>
        </div>

    )

}

export default Form;