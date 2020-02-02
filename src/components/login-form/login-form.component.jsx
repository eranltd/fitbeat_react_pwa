import React from 'react'
import './main-selection-form.styles.scss';

class MainSelectionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        const { theme } = this.state;
        const themeClass = theme ? theme.toLowerCase() : 'secondary';

        return (
            <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      

            <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100 p-t-85 p-b-20">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title p-b-70">
                            Welcome
                        </span>
                        <span class="login100-form-avatar">
                            <img src="images/avatar-01.jpg" alt="AVATAR"/>>
                        </span>
    
                        <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "Enter username">
                            <input class="input100" type="text" name="username"/>
                            <span class="focus-input100" data-placeholder="Username"/>
                        </div>
    
                        <div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                            <input class="input100" type="password" name="pass"/>
                            <span class="focus-input100" data-placeholder="Password"/>
                        </div>
    
                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn">
                                Login
                            </button>
                        </div>
    
                        <ul class="login-more p-t-190">
                            <li class="m-b-8">
                                <span class="txt1">
                                    Forgot
                                </span>
    
                                <a href="#" class="txt2">
                                    Username / Password?
                                </a>
                            </li>
    
                            <li>
                                <span class="txt1">
                                    Don’t have an account?
                                </span>
    
                                <a href="#" class="txt2">
                                    Sign up
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    
              
            </div>
            
          
        );
      }
    }

    export default MainSelectionForm;