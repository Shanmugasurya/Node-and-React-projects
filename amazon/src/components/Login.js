import React, { Component } from 'react';

export class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            Username: "",
            Firstname: "",
            Lastname: "",
            Email: "",
            Age: "",
            Gender: ""
        }
    }
    //Event Handling for onChange
    handleChange = (e) => {
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name] = e.target.value;
        this.setState(currentState); //The moment is set state... render() will call
    }
    render() {
        return <div>
            <h1>
                <center>
                Registration Page
                </center>
            </h1>
            <div class="form-group row">
                <label for="inputUserName" class="col-sm-2 col-form-label">User Name</label>
                <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputuserName" name="Username" placeholder="UserName" onChange={this.handleChange} />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputFirstName" name="Firstname" placeholder="FirstName" onChange={this.handleChange}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputLastName" placeholder="LastName" name="Lastname" onChange={this.handleChange}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" name="Email" onChange={this.handleChange} />
                </div>
            </div>    
            <div class="form-group row">
                <label for="inputAge" class="col-sm-2 col-form-label">Age</label>
                <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputAge" placeholder="Age" name="Age" onChange={this.handleChange}/>
                </div>
            </div>
            <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Gender" id="gridRadios1" value="Male" onChange={this.handleChange}/>
                            <label class="form-check-label" for="gridRadios1">
                            Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Gender" id="gridRadios2" value="Female" onChange={this.handleChange}/>
                            <label class="form-check-label" for="gridRadios2">
                            female
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Genders" id="gridRadios3" value="Transgender" onChange={this.handleChange}/>
                            <label class="form-check-label" for="gridRadios3">
                            Transgender
                            </label>
                        </div>
                    </div>
            </div>
            </fieldset>
            <div class="form-group row">
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">
                            Agree to Terms and Conditions
                            </label>
                        </div>
                    </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </div>
            <h1>{this.state.Username}</h1>
            <h1>{this.state.Firstname}</h1>
            <h1>{this.state.Lastname}</h1>
            <h1>{this.state.Email}</h1>
            <h1>{this.state.Age}</h1>
            <h1>{this.state.Gender}</h1>
        </div>
    }
}

