import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { StyledPrivacyPolicy, StyledPrivacyPolicyContainer } from './style';

const PrivacyPolicy = () => (
  <Container>
    <StyledPrivacyPolicy>
      <StyledPrivacyPolicyContainer>
        <h2> PRIVACY POLICY FOR SAY THEIR NAMES</h2>
        <p>
          At Say Their Names, accessible from
          {' '}
          <Link to="/"> saytheirnames.io</Link>
          , one of our main priorities is
          the privacy of our visitors. This Privacy Policy document contains
          types of information that are collected and recorded by Say Their Names
          and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website and mobile apps with regards to the
          information that they shared and/or collect in Say Their Names. This
          policy is not applicable to any information collected offline or via
          channels other than this website and our mobile apps.
        </p>
      </StyledPrivacyPolicyContainer>
      <StyledPrivacyPolicyContainer>
        <h2>Consent </h2>
        <p>
          By using our website or mobile app, you hereby consent to our Privacy
          Policy and agree to its terms.
        </p>
      </StyledPrivacyPolicyContainer>

      <StyledPrivacyPolicyContainer>
        <h2>How we use your information </h2>
        <p>We use the information we collect in various ways, including to:</p>

        <ul>
          <li>Provide, operate, and maintain our website and mobile apps</li>
          <li>Improve, personalize, and expand our website and mobile apps</li>
          <li>
            Understand and analyze how you use our website and mobile apps
          </li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website or mobile
            apps, and for marketing and promotional purposes
          </li>
          <li>Send you emails</li>
        </ul>

        <h2>Log Files</h2>

        <p>
          Say Their Names follows a standard procedure of using log files. These
          files log visitors when they visit websites or mobile apps. All
          hosting companies do this and a part of hosting services&apos;
          analytics. The information collected by log files include internet
          protocol (IP) addresses, browser type, Internet Service Provider
          (ISP), date and time stamp, referring/exit pages, and possibly the
          number of clicks. These are not linked to any information that is
          personally identifiable. The purpose of the information is for
          analyzing trends, administering the site, tracking users&apos;
          movement on the website/mobile apps, and gathering demographic
          information.
        </p>
      </StyledPrivacyPolicyContainer>

      <StyledPrivacyPolicyContainer>
        <h2>Advertising Partners Privacy Policies</h2>
        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Say Their Names.
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Say Their Names, which are
          sent directly to users&apos; browser. They automatically receive your
          IP address when this occurs. These technologies are used to measure
          the effectiveness of their advertising campaigns and/or to personalize
          the advertising content that you see on websites that you visit.
        </p>

        <p>
          Note that Say Their Names has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>
      </StyledPrivacyPolicyContainer>

      <StyledPrivacyPolicyContainer>
        <h2>Third Party Privacy Policies</h2>

        <p>
          Say Their Names&apos;s Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options.
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers&apos;
          respective websites.
        </p>
      </StyledPrivacyPolicyContainer>

      <StyledPrivacyPolicyContainer>
        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

        <p>
          Under the CCPA, among other rights, California consumers have the
          right to:
        </p>
        <p>
          Request that a business that collects a consumer&apos;s personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </p>
        <p>
          Request that a business that sells a consumer&apos;s personal data,
          not sell the consumer&apos;s personal data.
        </p>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us at
          {' '}
          <a href="mailto: developers@saytheirnames.io">
            developers@saytheirnames.io
          </a>
          .
        </p>
      </StyledPrivacyPolicyContainer>

      <StyledPrivacyPolicyContainer>
        <h2>GDPR Data Protection Rights</h2>

        <p>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </p>
        <p>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </p>
        <p>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </p>
        <p>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </p>
        <p>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </p>
        <p>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </p>
        <p>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </p>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>
      </StyledPrivacyPolicyContainer>

      <StyledPrivacyPolicyContainer>
        <h2>Children&apos;s Information</h2>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          Say Their Names does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
      </StyledPrivacyPolicyContainer>
    </StyledPrivacyPolicy>
  </Container>
);
export default PrivacyPolicy;
