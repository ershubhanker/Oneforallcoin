import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
    
  return (
    <>
    <section style={{marginTop:"50px" , backgroundColor:"#0f3e97"}} class="pt-0">
	<div class="container">
    	<div class="row">
        	<div class="col-lg-12">
            	<div  style={{backgroundColor:"#0f3e97" , marginTop:"150px" }} class="authorize_box">
                	<div class="title_light text-center">
                    	<h2>REGISTER</h2>
                    </div>
                    <div class="authorize_form">
                    	<form>
                        	<div class="form-group">
                            	<input type="text" name="name" placeholder="Name" required/>
                            </div>
                        	<div class="form-group">
                            	<input type="email" name="email" placeholder="E-mail" required/>
                            </div>
                            <div class="form-group">
                            	<input type="password" id="password-field" name="password" placeholder="Password" required/>
                                <span data-toggle="#password-field" class="ion-eye toggle-password"></span>
                            </div>
                            <div class="form-group">
                            	<input type="password" id="cpassword-field" name="password" placeholder="Confirm Password" required/>
                                <span data-toggle="#cpassword-field" class="ion-eye toggle-password"></span>
                            </div>
                            <div class="form-group">
                            	<div class="checkbox_field d-inline">
                                    <input type="checkbox" value="rememberme" id="rememberme" name="rememberme"/>
                                    <label style={{color:"white"}} for="rememberme">I agree with <a style={{color:"white"}}  href="#">Terms of Services</a></label>
                                </div>
                            </div>
                            <div class="form-group text-center">
                            	<button type="submit" class="btn btn-default">Sign Up</button>
                            </div>
                            <div class="form-group text-center">
                            	<span style={{color:"white"}}>Back to <Link to={"/login"} ><a  style={{color:"#ffffff"}}><u>Login</u></a></Link> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Signup