import React from "react";

//TODO
// center the search input box on the page
// get the value of the search input
  //console.log this
class SearchInput extends React.Component {
    state = {
        search: ""
    };


    render () {
      console.log(this.state.search);
         return (
      <div>
        <form className="form">
          <input
            value={this.state.search}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search by Color"
          />
        </form>
      </div>
    );}
   
  }

  export default SearchInput;