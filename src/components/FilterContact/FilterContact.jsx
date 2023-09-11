import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onInputChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilter(value));
  };
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" value={value} onChange={onInputChange} />
    </>
  );
};
