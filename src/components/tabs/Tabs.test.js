import React from 'react';
import { render } from '@testing-library/react';

import Tabs from './Tabs';

describe('<Tabs />', () => {
  const locations = ['tab 1', 'tab 2'];

  test('renders Tabs', () => {
    const { getByText } = render(<Tabs locations={locations} currentTab={0} setState={jest.fn()} />);

    expect(getByText('tab 1'));
  });
});
