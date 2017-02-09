import React, {Component} from 'react';
import AppGlobal from './AppGlobal.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

const socket = new WebSocket('ws://localhost:4000');

class App extends Component {



  componentDidMount() {
    console.log("componentDidMount <App/>");

    socket.onmessage = (event) => {
      //console.log(event.data);
      const data = JSON.parse(event.data);
      switch(data.type){
        case "incomingMessage":
          tx.getMessage(JSON.parse(event.data));
          break;

        case "incomingNotification":
          tx.getMessage(JSON.parse(event.data));
          break;

        case "color":
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

  let coolcat = null;
  if(state.userCount > 1) {
    coolcat = <div className="navbar-users-online">{state.userCount} Cool Cats Online</div>;
  }
  else {
    coolcat = <div className="navbar-users-online">{state.userCount} Cool Cat Online</div>;
  }

    return (
      <div className="wrapper">
        <nav className="navbar">
          <img className="navbar-doge" src="/images/doge60.png"/><a href="/" className="navbar-brand">Doge-y</a>
          <img className="navbar-cat" src="/images/heavybreathingcat60.png"/>{coolcat}
        </nav>
        <MessageList messages={ state.messages }/>
        <ChatBar currentUser={ state.currentUser } socket = {socket} color={ state.color }/>
      </div>
    );
  }
}

export default App;
