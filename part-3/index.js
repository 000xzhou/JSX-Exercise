function Person({ name, age, hobbies }) {
  return (
    <div className="Person">
      <p>Learn some information about this person</p>
      <h2>{name.length > 8 ? name.substring(0, 6) + "..." : name}</h2>
      <h3>{age > 18 ? "please go vote!" : "you must be 18"}</h3>
      <ul>
        {hobbies.map((hob) => (
          <li>{hob}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Person name="user1" age="17" hobbies={["one", "two", "three"]} />
      <Person name="Jonathan" age="19" hobbies={["nine", "eight", "seven"]} />
      <Person
        name="Jonathananana"
        age="99"
        hobbies={["one", "two", "three", "nine", "eight", "seven"]}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
