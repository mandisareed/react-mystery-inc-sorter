import React from "react";


// the SearchInput component takes in 2 params: onChange and value
// these are wrapped in curly braces because of object destructuring!
// from App.js, these properties are turned into objects.
// instead of passing onChange and value as params WITHOUT curly braces and thus needing to use 'props.onChange' + 'props.value',
// the code is cleaner, and we can simply pass these values as 'onChange' and 'value' (lines 23 + 25)
function SearchInput ({onChange, value}) {
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
  }

export default SearchInput;
