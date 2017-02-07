import React, {Component} from 'react';

  const handleKeyPress = (event) => {
    if(event.keyCode == 13) {
      let message = {username: state.currentUser.name, content: event.target.value};
      tx.addMessage(message);
      event.target.value="";
    }
  }

class ChatBar extends Component {


//console.log(event.target.value)

  render() {
    return (
      <div className="chatbar">
        <input className="chatbar-username" type="text" placeholder={this.props.currentUser.name} />
        <input className="chatbar-message" type="text" onKeyUp={(event) => { handleKeyPress(event) }} placeholder="Type a message and hit ENTER" />
      </div>
    );
  }
}

export default ChatBar;
