import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import config from '../../utils/config';

import { Form, Container } from './style';

const { apiBaseUrl } = config;

const SearchBar = ({ victims }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isShowError, setIsShowError] = useState(false);
  // use history hooks from react router dom
  const history = useHistory();

  // handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // load profile by name
  const loadProfile = async (name) => {
    const response = await axios.get(`${apiBaseUrl}/people?name=${name}`);
    const data = await response.data.data;
    if (data) {
      return data;
    }
    return false;
  };

  // render suggestions
  const renderSuggestions = (victim) => (
    <option value={victim.full_name} key={victim.full_name} />
  );

  // url separator example : George floyd => george-floyd
  const urlSeparator = (name) => name.toLowerCase().split(' ').join('-');

  // map the result and extract the name
  const mapResult = (result) => {
    let res = '';
    result.forEach((r) => {
      res = r.full_name;
    });
    return urlSeparator(res);
  };

  // only input letter
  const inputLetter = (input) => !!input.match(/^[A-Za-z\s\-/]+$/);

  // display error Message
  const displayErrorMessage = (message) => (
    <h3
      style={{
        color: 'red'
      }}
    >
      {message}
    </h3>
  );
  // /display error message for a certain times
  const displayMessageFor = (message, delay) => {
    setError(message);
    setIsShowError(true);
    setTimeout(() => {
      setIsShowError(false);
    }, delay);
  };

  // search victim
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isInputOnlyLetter = inputLetter(value);
    try {
      if (value === '') return;
      if (isInputOnlyLetter) {
        const res = await loadProfile(value);
        const id = mapResult(res);
        history.push(`/profile/${id}`);
      } else {
        displayMessageFor(
          'numeric is not alllowed,please enter only letter',
          1000
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Search Victims by name....."
          onChange={handleChange}
          list="suggestions"
        />
        {error && isShowError ? displayErrorMessage(error) : ''}

        <i className="fas fa-search search-icon" />

        <datalist id="suggestions">{victims.map(renderSuggestions)}</datalist>
      </Form>
    </Container>
  );
};

SearchBar.propTypes = {
  victims: PropTypes.instanceOf(Array).isRequired
};

export default SearchBar;
