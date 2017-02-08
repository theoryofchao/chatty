import React, {Component} from 'react';
import AppGlobal from './AppGlobal.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

const socket = new WebSocket('ws://localhost:4000');

class App extends Component {



  componentDidMount() {
    console.log("componentDidMount <App/>");

    socket.onmessage = (event) => {
      //console.log(event);
      tx.getMessage(JSON.parse(event.data));
    }; 

    if(socket) {
      console.log("connected to server");
    }
    //Force re-render to update socket
    // this.forceUpdate();
  }

  render() {
    return (
      <div className="wrapper">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={ state.messages }/>
        <ChatBar currentUser={ state.currentUser } socket = {socket}/>
      </div>
    );
  }
}

export default App;
