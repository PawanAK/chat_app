import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="3f27fb3c-1e49-46f4-a609-27fe2c285220"
        userName="john"
        userSecret="john"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio("https://chat-engin-assets.s3.amazonaws.com/click.mp3")
        }
      />
    </div>
  );
}

export default App;
