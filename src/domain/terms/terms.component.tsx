import { ListItem, Typography } from '@mui/material';
import { useDeviceDetect } from 'use-device-detect';

import { HeaderAndFooterLayout, LoginModalContent, Modal } from '@ui';

import { useModal, useTranslation } from '@utils';

import { translationStrings } from './terms.defaults';
import S from './terms.styles';

export const Terms = (): JSX.Element => {
  const {
    hideModal: hideLoginModal,
    open: isLoginModalOpen,
    showModal: showLoginModal,
  } = useModal();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const headingVariant = deviceData.isSmallerThanXS ? 'h5' : 'h4';
  const subheadingVariant = deviceData.isSmallerThanXS ? 'h6' : 'h5';
  const smallTextVariant = deviceData.isSmallerThanXS ? 'body2' : 'body1';

  return (
    <HeaderAndFooterLayout openLoginModal={showLoginModal}>
      <S.StyledWrapper>
        <Modal
          open={isLoginModalOpen}
          title={translations.componentHomeModalGetStartedHeader}
          onClose={hideLoginModal}
        >
          <LoginModalContent />
        </Modal>
        <S.StyledContentWrapper>
          <Typography fontWeight={900} variant={deviceData.isSmallerThanXS ? 'h4' : 'h3'}>
            Terms & Conditions
          </Typography>
          <Typography variant={smallTextVariant}>Last updated: Aug 22, 2022</Typography>
          <Typography variant={smallTextVariant}>
            Please read these terms and conditions carefully before using Our Service.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Interpretation and Definitions
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Interpretation
          </Typography>
          <Typography variant={smallTextVariant}>
            The words of which the initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same meaning regardless
            of whether they appear in singular or in plural.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Definitions
          </Typography>
          <Typography variant={smallTextVariant}>
            For the purposes of these Terms and Conditions:
          </Typography>
          <S.StyledFullWidthList>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Application</strong> - means the software program provided by the Company
                downloaded by You on any electronic device, named Tinvesta,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Application Store</strong> - means the digital distribution service
                operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play
                Store) in which the Application has been downloaded,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Affiliate</strong> - means an entity that controls, is controlled by or is
                under common control with a party, where &quot;control&quot; means ownership of 50%
                or more of the shares, equity interest or other securities entitled to vote for
                election of directors or other managing authority,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Account</strong> - means a unique account created for You to access our
                Service or parts of our Service,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Country</strong> - refers to: Poland,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Company</strong> - (referred to as either &quot;the Company&quot;,
                &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to
                Tinvesta,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Content</strong> - refers to content such as text, images, or other
                information that can be posted, uploaded, linked to or otherwise made available by
                You, regardless of the form of that content,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Device</strong> - means any device that can access the Service such as a
                computer, a cellphone or a digital tablet,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Feedback</strong> - means feedback, innovations or suggestions sent by You
                regarding the attributes, performance or features of our Service,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Service</strong> - refers to the Application or the Website or both,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Subscriptions</strong> - refer to the services or access to the Service
                offered on a subscription basis by the Company to You,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Terms and Conditions</strong> - (also referred as &quot;Terms&quot;) mean
                these Terms and Conditions that form the entire agreement between You and the
                Company regarding the use of the Service,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Third-party Social Media Service</strong> - means any services or content
                (including data, information, products or services) provided by a third-party that
                may be displayed, included or made available by the Service,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>Website</strong> - refers to Tinvesta, accessible from{' '}
                <S.StyledLink
                  href="https://www.tinvesta.io"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.tinvesta.io
                </S.StyledLink>
                ,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - <strong>You</strong> - means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such individual is accessing or
                using the Service, as applicable,
              </Typography>
            </ListItem>
          </S.StyledFullWidthList>
          <Typography fontWeight={900} variant={headingVariant}>
            Acknowledgment
          </Typography>
          <Typography variant={smallTextVariant}>
            These are the Terms and Conditions governing the use of this Service and the agreement
            that operates between You and the Company. These Terms and Conditions set out the rights
            and obligations of all users regarding the use of the Service.
          </Typography>
          <Typography variant={smallTextVariant}>
            Your access to and use of the Service is conditioned on Your acceptance of and
            compliance with these Terms and Conditions. These Terms and Conditions apply to all
            visitors, users and others who access or use the Service.
          </Typography>
          <Typography variant={smallTextVariant}>
            By accessing or using the Service You agree to be bound by these Terms and Conditions.
            If You disagree with any part of these Terms and Conditions then You may not access the
            Service.
          </Typography>
          <Typography variant={smallTextVariant}>
            You represent that you are over the age of 18. The Company does not permit those under
            18 to use the Service.
          </Typography>
          <Typography variant={smallTextVariant}>
            Your access to and use of the Service is also conditioned on Your acceptance of and
            compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our
            policies and procedures on the collection, use and disclosure of Your personal
            information when You use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy carefully before
            using Our Service.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Subscriptions
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Subscription period
          </Typography>
          <Typography variant={smallTextVariant}>
            The Service or some parts of the Service are available only with a paid Subscription.
            You will be billed in advance on a recurring and periodic basis (such as daily, weekly,
            monthly or annually), depending on the type of Subscription plan you select when
            purchasing the Subscription.
          </Typography>
          <Typography variant={smallTextVariant}>
            At the end of each period, Your Subscription will automatically renew under the exact
            same conditions unless You cancel it or the Company cancels it.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Subscription cancellations
          </Typography>
          <Typography variant={smallTextVariant}>
            You may cancel Your Subscription renewal either through Your Account settings page or by
            contacting the Company. You will not receive a refund for the fees You already paid for
            Your current Subscription period and You will be able to access the Service until the
            end of Your current Subscription period.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Billing
          </Typography>
          <Typography variant={smallTextVariant}>
            You shall provide the Company with accurate and complete billing information including
            full name, address, state, zip code, telephone number, and a valid payment method
            information.
          </Typography>
          <Typography variant={smallTextVariant}>
            Should automatic billing fail to occur for any reason, the Company will issue an
            electronic invoice indicating that you must proceed manually, within a certain deadline
            date, with the full payment corresponding to the billing period as indicated on the
            invoice.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Fee Changes
          </Typography>
          <Typography variant={smallTextVariant}>
            The Company, in its sole discretion and at any time, may modify the Subscription fees.
            Any Subscription fee change will become effective at the end of the then-current
            Subscription period.
          </Typography>
          <Typography variant={smallTextVariant}>
            The Company will provide You with reasonable prior notice of any change in Subscription
            fees to give You an opportunity to terminate Your Subscription before such change
            becomes effective.
          </Typography>
          <Typography variant={smallTextVariant}>
            Your continued use of the Service after the Subscription fee change comes into effect
            constitutes Your agreement to pay the modified Subscription fee amount.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Refunds
          </Typography>
          <Typography variant={smallTextVariant}>
            Except when required by law, paid Subscription fees are non-refundable.
          </Typography>
          <Typography variant={smallTextVariant}>
            Certain refund requests for Subscriptions may be considered by the Company on a
            case-by-case basis and granted at the sole discretion of the Company.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            User Accounts
          </Typography>
          <Typography variant={smallTextVariant}>
            When You create an account with Us, You must provide Us information that is accurate,
            complete, and current at all times. Failure to do so constitutes a breach of the Terms,
            which may result in immediate termination of Your account on Our Service.
          </Typography>
          <Typography variant={smallTextVariant}>
            You are responsible for safeguarding the password that You use to access the Service and
            for any activities or actions under Your password, whether Your password is with Our
            Service or a Third-Party Social Media Service.
          </Typography>
          <Typography variant={smallTextVariant}>
            You agree not to disclose Your password to any third party. You must notify Us
            immediately upon becoming aware of any breach of security or unauthorized use of Your
            account.
          </Typography>
          <Typography variant={smallTextVariant}>
            You may not use as a username the name of another person or entity or that is not
            lawfully available for use, a name or trademark that is subject to any rights of another
            person or entity other than You without appropriate authorization, or a name that is
            otherwise offensive, vulgar or obscene.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Content
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Your Right to Post Content
          </Typography>
          <Typography variant={smallTextVariant}>
            Our Service allows You to post Content. You are responsible for the Content that You
            post to the Service, including its legality, reliability, and appropriateness.
          </Typography>
          <Typography variant={smallTextVariant}>
            By posting Content to the Service, You grant Us the right and license to use, modify,
            publicly perform, publicly display, reproduce, and distribute such Content on and
            through the Service. You retain any and all of Your rights to any Content You submit,
            post or display on or through the Service and You are responsible for protecting those
            rights. You agree that this license includes the right for Us to make Your Content
            available to other users of the Service, who may also use Your Content subject to these
            Terms.
          </Typography>
          <Typography variant={smallTextVariant}>
            You represent and warrant that: (i) the Content is Yours (You own it) or You have the
            right to use it and grant Us the rights and license as provided in these Terms, and (ii)
            the posting of Your Content on or through the Service does not violate the privacy
            rights, publicity rights, copyrights, contract rights or any other rights of any person.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Content Restrictions
          </Typography>
          <Typography variant={smallTextVariant}>
            The Company is not responsible for the content of the Service&apos;s users. You
            expressly understand and agree that You are solely responsible for the Content and for
            all activity that occurs under your account, whether done so by You or any third person
            using Your account.
          </Typography>
          <Typography variant={smallTextVariant}>
            You may not transmit any Content that is unlawful, offensive, upsetting, intended to
            disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples
            of such objectionable Content include, but are not limited to, the following:
          </Typography>
          <S.StyledFullWidthList>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Unlawful or promoting unlawful activity,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Defamatory, discriminatory, or mean-spirited content, including references or
                commentary about religion, race, sexual orientation, gender, national/ethnic origin,
                or other targeted groups,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Spam, machine – or randomly – generated, constituting unauthorized or unsolicited
                advertising, chain letters, any other form of unauthorized solicitation, or any form
                of lottery or gambling,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Containing or installing any viruses, worms, malware, trojan horses, or other
                content that is designed or intended to disrupt, damage, or limit the functioning of
                any software, hardware or telecommunications equipment or to damage or obtain
                unauthorized access to any data or other information of a third person,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Infringing on any proprietary rights of any party, including patent, trademark,
                trade secret, copyright, right of publicity or other rights,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Impersonating any person or entity including the Company and its employees or
                representatives,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Violating the privacy of any third person,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>- False information and features,</Typography>
            </ListItem>
          </S.StyledFullWidthList>
          <Typography variant={smallTextVariant}>
            The Company reserves the right, but not the obligation, to, in its sole discretion,
            determine whether or not any Content is appropriate and complies with this Terms, refuse
            or remove this Content. The Company further reserves the right to make formatting and
            edits and change the manner of any Content. The Company can also limit or revoke the use
            of the Service if You post such objectionable Content. As the Company cannot control all
            content posted by users and/or third parties on the Service, you agree to use the
            Service at your own risk. You understand that by using the Service You may be exposed to
            content that You may find offensive, indecent, incorrect or objectionable, and You agree
            that under no circumstances will the Company be liable in any way for any content,
            including any errors or omissions in any content, or any loss or damage of any kind
            incurred as a result of your use of any content.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Content Backups
          </Typography>
          <Typography variant={smallTextVariant}>
            Although regular backups of Content are performed, the Company does not guarantee there
            will be no loss or corruption of data.
          </Typography>
          <Typography variant={smallTextVariant}>
            Corrupt or invalid backup points may be caused by, without limitation, Content that is
            corrupted prior to being backed up or that changes during the time a backup is
            performed.
          </Typography>
          <Typography variant={smallTextVariant}>
            The Company will provide support and attempt to troubleshoot any known or discovered
            issues that may affect the backups of Content. But You acknowledge that the Company has
            no liability related to the integrity of Content or the failure to successfully restore
            Content to a usable state.
          </Typography>
          <Typography variant={smallTextVariant}>
            You agree to maintain a complete and accurate copy of any Content in a location
            independent of the Service.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Copyright Policy
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Intellectual Property Infringement
          </Typography>
          <Typography variant={smallTextVariant}>
            We respect the intellectual property rights of others. It is Our policy to respond to
            any claim that Content posted on the Service infringes a copyright or other intellectual
            property infringement of any person.
          </Typography>
          <Typography variant={smallTextVariant}>
            If You are a copyright owner, or authorized on behalf of one, and You believe that the
            copyrighted work has been copied in a way that constitutes copyright infringement that
            is taking place through the Service, You must submit Your notice in writing to the
            attention of our copyright agent via email at tinvesta.contact@gmail.com and include in
            Your notice a detailed description of the alleged infringement.
          </Typography>
          <Typography variant={smallTextVariant}>
            You may be held accountable for damages (including costs and attorneys&apos; fees) for
            misrepresenting that any Content is infringing Your copyright.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            DMCA Notice and DMCA Procedure for Copyright Infringement Claims
          </Typography>
          <Typography variant={smallTextVariant}>
            You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by
            providing our Copyright Agent with the following information in writing (see 17 U.S.C
            512(c)(3) for further detail):
          </Typography>
          <S.StyledFullWidthList>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - An electronic or physical signature of the person authorized to act on behalf of
                the owner of the copyright&apos;s interest,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - A description of the copyrighted work that You claim has been infringed, including
                the URL (i.e., web page address) of the location where the copyrighted work exists
                or a copy of the copyrighted work,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Identification of the URL or other specific location on the Service where the
                material that You claim is infringing is located,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - Your address, telephone number, and email address,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - A statement by You that You have a good faith belief that the disputed use is not
                authorized by the copyright owner, its agent, or the law,
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - A statement by You, made under penalty of perjury, that the above information in
                Your notice is accurate and that You are the copyright owner or authorized to act on
                the copyright owner&apos;s behalf,
              </Typography>
            </ListItem>
          </S.StyledFullWidthList>
          <Typography variant={smallTextVariant}>
            You can contact our copyright agent via email at tinvesta.contact@gmail.com. Upon
            receipt of a notification, the Company will take whatever action, in its sole
            discretion, it deems appropriate, including removal of the challenged content from the
            Service.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Your Feedback to Us
          </Typography>
          <Typography variant={smallTextVariant}>
            You assign all rights, title and interest in any Feedback You provide the Company. If
            for any reason such assignment is ineffective, You agree to grant the Company a
            non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use,
            reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without
            restriction.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Links to Other Websites
          </Typography>
          <Typography variant={smallTextVariant}>
            Our Service may contain links to third-party web sites or services that are not owned or
            controlled by the Company.
          </Typography>
          <Typography variant={smallTextVariant}>
            The Company has no control over, and assumes no responsibility for, the content, privacy
            policies, or practices of any third party web sites or services. You further acknowledge
            and agree that the Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in connection with the use
            of or reliance on any such content, goods or services available on or through any such
            web sites or services.
          </Typography>
          <Typography variant={smallTextVariant}>
            We strongly advise You to read the terms and conditions and privacy policies of any
            third-party web sites or services that You visit.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Termination
          </Typography>
          <Typography variant={smallTextVariant}>
            We may terminate or suspend Your Account immediately, without prior notice or liability,
            for any reason whatsoever, including without limitation if You breach these Terms and
            Conditions.
          </Typography>
          <Typography variant={smallTextVariant}>
            Upon termination, Your right to use the Service will cease immediately. If You wish to
            terminate Your Account, You may simply discontinue using the Service.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Limitation of Liability
          </Typography>
          <Typography variant={smallTextVariant}>
            Notwithstanding any damages that You might incur, the entire liability of the Company
            and any of its suppliers under any provision of this Terms and Your exclusive remedy for
            all of the foregoing shall be limited to the amount actually paid by You through the
            Service or 100 USD if You haven&apos;t purchased anything through the Service.
          </Typography>
          <Typography variant={smallTextVariant}>
            To the maximum extent permitted by applicable law, in no event shall the Company or its
            suppliers be liable for any special, incidental, indirect, or consequential damages
            whatsoever (including, but not limited to, damages for loss of profits, loss of data or
            other information, for business interruption, for personal injury, loss of privacy
            arising out of or in any way related to the use of or inability to use the Service,
            third-party software and/or third-party hardware used with the Service, or otherwise in
            connection with any provision of this Terms), even if the Company or any supplier has
            been advised of the possibility of such damages and even if the remedy fails of its
            essential purpose.
          </Typography>
          <Typography variant={smallTextVariant}>
            Some states do not allow the exclusion of implied warranties or limitation of liability
            for incidental or consequential damages, which means that some of the above limitations
            may not apply. In these states, each party&apos;s liability will be limited to the
            greatest extent permitted by law.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
          </Typography>
          <Typography variant={smallTextVariant}>
            The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with
            all faults and defects without warranty of any kind. To the maximum extent permitted
            under applicable law, the Company, on its own behalf and on behalf of its Affiliates and
            its and their respective licensors and service providers, expressly disclaims all
            warranties, whether express, implied, statutory or otherwise, with respect to the
            Service, including all implied warranties of merchantability, fitness for a particular
            purpose, title and non-infringement, and warranties that may arise out of course of
            dealing, course of performance, usage or trade practice. Without limitation to the
            foregoing, the Company provides no warranty or undertaking, and makes no representation
            of any kind that the Service will meet Your requirements, achieve any intended results,
            be compatible or work with any other software, applications, systems or services,
            operate without interruption, meet any performance or reliability standards or be error
            free or that any errors or defects can or will be corrected.
          </Typography>
          <Typography variant={smallTextVariant}>
            Without limiting the foregoing, neither the Company nor any of the company&apos;s
            provider makes any representation or warranty of any kind, express or implied: (i) as to
            the operation or availability of the Service, or the information, content, and materials
            or products included thereon; (ii) that the Service will be uninterrupted or error-free;
            (iii) as to the accuracy, reliability, or currency of any information or content
            provided through the Service; or (iv) that the Service, its servers, the content, or
            e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
          </Typography>
          <Typography variant={smallTextVariant}>
            Some jurisdictions do not allow the exclusion of certain types of warranties or
            limitations on applicable statutory rights of a consumer, so some or all of the above
            exclusions and limitations may not apply to You. But in such a case the exclusions and
            limitations set forth in this section shall be applied to the greatest extent
            enforceable under applicable law.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Governing Law
          </Typography>
          <Typography variant={smallTextVariant}>
            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms
            and Your use of the Service. Your use of the Application may also be subject to other
            local, state, national, or international laws.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Disputes Resolution
          </Typography>
          <Typography variant={smallTextVariant}>
            If You have any concern or dispute about the Service, You agree to first try to resolve
            the dispute informally by contacting the Company.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            For European Union (EU) Users
          </Typography>
          <Typography variant={smallTextVariant}>
            If You are a European Union consumer, you will benefit from any mandatory provisions of
            the law of the country in which you are resident in.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            United States Federal Government End Use Provisions
          </Typography>
          <Typography variant={smallTextVariant}>
            If You are a U.S. federal government end user, our Service is a &quot;Commercial
            Item&quot; as that term is defined at 48 C.F.R. §2.101.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            United States Legal Compliance
          </Typography>
          <Typography variant={smallTextVariant}>
            You represent and warrant that (i) You are not located in a country that is subject to
            the United States government embargo, or that has been designated by the United States
            government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on
            any United States government list of prohibited or restricted parties.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Severability and Waiver
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Severability
          </Typography>
          <Typography variant={smallTextVariant}>
            If any provision of these Terms is held to be unenforceable or invalid, such provision
            will be changed and interpreted to accomplish the objectives of such provision to the
            greatest extent possible under applicable law and the remaining provisions will continue
            in full force and effect.
          </Typography>
          <Typography fontWeight={900} variant={subheadingVariant}>
            Waiver
          </Typography>
          <Typography variant={smallTextVariant}>
            Except as provided herein, the failure to exercise a right or to require performance of
            an obligation under these Terms shall not effect a party&apos;s ability to exercise such
            right or require such performance at any time thereafter nor shall the waiver of a
            breach constitute a waiver of any subsequent breach.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Translation Interpretation
          </Typography>
          <Typography variant={smallTextVariant}>
            These Terms and Conditions may have been translated if We have made them available to
            You on our Service. You agree that the original English text shall prevail in the case
            of a dispute.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Changes to These Terms and Conditions
          </Typography>
          <Typography variant={smallTextVariant}>
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any
            time. If a revision is material We will make reasonable efforts to provide at least 30
            days&apos; notice prior to any new terms taking effect. What constitutes a material
            change will be determined at Our sole discretion.
          </Typography>
          <Typography variant={smallTextVariant}>
            By continuing to access or use Our Service after those revisions become effective, You
            agree to be bound by the revised terms. If You do not agree to the new terms, in whole
            or in part, please stop using the website and the Service.
          </Typography>
          <Typography fontWeight={900} variant={headingVariant}>
            Contact Us
          </Typography>
          <Typography variant={smallTextVariant}>
            If you have any questions about these Terms and Conditions, You can contact us:
          </Typography>
          <S.StyledFullWidthList>
            <ListItem>
              <Typography variant={smallTextVariant}>
                - By email: tinvesta.contact@gmail.com,
              </Typography>
            </ListItem>
          </S.StyledFullWidthList>
        </S.StyledContentWrapper>
      </S.StyledWrapper>
    </HeaderAndFooterLayout>
  );
};
