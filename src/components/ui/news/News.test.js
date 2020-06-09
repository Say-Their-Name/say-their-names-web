import React from 'react';
import { render } from '@testing-library/react';
import News from './News';

describe('<News />', () => {
  test('renders News', () => {
    const link = 'https://www.google.com';
    const { getByText } = render(<News news={{ url: link }} />);

    expect(getByText('google.com'));
  });
  test('renders nothing on empty url', () => {
    const { queryByText } = render(<News news={{}} />);

    expect(queryByText('google.com')).not.toBeInTheDocument();
  });
});
