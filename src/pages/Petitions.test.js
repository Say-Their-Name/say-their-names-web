import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import Petitions from './Petitions';

jest.mock('axios');

describe('<Petitions />', () => {
  beforeEach(() => {
    global.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders Petitions on successful response', async () => {
    const mockDataPetitions = {
      data: {
        data: [
          {
            id: 1,
            identifier: 'petition-for-Firstname-Lastname',
            title: 'Petition For Firstname Lastname',
            description:
              'Help bring justice to Firstname Lastname by signing this petition',
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
                facebook: 'https://www.google.com',
                twitter: 'https://www.google.com',
                whatsapp: 'https://www.google.com'
              },
              media: [
                {
                  id: 1,
                  person_id: 1,
                  image_url: 'https://www.google.com'
                }
              ]
            },
            type: { id: 1, type: 'Victims' }
          }
        ],
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

    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataPetitions));

    const mockDataPetitionType = {
      data: {
        data: [
          { id: 1, type: 'Victims' },
          { id: 2, type: 'Policy' }
        ]
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataPetitionType));
    const history = createMemoryHistory();

    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <Petitions match={{ params: { id: '1' } }} />
      </Router>
    );

    /**
     * Tabs already tested
     * Petition already tested
     */
    expect(getByLabelText('audio-loading'));

    await waitForElement(() => getByText('PETITIONS'));
    await waitForElement(() => getByText('Petition For Firstname Lastname'));
  });

  test('renders No Petitions Found on successful response with no petitions', async () => {
    const mockDataPetitions = {
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

    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataPetitions));

    const mockDataPetitionType = {
      data: {
        data: [
          { id: 1, type: 'Victims' },
          { id: 2, type: 'Policy' }
        ]
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataPetitionType));
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Petitions match={{ params: { id: '1' } }} />
      </Router>
    );

    await waitForElement(() => getByText('NO PETITIONS FOUND'));
  });

  test('renders Petitions on failed response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')));
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Petitions match={{ params: { id: '1' } }} />
      </Router>
    );

    await waitForElement(() => getByText('Oops!!! Something went wrong'));
    await waitForElement(() => getByText('Unable to load petitions'));
  });
});
