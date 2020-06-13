import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import Donations from './Donations';

jest.mock('axios');

describe('<Donations />', () => {
  beforeEach(() => {
    global.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders Donations on successful response', async () => {
    const mockDataDonations = {
      data: {
        data: [
          {
            id: 1,
            identifier: 'donate-to-the-Firstname-Lastname-memorial-fund',
            title: 'Donate to the Firstname Lastname',
            description: 'Description',
            outcome: null,
            link: 'https://www.google.com',
            outcome_img_url: 'https://www.google.com',
            banner_img_url: 'https://www.google.com',
            sharable_links: {
              base: 'https://www.google.com',
              facebook: 'https://www.google.com',
              twitter: 'https://www.google.com',
              whatsapp: 'https://www.google.com'
            },
            person: {
              id: 1,
              full_name: 'Firstname Lastname',
              identifier: 'Firstname-Lastname',
              date_of_incident: 'YYYY-MM-DD',
              number_of_children: 1,
              age: 1,
              city: 'City',
              country: 'Country',
              their_story: 'Their story',
              outcome: null,
              biography: null,
              images: [
                {
                  id: 1,
                  person_id: 1,
                  image_url: 'https://www.google.com'
                }
              ],
              sharable_links: {
                base: 'https://www.google.com',
                facebook: 'https://www.google.ca',
                twitter: 'https://www.google.co',
                whatsapp: 'https://www.google.cm'
              },
              media: [
                {
                  id: 1,
                  person_id: 1,
                  image_url: 'https://www.google.com'
                }
              ]
            },
            type: {
              id: 1,
              type: 'Victims'
            }
          }
        ],
        links: {
          first: 'https://www.google.com',
          last: 'https://www.google.co',
          prev: null,
          next: 'https://www.google.ca'
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 3,
          path: 'https://www.google.com',
          per_page: 12,
          to: 12,
          total: 26
        }
      }
    };

    const mockDataDonationType = {
      data: {
        data: [
          { id: 1, type: 'Victims' },
          { id: 2, type: 'Protesters' },
          { id: 3, type: 'Movement' },
          { id: 4, type: 'Organization' }
        ]
      }
    };

    // mocks fetchDonationType
    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataDonationType));
    // mocks fetchDonations
    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataDonations));

    const history = createMemoryHistory();
    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <Donations match={{ params: { id: '1' } }} />
      </Router>
    );

    /**
     * Tabs already tested
     * Petition already tested
     */
    expect(getByLabelText('audio-loading'));

    await waitForElement(() => getByText('DONATIONS'));
    await waitForElement(() => getByText('Donate to the Firstname Lastname'));
  });

  test('renders No Donations Found on successful response with no Donations', async () => {
    const mockDataDonations = {
      data: {
        data: [],
        links: {
          first: 'https://www.google.com',
          last: 'https://www.google.com',
          prev: null,
          next: 'https://www.google.com'
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 6,
          path: 'https://www.google.com',
          per_page: 12,
          to: 12,
          total: 20
        }
      }
    };

    const mockDataDonationType = {
      data: {
        data: [
          { id: 1, type: 'Victims' },
          { id: 2, type: 'Policy' }
        ]
      }
    };

    // mocks fetchDonationType
    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataDonationType));
    // mocks fetchDonations
    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataDonations));

    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Donations match={{ params: { id: '1' } }} />
      </Router>
    );

    await waitForElement(() => getByText('NO DONATIONS FOUND'));
  });

  test('renders Donations on failed response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')));
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Donations match={{ params: { id: '1' } }} />
      </Router>
    );

    await waitForElement(() => getByText('Oops!!! Something went wrong'));
    await waitForElement(() => getByText('Unable to load donations'));
  });
});
