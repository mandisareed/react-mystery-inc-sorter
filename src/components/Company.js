import React from "react";
import "../styles/Company.css";
import members from "../members.json";


//TO-DO
// utilize bootstrap to create a table containing column titles:
// image (perhaps leave the text field blank)
// name
// favorite snack
// power color
// email

// Step 2:
// Fill in one row w/dummy data
// Create an array of Mystery Inc members
// use the array to populate the rows w/member info
// leave the # coloumn alone for now...
// add placeholder images
class Company extends React.Component {
  state = {
    order: "ascending"
  };

  sortByID = () => {
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending",
    });
  };

 
  
  render () {

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
  <tbody>
    {sortedIDs.map((charID) => (
    <tr itemScope="row" className="main" key={charID.id}>
      <td onClick={this.sortByID}>{charID.id}</td>
      {/* <td>{charID.image}</td> */}
      <td>{charID.name}</td>
      <td>{charID.nickname}</td>
      <td>{charID.snack}</td>
      <td>{charID.color}</td>
      <td>{charID.email}</td> 
    </tr> 
    ))}
      
  </tbody>
</table>

    </div>
)}

}

export default Company;

// my API key MKGY-XP0C-SVFS-5YKX