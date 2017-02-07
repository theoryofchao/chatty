import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      
      <div className="chatbar">
        <input className="chatbar-username" type="text" placeholder={this.props.currentUser.name} />
        <input className="chatbar-message" type="text" placeholder="Type a message and hit ENTER" />
      </div>
    );
  }
}

export default ChatBar;
