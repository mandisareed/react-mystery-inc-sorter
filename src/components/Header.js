import React from "react";

function Header() {
    return (
    <div>
           <h1>Meet the Members of Mystery Inc.</h1>
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
  </table>
    </div>)
    
}

export default Header;