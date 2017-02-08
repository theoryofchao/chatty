import React, {Component} from 'react';
import AppGlobal from './AppGlobal.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

const socket = new WebSocket('ws://localhost:4000');

class App extends Component {



  componentDidMount() {
    console.log("componentDidMount <App/>");

    socket.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      switch(data.type){
        case "incomingMessage":
          tx.getMessage(JSON.parse(event.data));
          break;

        case "incomingNotification":
          tx.getMessage(JSON.parse(event.data));
          break;

        case "color":
          console.log(JSON.parse(event.data));
          tx.setTextColor(JSON.parse(event.data));
          break;

        case "numUsers":
          tx.getUserCount(JSON.parse(event.data));
          break;

        default:
          throw new Error("Unknown event type " + data.type);
          break;
      }


      
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
          <img className="navbar-doge" src="/images/doge60.png"/><a href="/" className="navbar-brand">Doge-y</a>
          <div className="navbar-users-online">{state.userCount} Users Online</div>
        </nav>
        <MessageList messages={ state.messages }/>
        <ChatBar currentUser={ state.currentUser } socket = {socket}/>
      </div>
    );
  }
}

export default App;
