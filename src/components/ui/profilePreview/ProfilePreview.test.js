import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ProfilePreview from './ProfilePreview';

describe('<ProfilePreview />', () => {
  test('renders ProfilePreview', () => {
    const history = createMemoryHistory();
    const { getByText, getByAltText } = render(
      <Router history={history}>
        <ProfilePreview
          id="1"
          fullName="fullName"
          dateOfIncident="dateOfIncident"
          image={{ image_url: 'image_url' }}
          currentPage={1}
        />
      </Router>
    );

    expect(getByAltText('fullName'));
    expect(getByText('fullName'));
    expect(getByText('dateOfIncident'));
  });
  test('renders not found when no profiles provided', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <ProfilePreview
          id="1"
          fullName="fullName"
          dateOfIncident="dateOfIncident"
          image={{ image_url: 'image_url' }}
          currentPage={1}
        />
      </Router>
    );

    fireEvent.click(getByText('fullName'));
    expect(history.location.pathname).toBe('/profile/1');
  });
});
