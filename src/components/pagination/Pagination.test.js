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
  test('first three and last three pages appear when there are more than 6 pages and user is at the start', () => {
    const last_page = 20;

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
    expect(getByText('...'));
    expect(getByText('18'));
    expect(getByText('19'));
    expect(getByText('20'));
    expect(getByText('>'));
  });
  test('first three, middle three, and last three pages appear when there are more than 6 pages and user is in the middle', () => {
    const last_page = 20;

    const { getByText } = render(
      <Pagination
        paginationData={{ last_page }}
        currentPage={10}
        updateCurrentPage={jest.fn()}
      />
    );

    expect(getByText('<'));
    expect(getByText('1'));
    expect(getByText('2'));
    expect(getByText('3'));

    expect(getByText('9'));
    expect(getByText('10'));
    expect(getByText('11'));
    
    expect(getByText('18'));
    expect(getByText('19'));
    expect(getByText('20'));
    expect(getByText('>'));
  });
});
