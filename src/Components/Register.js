import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props)
  	this.state = {
      data: [],
      id: '',
  	  password: '',
  	  confirmPassword: '',
      serverSelect: '',
      wclname: '',
      wclemail: '',
      Hfaction: '',
      Afaction: '',
      wclclass: '',
      wclprofile: '',
      wclprofileimage: {}
  	}

  	this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputImage = this.handleInputImage.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
  	this.setState({
  	  [event.target.name]: event.target.value
  	})
  }

  handleInputImage(event) {
    console.log(event.target.files[0])
    this.setState({
      wclprofileimage: event.target.files[0]
    })
  }


  handleSubmit() {
    const { 
      wclname,
      wclemail,
      serverSelect,
      password,
      confirmPassword,
      Hfaction,
      Afaction,
      wclclass,
      wclprofile,
      wclprofileimage
    } = this.state;
    // perform all neccassary validations

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else if (wclname == '') {
      alert("Must provide username");
    } else {
      this.putDataToDB(this.state)
    }
  }

  getLatestID = () => {
    return new Promise((resolve, reject) => {
      fetch('https://wowclassicleague.com/api/getLatestID')
        .then((data) => data.json())
        .then((res) => this.setState({ data: res.data }))
        //.then(() => console.log(this.state.data))
        .then(() => resolve())
    })
  };

  putDataToDB = (message) => {
    // get latest id from DB
    this.getLatestID().then(() => {
      //let currentIds = this.state.data.map((data) => data.id)
      let currentId = this.state.data
      let idToBeAdded = currentId + 1
      // while (currentIds.includes(idToBeAdded)) {
      //   ++idToBeAdded;
      // }

      console.log(this.state.wclprofileimage)
      //const data = URL.createObjectURL(this.state.wclprofileimage)
      //console.log(data)

      axios.post('https://wowclassicleague.com/api/putData', {
        id: idToBeAdded,
        password: this.state.password,
        serverSelect: this.state.serverSelect,
        wclname: this.state.wclname,
        wclemail: this.state.wclemail,
        Hfaction: this.state.Hfaction,
        Afaction: this.state.Afaction,
        wclclass: this.state.wclclass,
        wclprofile: this.state.wclprofile,
        wclprofileimage: this.state.wclprofileimage
      })
      this.props.history.push('/Register/Confirmation')
    })
  }

  render() {
    const { location } = this.props;
    if (location.pathname.match('/Register/Confirmation')){
      return null;
    } else {
    return <div style={{marginTop:'50px', backgroundColor:'white'}}>
      <br/>
    	<h1>Season 0 Registration: Open</h1>
    	<br/>
    	<p>Season 0 registration open until November 15th</p>
    	<br/>
    	<br/>
    <div style={{display: 'flex', justifyContent: 'center'}}>
     <Form style={{width: '40%', border: '3px solid #c7c5c5', padding:'25px', borderRadius: '10px'}}>
      <FormGroup>
        <Label for="Name">Account Name</Label>
        <Input type="name" name="wclname" id="name" placeholder="wowdueler" onChange={this.handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="wclemail" id="email" placeholder="example@wowdueler.io" onChange={this.handleInputChange} />
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
            <Input type="radio" name="Hfaction" onChange={this.handleInputChange} />{' '}
            Horde
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="Afaction" onChange={this.handleInputChange} />{' '}
            Alliance
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Your Champion's Server (Americas)</Label>
        <Input type="select" name="serverSelect" id="exampleSelect" onChange={this.handleInputChange}>
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
        <Input type="select" name="serverSelect" id="exampleSelect" onChange={this.handleInputChange}>
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
        <Input type="select" name="wclclass" id="exampleSelectMulti" multiple onChange={this.handleInputChange}>
          <option>Druid</option>
          <option>Hunter</option>
          <option>Mage</option>
          <option>Paladin</option>
          <option>Priest</option>
          <option>Rogue</option>
          <option>Shaman</option>
          <option>Warlock</option>
          <option>Warrior</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Player Profile Information</Label>
        <Input type="textarea" name="wclprofile" id="exampleText" onChange={this.handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Upload Champion Gear Screen Shot</Label>
        <Input type="file" name="wclprofileimage" id="wclprofileimage" onChange={this.handleInputImage} />
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
}
export default withRouter(Register)