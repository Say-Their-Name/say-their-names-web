import React from 'react';
import { render, wait } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import PetitionDetail from './PetitionDetail';

jest.mock('axios');

describe('<PetitionDetail />', () => {
  test('renders PetitionDetail on successful response', async () => {
    const mockData = {
      data: {
        data: {
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
            their_story: 'Their Story',
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
          type: { id: 1, type: 'Victims' },
          hash_tags: [
            {
              tag: '#petitionforFirstnameLastname',
              link: 'https://www.google.com'
            }
          ]
        }
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    const history = createMemoryHistory();

    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <PetitionDetail match={{ params: { id: '1' } }} />
      </Router>
    );

    /**
     * BackNavigation already tested
     * ActionDetailsHeader already tested
     * ActionDetailsContent already tested
     */
    expect(getByLabelText('audio-loading'));
    await wait(() => expect(getByText('BACK TO PETITIONS')));
  });

  test('renders PetitionDetail on failed response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')));
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <PetitionDetail match={{ params: { id: '1' } }} />
      </Router>
    );

    await wait(() => expect(getByText('Oops!!! Something went wrong')));
    await wait(() => expect(getByText('Unable to load petition detail')));
  });
});
