import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton
} from 'react-share';
import {
  ShareStyle,
  ShareSection
} from './styles';

const Share = (props) => {
  const { url, title, socialCopy } = props;
  return (
    <ShareStyle>
      <h3>Share</h3>
      <ShareSection>
        <TwitterShareButton url={url} title={socialCopy}>
          <p>
            <i className="fab fa-twitter" />
            Twitter
          </p>
        </TwitterShareButton>
      </ShareSection>
      <ShareSection>
        <FacebookShareButton url={url} title={socialCopy}>
          <p>
            <i className="fab fa-facebook-square" />
            Facebook
          </p>
        </FacebookShareButton>
      </ShareSection>
      <ShareSection>
        <WhatsappShareButton url={url} title={title}>
          <p>
            <i className="fab fa-whatsapp-square" />
            Whatsapp
          </p>
        </WhatsappShareButton>
      </ShareSection>
    </ShareStyle>
  );
};

Share.defaultProps = {
  url: null,
  title: null,
  socialCopy: null
};

Share.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  socialCopy: PropTypes.string
};

export default Share;
