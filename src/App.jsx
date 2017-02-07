import React, {Component} from 'react';
import AppGlobal from './AppGlobal.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  componentDidMount() {
    console.log("componentDidMount <App/>");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      tx.addMessage(newMessage);
      console.log(state.messages);
    }, 3000);
  }

  render() {
    return (
      <div className="wrapper">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={ state.messages }/>
        <ChatBar currentUser={ state.currentUser }/>
      </div>
    );
  }
}

export default App;
