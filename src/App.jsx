import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectionId="3f27fb3c-1e49-46f4-a609-27fe2c285220"
        userName="john"
        userSecret="111"
      />
    </div>
  );
}

export default App;
