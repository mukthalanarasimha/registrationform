import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    LastNameInput: '',
    text: '',
    text1: '',
    submitSucessfully: false,
  }

  OnChangeLastName = event => {
    this.setState({LastNameInput: event.target.value})
  }

  BlurEventOnLastName = () => {
    const {LastNameInput} = this.state
    if (LastNameInput === '') {
      this.setState({text1: 'Required'})
    } else {
      this.setState({text: ''})
    }
  }

  OnChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  BlurEventOnFirstName = () => {
    const {firstNameInput} = this.state

    if (firstNameInput === '') {
      this.setState({text: 'Required '})
    } else {
      this.setState({text: ''})
    }
  }

  onSubmitform = event => {
    event.preventDefault()
    const {firstNameInput, LastNameInput} = this.state
    if (firstNameInput === '' && LastNameInput === '') {
      this.setState({
        submitSucessfully: false,
        text: 'Required ',
        text1: 'Required ',
      })
    } else {
      this.setState({submitSucessfully: true})
    }
  }

  onClickAnotherResponse = () => {
    this.setState({submitSucessfully: false})
  }

  renderingSuccess = () => (
    <div className="registration_container">
      <div className="registration_min_containers">
        <h1>Registration</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
          alt="success"
          className="successLogo"
        />
        <p>Submitted Successfully </p>
        <div>
          <button onClick={this.onClickAnotherResponse} type="button">
            Submit Another Response
          </button>
        </div>
      </div>
    </div>
  )

  renderingForm = () => {
    const {firstNameInput, text, LastNameInput, text1} = this.state
    return (
      <div className="registration_container">
        <form
          className="registration_min_containers"
          onSubmit={this.onSubmitform}
        >
          <h1>Registration</h1>
          <div className="input_container">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              id="firstName"
              placeholder="First name"
              type="text"
              onBlur={this.BlurEventOnFirstName}
              onChange={this.OnChangeFirstName}
              value={firstNameInput}
            />
            <p>{text}</p>
          </div>
          <div className="input_container">
            <label htmlFor="firstName">LAST NAME</label>
            <input
              id="firstName"
              placeholder="Last Name"
              type="text"
              onBlur={this.BlurEventOnLastName}
              onChange={this.OnChangeLastName}
              value={LastNameInput}
            />
            <p>{text1}</p>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }

  render() {
    const {submitSucessfully} = this.state
    return (
      <div>
        {submitSucessfully ? this.renderingSuccess() : this.renderingForm()}
      </div>
    )
  }
}

export default RegistrationForm
