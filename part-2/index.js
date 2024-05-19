function Tweet({ username, user, date, message }) {
  return (
    <div className="Tweet">
      <h3>{username}</h3>
      <div>
        from: {user} @ {date}
      </div>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Tweet
        username="user1"
        user="user1"
        date="1/1/1111"
        message="I'm first"
      />
      <Tweet
        username="user2"
        user="user2"
        date="2/2/2222"
        message="I'm second"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
