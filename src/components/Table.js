import React from "react";
import members from "../members.json";
// my API key MKGY-XP0C-SVFS-5YKX

class Table extends React.Component {
  state = {
    members,
    order: "ascending"
  };

  sortByID = () => {
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending",
    });
  };

  sortByName = () => {
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending",
    });
  };

  render() {

    const sortedIDs = members.sort((a, b) => {
      if (a.id === b.id) {
        return 0;
      }
      if (this.state.order === "ascending") {
        if (a.id < b.id) {
          return -1;
        }
        return 1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return -1;
    });


    return (
    <div>
           <table className="table">
           <thead className="thead-dark">
    <tr>
      <th scope="col" onClick={this.sortByID} >#</th>
      <th scope="col">Name</th>
      <th scope="col">Nickname</th>
      <th scope="col">Favorite Snack</th>
      <th scope="col">Power Color</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  

  <tbody>
    {sortedIDs.map((charID) => (
    <tr itemScope="row" className="main" key={charID.id}>
      
      <td>{charID.id}</td>
      <td>{charID.name}</td>
      <td>{charID.nickname}</td>
      <td>{charID.snack}</td>
      <td>{charID.color}</td>
      <td>{charID.email}</td> 
    </tr> 
    ))}
      
  </tbody>
  </table>
    </div>)}
  
  
    
}

export default Table;