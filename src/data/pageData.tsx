import { Link } from '@chakra-ui/react';
import type { ReactElement } from 'react';

export interface Paragraph {
  heading?: ReactElement | string,
  body?: ReactElement | string,
  paragraphs?: Paragraph[]
}

export interface Page {
  path: string;
  title: string;
  description: string;
  paragraphs: Paragraph[];
}

const diagnosync = <span style={{ fontStyle: 'italic' }}>DIAGNOSYNC LIMITED</span>;
const radiologyInterviewPrep = <span style={{ fontStyle: 'italic' }}>Radiology Interview Prep.</span>;
const questionBank = <span style={{ fontStyle: 'italic' }}>Question Bank</span>;

export const pageData: Page[] = [
  {
    path: 'terms-and-conditions',
    title: 'Terms and Conditions',
    description: 'Understand the terms governing your use of Diagnosync. Read our Terms and Conditions for legal, service, and usage details.',
    paragraphs: [
      {
        heading: 'Acceptance of Terms',
        body: <>By accessing and using any of the products, services, or subscription plans operated by, or associated with, {diagnosync} ("we," "us," or "our), including but not limited to {radiologyInterviewPrep} website (collectively, the "Products"), you agree to be bound by these Terms and Conditions (the "Terms"). If you do not agree with any part of these Terms, please refrain from using the Products.</>
      },
      {
        heading: 'Use of the Products',
        body: 'The content provided through the Products is intended for general information and educational purposes only. While we strive to ensure the information is accurate and up to date, we make no warranties, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the Products or the information offered for any purpose.'
      },
      {
        heading: 'User Accounts',
        body: <>Certain features of the Products, such as access to the {radiologyInterviewPrep} {questionBank}, may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. You agree to provide accurate, current, and complete information when registering and to update your details as necessary.</>
      },
      {
        heading: 'Subscription Services',
        body: `The Products may offer subscription-based services granting access to certain features for a specified period (e.g., 3 months). Subscriptions are automatically recurring unless cancelled by you via the link provided on the relevant Website. Payments are processed securely through Stripe, a third-party payment processor. You may refer to the ${<Link variant="underline" href="https://stripe.com/gb/legal/ssa#general-terms">Stripe Services Agreement</Link>} for further clarity.`
      },
      {
        heading: 'Intellectual Property',
        body: <>All content and materials on the Products — including but not limited to text, images, graphics, logos, and software — are the property of {diagnosync} and are protected by United Kingdom and international copyright laws. You may not reproduce, modify, distribute, or create derivative works based on the content without prior written permission.</>
      },
      {
        heading: 'Privacy',
        body: <>Your privacy is important to us. Please refer to our {<Link variant="underline" href="./privacy-notice">Privacy Notice</Link>} for details on how we collect, use, and safeguard your personal data.</>
      },
      {
        heading: 'Limitation of Liability',
        body: <>In no event shall {diagnosync} be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from your use of the Products, services, or subscription plans.</>
      },
      {
        heading: 'Indemnification',
        body: <>You agree to indemnify, defend, and hold harmless {diagnosync} from any claims, liabilities, losses, damages, expenses, or costs (including reasonable legal fees) arising out of your use of the Products, services, or breach of these Terms.</>
      },
      {
        heading: 'Governing Law',
        body: 'These Terms shall be governed by and interpreted in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.'
      },
      {
        heading: 'Changes to the Terms',
        body: 'We reserve the right to modify, amend, or replace these Terms at any time. It is your responsibility to check these Terms periodically for updates. By continuing to use the Products after changes have been made, you acknowledge and agree to be bound by the revised Terms.'
      },
      {
        heading: 'Last Updated',
        body: '16 May 2025'
      }
    ]
  },
  {
    path: 'privacy-notice',
    title: 'Privacy Notice',
    description: 'Discover how Diagnosync handles your personal data. View our Privacy Notice for details on data protection and privacy practices.',
    paragraphs: [
      {
        body: <>This privacy notice tells you what to expect {diagnosync} ("we," "us," or "our") to do with your personal information across our products, including {radiologyInterviewPrep} and any associated services.</>
      },
      {
        heading: 'Contact Details',
        paragraphs: [
          {
            heading: 'Email',
            body: <Link variant="underline" href="mailto:privacy@diagnosync.com?subject=Privacy%Notice">privacy@diagnosync.com</Link>
          }
        ]
      },
      {
        heading: 'What Information We Collect, Use, and Why',
        paragraphs: [
          {
            heading: 'We collect or use the following information to provide services and goods, including delivery',
            paragraphs: [
              {
                body: 'Names and contact details'
              },
              {
                body: 'Account information'
              },
              {
                body: 'Website user information (including user journeys and cookie tracking)'
              }
            ]
          }
        ]
      },
      {
        heading: 'Lawful Bases and Data Protection Rights',
        paragraphs: [
          {
            body: <>Under UK data protection law, we must have a “lawful basis” for collecting and using your personal information. There is a list of possible <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/key-data-protection-terms-you-need-to-know/#lawfulbasis" target="_blank" rel="noopener noreferrer">lawful bases</Link> in the UK GDPR. You can find out more about lawful bases on the ICO’s website.</>,
          },
          {
            body: 'Which lawful basis we rely on may affect your data protection rights which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO’s website:'
          },
          {
            heading: 'We may disclose your personal information if required by law, legal process, or to protect our rights, property, or safety, or that of others.',
            paragraphs: [
              {
                heading: 'Your Right of Access',
                body: <>You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#roa" target="_blank" rel="noopener noreferrer">You can read more about this right here</Link>.</>
              },
              {
                heading: 'Your Right to Rectification',
                body: <>You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtr" target="_blank" rel="noopener noreferrer">You can read more about this right here</Link>.</>
              },
              {
                heading: 'Your Right to Erasure',
                body: <>You have the right to ask us to delete your personal information. <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rte" target="_blank" rel="noopener noreferrer">You can read more about this right here</Link>.</>
              },
              {
                heading: 'Your Right to Restriction of Processing',
                body: <>You have the right to ask us to limit how we can use your personal information. <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtrop" target="_blank" rel="noopener noreferrer">You can read more about this right here</Link>.</>
              },
              {
                heading: 'our Right To Object to Processing',
                body: <>You have the right to object to the processing of your personal data. <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rto" target="_blank" rel="noopener noreferrer">You can read more about this right here</Link>.</>
              },
              {
                heading: 'Your Right to Data Portability',
                body: <>You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtdp" target="_blank" rel="noopener noreferrer">You can read more about this right here</Link>.</>
              },
              {
                heading: 'Your Right To Withdraw Consent',
                body: <>When we use consent as our lawful basis you have the right to withdraw your consent at any time. <Link variant="underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtwc" target="_blank" rel="noopener noreferrer">You can read more about this right here</Link>.</>
              }
            ]
          },
          {
            heading: 'Our Lawful Bases for the Collection and Use of Your Data',
            paragraphs: [
              {
                heading: 'Our lawful bases for collecting or using personal information to provide services and goods are:',
                body: 'Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.'
              }
            ]
          },
        ]
      },
      {
        heading: 'Where We Get Personal Information From',
        body: 'Directly from you'
      },
      {
        heading: 'How Long We Keep Information',
        body: 'We keep your information until you tell use not to (via a formal request, or by deleting an account), or if service using it is wound down.'
      },
      {
        heading: 'Who We Share Information With',
        paragraphs: [
          {
            heading: 'Data Processors',
            paragraphs: [
              {
                heading: 'Stripe',
                body: 'This data processor does the following activities for us: They process payments and handle subscription data.'
              }
            ]
          }
        ]
      },
      {
        heading: 'How To Complain',
        paragraphs: [
          {
            body: 'If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.'
          },
          {
            body: 'If you remain unhappy with how we’ve used your data after raising a complaint with us, you can also complain to the ICO.'
          },
          {
            heading: 'The ICO’s Address',
            paragraphs: [
              {
                heading: 'Postal',
                body: <>Information Commissioner’s Office<br />Wycliffe House<br />Water Lane<br />Wilmslow<br />Cheshire<br />SK9 5AF</>
              },
              {
                heading: 'Helpline Number',
                body: '0303 123 1113'
              },
              {
                heading: 'Website',
                body: <Link variant="underline" href="https://www.ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer">https://www.ico.org.uk/make-a-complaint</Link>
              }
            ]
          }
        ]
      },
      {
        heading: 'Last Updated',
        body: '16 May 2025'
      }
    ]
  }
];