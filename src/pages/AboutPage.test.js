import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  test('renders AboutPage', () => {
    const { getByText, getByAltText, queryAllByRole } = render(<AboutPage />);

    expect(getByAltText('Black Lives Matter'));
    expect(getByText('About this project'));
    expect(getByText('History on the Say Their Names Movement'));
    expect(getByText('Request an Edit or removal'));
    expect(getByText('Twitter.'));
    expect(getByText('DID WE MISS SOMEONE?'));
    expect(getByText('Request to Add a Name'));
    expect(getByText('How do i get involved as a designer ?'));
    expect(getByText('JOIN OUR SLACK CHANNELS'));
    expect(getByText('How do i get involved as a developer ?'));
    expect(getByText('JOIN OUR REPO'));
    expect(getByText('Join us on Twitter'));
    expect(getByText('FOLLOW US'));

    expect(queryAllByRole('link')[0]).toHaveAttribute(
      'href',
      'https://twitter.com/SayTheirName_io'
    );
    expect(queryAllByRole('link')[1]).toHaveAttribute(
      'href',
      'https://twitter.com/SayTheirName_io'
    );
    expect(queryAllByRole('link')[2]).toHaveAttribute(
      'href',
      'https://airtable.com/shr6Da28410B2Muy3'
    );
    expect(queryAllByRole('link')[3]).toHaveAttribute(
      'href',
      'https://t.co/JvU3sgfoFu'
    );
    expect(queryAllByRole('link')[4]).toHaveAttribute(
      'href',
      'https://github.com/Say-Their-Name'
    );
    expect(queryAllByRole('link')[5]).toHaveAttribute(
      'href',
      'https://twitter.com/SayTheirName_io'
    );
  });
});
