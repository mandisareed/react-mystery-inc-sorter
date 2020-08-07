import React from "react";


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
function Company(props) {
return (
    <div>   
      <table className="table">
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{props.image}</td>
      <td>{props.name}</td>
      <td>{props.nickname}</td>
      <td>{props.snack}</td>
      <td>{props.color}</td>
      <td>{props.email}</td>
    </tr>    
  </tbody>
</table>

    </div>
)
}

export default Company;