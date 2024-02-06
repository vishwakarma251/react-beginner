import "./App.css";
// import Hello from "./components/HelloFunctionalComponent";
// import Message from "./components/MessageClassComponent";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import Resume from "./components/ResumeDestructuringClassBasedComponent";
import EventFunctionalComponent from "./components/EventInFunctionalComponent";
import ClassEvent from "./components/EventInClassComponent";
function App() {
  return (
    <div className="App">
      {/* <h1>Hello React</h1> */}
      {/* <Hello /> */}
      {/* <Message messageCode="10" messageContent="This is a message from props" /> */}
      {/* <Profile name="Ram" lastName="Vishwakarma">
        <h3>This is a Profile of a Person</h3>
      </Profile> */}
      <Counter></Counter>
      {/* <Resume name="Ram Vishwakarma"></Resume> */}
      {/* <EventFunctionalComponent></EventFunctionalComponent> */}
      {/* <ClassEvent></ClassEvent> */}
    </div>
  );
}

export default App;
