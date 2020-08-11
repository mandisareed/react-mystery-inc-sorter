import React from "react";
//import the array of characters
import members from "../members.json";

// create a class to set the state of the order, to utilize 'this.state.order'
// this could also be function, with props passed to it instead!
class Table extends React.Component {
  state = {
    order: "ascending"
  };
  
  // create a function that sorts the data in the members array by ID
  // this acts like a toggle, in that it checks to see if the data is
  // first in ascending order, if it's false (in descending order) - then change it to ascending
  sortByID = () => {
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending",
    });
  };

  // Filtering by one property:
  // create a variable to hold the members array of data
  // back in App.js, we're passing the prop of search to the Table component,
  // and calling on it here by 'this.props.search' to get the value of the search input
  // if the search input is empty, then the original members array will be displayed
  // if the search criteria matches a value from the color property of the members array,
  // then the row(s) containing those matching color values will be displayed
  render() {
    let char = members;
    if (this.props.search === "") {
      char = members;
    } 
    else {
      char = members.filter((c) => {
        console.log(this.props.search);
        return c.color.includes(this.props.search);
      });
    }

    // Sorting by ID
    const sortedIDs = char.sort((a, b) => {
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

    console.log(this.state.members);

    return (
    <div>
           <table className="table">
           <thead className="thead-dark">
    <tr>
      {/* by clicking on the Column Header ID, users can sort the table */}
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