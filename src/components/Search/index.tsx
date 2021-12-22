import TextField from '@material-ui/core/TextField';

// import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <form noValidate autoComplete='off'>
      {/* <SearchIcon /> */}
      <TextField id='standard-basic' placeholder='Search Github username' />
    </form>
  );
};

export default Search;
