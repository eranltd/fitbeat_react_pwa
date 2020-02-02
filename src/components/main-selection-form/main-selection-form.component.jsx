import React from 'react'
import './main-selection-form.styles.scss';
import avatar from '../../images/avatar-01.jpg'; // Tell Webpack this JS file uses this image
import { Dropdown } from 'react-bootstrap';


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

            <div className="main-selection-wrapper pt-85 pb-20">
                <div className="row">
                <span className="main-selection-title col-12 mb-5 text-center">
						Welcome
					</span>

                </div>

                <div className="row">
                <span className="main-selection-form-avatar mb-5">
                <img src={avatar} alt="AVATAR"/>
            </span>
                </div>

                <div className="row">
                <span className="main-selection-form-exercise-plan col-12 text-center d-inline">

                PLAN: <Dropdown variant="flat" className=" col-12 text-center d-inline">
                <Dropdown.Toggle variant="success" id="dropdown-basic" placeholder="Recipient's username">
                  
                </Dropdown.Toggle>
              
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">A</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">B</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Full Body</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>



                </span>
                </div>

               

            
   
            </div>

              
            </div>
            
          
        );
      }
    }

    export default MainSelectionForm;