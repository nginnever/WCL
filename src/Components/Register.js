import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
	this.state = {
	  password: '',
	  confirmPassword: ''
	}
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
  	this.setState({
  	  [event.target.name]: event.target.value
  	})
  }

  handleSubmit(event) {
    const { password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmPassword) {
        alert("Passwords don't match");
    } else {
        // make API call
    }
  }

  check(input){
    if (input.value != document.getElementById('examplePassword').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
  }

  render() {
    return <div style={{marginTop:'50px'}}>
    	<h1>Register Now</h1>
    	<br/>
    	<p>Season 0 registration open until November 15th</p>
    	<br/>
    	<br/>
    <div style={{display: 'flex', justifyContent: 'center'}}>
     <Form style={{width: '40%', border: '3px solid gray', padding:'25px', borderRadius: '10px'}}>
      <FormGroup>
        <Label for="Name">Account Name</Label>
        <Input type="name" name="name" id="exampleName" placeholder="wowdueler" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="example@wowdueler.io" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
		<div id="message">
		  <p>Password must contain the following:
		  A <b>lowercase</b> letter;
		  A <b>capital (uppercase)</b> letter;
		  A <b>number</b>;
		  Minimum <b>8 characters</b></p>
		</div>
        <Input type="password" name="password" id="examplePassword" onChange={this.handleInputChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
        Confirm Password
        <br/>
        <Input type="password"  name="confirmPassword" required="required" id="examplePassword" onChange={this.handleInputChange}  />   
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Select Faction</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="Faction" />{' '}
            Horde
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="Faction" />{' '}
            Alliance
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Your Champion's Server (Americas)</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>NONE</option>
          <option>Anathema</option>
          <option>Arcanite Reaper</option>
          <option>Bigglesworth</option>
          <option>Benediction</option>
          <option>Blaumeux</option>
          <option>Earthfury</option>
          <option>Faerlina</option>
          <option>Fairbanks</option>
          <option>Heartseeker</option>
          <option>Herod</option>
          <option>Incendius</option>
          <option>Kirtonos</option>
          <option>Kurinaxx</option>
          <option>Kromcrush</option>
          <option>Kurinnaxx</option>
          <option>Loatheb</option>
          <option>Netherwind</option>
          <option>Rattlegore</option>
          <option>Skeram</option>
          <option>Smolderweb</option>
          <option>Stalagg</option>
          <option>Sul'thraze</option>
          <option>Sulfuras</option>
          <option>Thalnos</option>
          <option>Thunderfury</option>
          <option>Whitemane</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Your Champion's Server (Europe)</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>NONE</option>
          <option>Ashbringer</option>
          <option>Bloodfang</option>
          <option>Dreadmist</option>
          <option>Earthshaker</option>
          <option>Firemaw</option>
          <option>Flamelash</option>
          <option>Gandling</option>
          <option>Gehennas</option>
          <option>Golemagg</option>
          <option>Judgement</option>
          <option>Mograine</option>
          <option>Noggenfogger</option>
          <option>Razorgore</option>
          <option>Shazzrah</option>
          <option>Skullflame</option>
          <option>Stonespine</option>
          <option>Ten Storms</option>
          <option>Amnennar</option>
          <option>Sulfuron</option>
          <option>Finkle</option>
          <option>Heartstriker</option>
          <option>Lucifron</option>
          <option>Venoxis</option>
          <option>Patchwerk</option>
          <option>Dragon's Call</option>
          <option>Transcendence</option>
          <option>Harbinger of Doom</option>
          <option>Пламегор (Flamegor)</option>
          <option>Змейталак (Wyrmthalak)</option>
          <option>Рок-Делар (Rhok’delar)</option>
          <option>Mandokir</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Your Champion(s) Class</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>Hunter</option>
          <option>Warrior</option>
          <option>Rogue</option>
          <option>Priest</option>
          <option>Druid</option>
          <option>Mage</option>
          <option>Warlock</option>
          <option>Shaman</option>
          <option>Paladin</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Upload Champion Screen Shot</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Rules Agreement
        </Label>
      </FormGroup>
      <Button onClick={this.handleSubmit}>Submit</Button>
    </Form>
    </div>
    <br/>
    <br/>
    </div>
  }
}
export default Register