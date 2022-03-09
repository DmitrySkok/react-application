import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const textInputValue = TextInput.value;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(textInputValue);
    dispatch ({type: 'UPDATE_SEARCHSTRING', payload: {searchString}});
  };

  return (
      <form className= {styles.searchForm} onSubmit= {handleSubmit}>
          <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;