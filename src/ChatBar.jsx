import React, {Component} from 'react';

  const _handleUsername = (event, currentUser, socket) => {
    if(event.keyCode == 13) {
      let oldUsername = currentUser.name ? currentUser.name : '';
      let newUsername = event.target.value;
      tx.changeUsername(oldUsername, newUsername, socket);
    }
  }

  const _handleMessage = (event, socket) => {
    if(event.keyCode == 13) {
      let username = state.currentUser.name ? state.currentUser.name : '';
      let message = {type: 'postMessage', username: username, content: event.target.value};
      tx.addMessage(message, socket);
      event.target.value="";
    }
  }

class ChatBar extends Component {


//console.log(event.target.value)

  render() {
    return (
      <div className="chatbar">
        <input className="chatbar-username" type="text" onKeyUp={(event) => { _handleUsername(event, this.props.currentUser, this.props.socket) }} />
        <input className="chatbar-message" type="text" onKeyUp={(event) => { _handleMessage(event, this.props.socket) }} placeholder="Type a message and hit ENTER" />
      </div>
    );
  }
}

export default ChatBar;
