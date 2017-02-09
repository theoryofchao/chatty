import React, {Component} from 'react';

  const _handleUsername = (event, currentUser, socket) => {
    if(event.keyCode == 13) {
      let oldUsername = currentUser.name ? currentUser.name : '';
      let newUsername = event.target.value;
      tx.changeUsername(oldUsername, newUsername, socket);
    }
  }

  const _handleMessage = (event, socket, color) => {
    if(event.keyCode == 13) {
      let username = state.currentUser.name ? state.currentUser.name : 'Anonymous';
      let message = {type: 'postMessage', username: username, content: event.target.value, color: color};
      tx.addMessage(message, socket);
      event.target.value="";
    }
  }

class ChatBar extends Component {


  render() {

    console.log(this.props);

    return (
      <div className="chatbar">
        <input className="chatbar-username" type="text" onKeyUp={(event) => { _handleUsername(event, this.props.currentUser, this.props.socket) }} />
        <input className="chatbar-message" type="text" onKeyUp={(event) => { _handleMessage(event, this.props.socket, this.props.color) }} placeholder="Type a message and hit ENTER" />
      </div>
    );
  }
}

export default ChatBar;
