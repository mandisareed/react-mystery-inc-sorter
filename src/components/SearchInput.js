import React from "react";

//TODO
// center the search input box on the page
// get the value of the search input
//  console.log this
//filter the results in the table by
// what matches the value of the input box
function SearchInput ({onChange, value}) {
  // state = {
  //   search: "",
  // };

  // handleInputChange = (event) => {
  //   // Getting the value of the input which triggered the change
  //   const { name, value } = event.target;

  //   // Updating the input's state
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // render() {
    console.log({value});
    return (
      <div>
        <form className="form">
          <input
            value={value}
            name="search"
            onChange={onChange}
            type="text"
            placeholder="Search by Color"
          />
        </form>
      </div>
    );
  // }
}

export default SearchInput;
