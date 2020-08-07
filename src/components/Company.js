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
        {/* <h1>Meet the Members of Mystery Inc.</h1> */}
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Nickname</th>
      <th scope="col">Favorite Snack</th>
      <th scope="col">Power Color</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
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
    <tr>
      <th scope="row">2</th>
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