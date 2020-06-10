import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('<Spinner />', () => {
  test('renders Spinner', () => {
    const { getByLabelText } = render(<Spinner height="100" />);

    expect(getByLabelText('audio-loading'));
  });
});
