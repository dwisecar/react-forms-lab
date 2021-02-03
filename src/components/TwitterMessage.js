import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
    console.log(e)
  }

  remainingCharacters = (messageLength) => {
      return this.props.maxChars - messageLength   
  }

  render() {
    return ( 
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={this.handleChange}
          value={this.state.message}
        /><br></br>
        <strong>Remaining Characters: {this.remainingCharacters(this.state.message.length)}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
