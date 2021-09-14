import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = () => {
  return (
    <form noValidate autoComplete='off'>
      <TextField id='standard-basic' placeholder='Search Github username' />
    </form>
  );
};

export default Search;
