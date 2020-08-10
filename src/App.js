import React from "react";
// import Company from "./components/Company";
import Header from "./components/Header";
import members from "./members.json";

class App extends React.Component {
  state = {
    members,
  };

  render() {
    return (
      <div>
        <Header />
        {/* {this.state.members.map((character) => ( */}
          {/* <Company
            // id={character.id}
            // key={character.id}
            // name={character.name}
            // nickname={character.nickname}
            // image={character.image}
            // snack={character.snack}
            // color={character.color}
            // email={character.email}
          /> */}
        {/* ))} */}
      </div>
    );
  }
}

export default App;
