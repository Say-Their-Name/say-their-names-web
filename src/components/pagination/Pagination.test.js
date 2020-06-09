import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  test('renders Pagination', () => {
    const last_page = 3;

    const { getByText } = render(
      <Pagination
        paginationData={{ last_page }}
        currentPage={0}
        updateCurrentPage={jest.fn()}
      />
    );

    expect(getByText('<'));
    expect(getByText('1'));
    expect(getByText('2'));
    expect(getByText('3'));
    expect(getByText('>'));
  });
});
