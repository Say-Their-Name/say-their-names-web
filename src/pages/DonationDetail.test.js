import React from 'react';
import { render, wait } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import DonationDetail from './DonationDetail';

jest.mock('axios');

describe('<DonationDetail />', () => {
  test('renders DonationDetail on successful response', async () => {
    const mockData = {
      data: {
        data: {
          banner_img_url: 'https://www.google.com',
          description: 'Donate Firstname Lastname by donating here',
          hash_tags: [
            {
              tag: '#donatetoFirstname-Lastname',
              link: 'https://www.google.com'
            }
          ],
          id: 1,
          identifier: 'donate-to-firstname-lastname',
          link: 'https://www.google.com',
          outcome: null,
          outcome_img_url: 'https://www.google.com',
          person: {
            age: 1,
            biography: null,
            city: 'City',
            country: 'Country',
            date_of_incident: 'YYYY-MM-DD',
            full_name: 'Firstname Lastname',
            id: 1,
            identifier: 'firstname-lastname',
            images: [
              { id: 1, person_id: 1, image_url: 'https://www.google.com' }
            ],
            media: [
              { id: 1, person_id: 1, image_url: 'https://www.google.com' }
            ],
            number_of_children: null,
            outcome: null,
            sharable_links: {
              base: 'https://www.google.com',
              facebook: 'https://www.google.com',
              twitter: 'https://www.google.com',
              whatsapp: 'https://www.google.com'
            },
            their_story: 'Their story'
          },
          sharable_links: {
            base: 'https://www.google.com',
            facebook: 'https://www.google.com',
            twitter: 'https://www.google.com',
            whatsapp: 'https://www.google.com'
          },
          title: 'Donate to Firstname Lastname'
        }
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    const history = createMemoryHistory();

    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <DonationDetail match={{ params: { id: '1' } }} />
      </Router>
    );

    /**
     * BackNavigation already tested
     * ActionDetailsHeader already tested
     * ActionDetailsContent already tested
     */
    expect(getByLabelText('audio-loading'));
    await wait(() => expect(getByText('BACK TO DONATIONS')));
  });

  test('renders DonationDetail on failed response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')));
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <DonationDetail match={{ params: { id: '1' } }} />
      </Router>
    );

    await wait(() => expect(getByText('Oops!!! Something went wrong')));
    await wait(() => expect(getByText('Unable to load donation detail')));
  });
});
