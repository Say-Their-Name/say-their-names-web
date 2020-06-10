import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import PersonProfile from './PersonProfile';

describe('<PersonProfile />', () => {
  const donation = {
    identifier: 'identifier'
  };
  const info = {
    identifier: 'identifier',
    id: 1,
    images: [{ image_url: 'https://www.google.com' }],
    full_name: 'full name',
    age: 30,
    number_of_children: 2,
    city: 'city',
    their_story: 'sample story',
    outcome: 'sample outcome',
    country: 'country',
    donation_links: ['https://www.google.com']
  };

  test('renders PersonProfile', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <PersonProfile info={info} donation={donation} />
      </Router>
    );

    expect(getByText('FULL NAME'));
    expect(getByText('full name'));
    expect(getByText('AGE'));
    expect(getByText('30'));
    expect(getByText('CHILDREN'));
    expect(getByText('2'));
    expect(getByText('LOCATION'));
    expect(getByText('city, country'));
    expect(getByText('DONATE'));
    expect(getByText('THEIR STORY'));
    expect(getByText('sample story'));
    expect(getByText('Context'));
    expect(getByText('sample outcome'));
  });

  test('renders PersonProfile with correct links', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <PersonProfile info={info} donation={donation} />
      </Router>
    );

    fireEvent.click(getByText('DONATE'));
    expect(history.location.pathname).toBe('/donate/identifier');
  });

  test('renders N/A when num_of_children is 0', () => {
    const history = createMemoryHistory();
    const noChildrenInfo = {
      ...info,
      number_of_children: 0
    };
    const { getByText } = render(
      <Router history={history}>
        <PersonProfile info={noChildrenInfo} donation={donation} />
      </Router>
    );
    expect(getByText('CHILDREN'));
    expect(getByText('N/A'));
  });
});
