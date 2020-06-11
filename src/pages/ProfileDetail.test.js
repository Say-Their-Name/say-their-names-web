import React from 'react';
import { render, wait } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import ProfileDetail from './ProfileDetail';

jest.mock('axios');

describe('<ProfileDetail />', () => {
  test('renders ProfileDetail on successful response', async () => {
    const mockData = {
      data: {
        data: {
          id: 1,
          full_name: 'Firstname Lastname',
          identifier: 'Firstname-Lastname',
          date_of_incident: 'YYYY-MM-DD',
          number_of_children: null,
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
          donation_links: [
            {
              id: 1,
              identifier: 'donate-to-the-Firstname-Lastname-memorial-fund',
              title: 'Donate to the Firstname Lastname Memorial Fund',
              description:
                "Support the fight for justice for Firstname Lastname by donating to their family's memorial fund.",
              outcome: null,
              link: 'https://www.google.com',
              outcome_img_url: 'https://www.google.com',
              banner_img_url: 'https://www.google.com',
              sharable_links: {
                base: 'https://www.google.com',
                facebook: 'https://www.google.com',
                twitter: 'https://www.google.com',
                whatsapp: 'https://www.google.com'
              }
            }
          ],
          petition_links: [
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
              }
            }
          ],
          media: [
            {
              id: 1,
              person_id: 1,
              image_url: 'https://www.google.com'
            }
          ],
          news: [
            {
              url: 'https://www.google.com'
            },
            {
              url: 'https://www.google.ca'
            },
            {
              url: 'https://www.google.co'
            }
          ],
          hash_tags: [
            {
              tag: '#FirstnameLastname',
              link: 'https://www.google.com'
            },
            {
              tag: '#justiceforFirstnameLastname',
              link: 'https://www.google.ca'
            },
            {
              tag: '#saytheirnames-FirstnameLastname',
              link: 'https://www.google.co'
            }
          ]
        }
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    const history = createMemoryHistory();

    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <ProfileDetail match={{ params: { id: '1' } }} location={{ state: { oldCurrentPage: 1 } }} />
      </Router>
    );

    /**
     * BackNavigation already tested
     * Profile already tested
     * NewsList already tested
     * HashTags already tested
     */
    expect(getByLabelText('audio-loading'));
    await wait(() => expect(getByText('BACK TO VICTIMS')));
  });

  test('renders ProfileDetail on failed response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')));
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <ProfileDetail match={{ params: { id: '1' } }} location={{ state: { oldCurrentPage: 1 } }} />
      </Router>
    );

    await wait(() => expect(getByText('Oops!!! Something went wrong')));
    await wait(() => expect(getByText('Unable to load profile detail')));
  });
});
