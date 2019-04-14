import React, { Component } from 'react';
import Message from './../Message/Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      this.setState({
        messages: this.state.messages.concat({ text: this.state.messageInput }),
        messageInput: ''
      });
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map(message => (
              <Message key={new Date()} text={message.text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage.bind(this)}
          onKeyPress={this.sendMessageOnEnter.bind(this)}
        />
      </div>
    );
  }
}
