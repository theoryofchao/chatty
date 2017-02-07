import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

var appData = {
                currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
                messages: [
                            {
                              id: 1,
                              username: "Bob",
                              content: "Has anyone seen my marbles?",
                            },
                            {
                              id: 2,
                              username: "Anonymous",
                              content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
                            }
                          ]
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = appData;
  }

  render() {
    return (
      <div className="wrapper">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={ this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser}/>
      </div>
    );
  }
}


export default App;
