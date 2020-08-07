import React from "react";
import Company from "./components/Company";
import members from "./members.json";

class App extends React.Component {
  state = {
    members,
  };

  render() {
    return (
      <div>
        {this.state.members.map((character) => (
          <Company
            id={character.id}
            key={character.id}
            name={character.name}
            nickname={character.nickname}
            image={character.image}
            snack={character.snack}
            color={character.color}
            email={character.email}
          />
        ))}
      </div>
    );
  }
}

// function App() {
//   return <Company />
// }

export default App;
