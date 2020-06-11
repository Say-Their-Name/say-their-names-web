import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { StyledTermsOfService, StyledTermsOfServiceContainer } from './style';

const TermsOfService = () => (
  <Container>
    <StyledTermsOfService>
      <StyledTermsOfServiceContainer>
        <h2> TERMS OF SERVICE FOR SAY THEIR NAMES</h2>
        <p>
          By accessing the website at
          {' '}
          <Link to="/">saytheirnames.io</Link>
          , you are agreeing to be
          bound by these terms of service, all applicable laws and regulations,
          and agree that you are responsible for compliance with any applicable
          local laws. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site. The materials contained
          in this website are protected by applicable copyright and trademark
          law.
        </p>
      </StyledTermsOfServiceContainer>

      <StyledTermsOfServiceContainer>
        <h2> Use License</h2>
        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Say Their Names&apos; website
            for personal, non-commercial transitory viewing only. This is the
            grant of a license, not a transfer of title, and under this license
            you may not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Say Their Names&apos; website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or &apos;mirror&apos;
                the materials on any other server.
              </li>
            </ol>
          </li>
          <li>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Say Their Names at any
            time. Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </li>
        </ol>
      </StyledTermsOfServiceContainer>

      <StyledTermsOfServiceContainer>
        <h2> Disclaimer</h2>
        <ol type="a">
          <li>
            The materials on Say Their Names&apos; website are provided on an &apos;as is&apos;
            basis. Say Their Names makes no warranties, expressed or implied,
            and hereby disclaims and negates all other warranties including,
            without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </li>
          <li>
            Further, Say Their Names does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </li>
        </ol>
      </StyledTermsOfServiceContainer>

      <StyledTermsOfServiceContainer>
        <h2> Limitations</h2>
        <p>
          In no event shall Say Their Names or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on Say Their Names&apos; website, even if
          Say Their Names or a Say Their Names authorized representative has
          been notified orally or in writing of the possibility of such damage.
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>
      </StyledTermsOfServiceContainer>

      <StyledTermsOfServiceContainer>
        <h2> Accuracy of materials</h2>
        <p>
          The materials appearing on Say Their Names&apos; website could include
          technical, typographical, or photographic errors. Say Their Names does
          not warrant that any of the materials on its website are accurate,
          complete or current. Say Their Names may make changes to the materials
          contained on its website at any time without notice. However Say Their
          Names does not make any commitment to update the materials.
        </p>
      </StyledTermsOfServiceContainer>

      <StyledTermsOfServiceContainer>
        <h2> Links</h2>
        <p>
          Say Their Names has not reviewed all of the sites linked to its
          website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by Say
          Their Names of the site. Use of any such linked website is at the
          user&apos;s own risk.
        </p>
      </StyledTermsOfServiceContainer>

      <StyledTermsOfServiceContainer>
        <h2> Modifications</h2>
        <p>
          Say Their Names may revise these terms of service for its website at
          any time without notice. By using this website you are agreeing to be
          bound by the then current version of these terms of service.
        </p>
      </StyledTermsOfServiceContainer>

      <StyledTermsOfServiceContainer>
        <h2> Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of United States and you irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>
      </StyledTermsOfServiceContainer>
    </StyledTermsOfService>
  </Container>
);

export default TermsOfService;
