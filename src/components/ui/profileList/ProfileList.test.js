import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ProfileList from './ProfileList';

describe('<ProfileList />', () => {
  test('renders ProfileList', () => {
    const history = createMemoryHistory();
    const { getByText, getByAltText } = render(
      <Router history={history}>
        <ProfileList
          profiles={[
            {
              id: 1,
              images: [{ image_url: 'image_url' }],
              identifier: 'identifier',
              full_name: 'full_name',
              date_of_incident: 'date_of_incident'
            }
          ]}
          currentPage={1}
        />
      </Router>
    );

    expect(getByAltText('full_name'));
    expect(getByText('full_name'));
    expect(getByText('date_of_incident'));
  });
  test('renders not found when no profiles provided', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <ProfileList profiles={[]} currentPage={1} />
      </Router>
    );

    expect(getByText('No profiles found'));
  });
});
