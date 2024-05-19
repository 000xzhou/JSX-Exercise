function FirstComponent() {
  return (
    <div className="FirstComponent">
      <h1>My very first component</h1>
    </div>
  );
}
function NamedComponent(props) {
  return (
    <div className="NamedComponent">
      <p>My name is {props.name}</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <FirstComponent />
      <NamedComponent name={"Wow"} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
