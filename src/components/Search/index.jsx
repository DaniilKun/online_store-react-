import React from 'react';
import debounce from 'lodash.debounce';

import img from '../../assets/img/clear.png';
import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

function Search() {
  const dispatch = useDispatch( )
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const onClickClear = () => {
dispatch(setSearchValue(''))
    setValue('')
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 350),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.block}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {value && <img onClick={() => onClickClear('')} className={styles.clear} src={img} alt="" />}
    </div>
  );
}

export default Search;
