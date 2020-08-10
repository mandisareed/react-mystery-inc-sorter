import React from "react";


class SearchButton extends React.Component {
    state = {
        search: ""
    };


    render () {
         return (
      <div>
        <form className="form">
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search by Color"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );}
   
  }

  export default SearchButton;