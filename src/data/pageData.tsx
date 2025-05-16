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
    path: 'terms',
    title: 'Terms of Service',
    description: 'Understand the terms governing your use of Diagnosync. Read our Terms of Service for legal, service, and usage details.',
    paragraphs: [
      {
        heading: 'Acceptance of Terms',
        body: <>By accessing and using any of the websites operated by {diagnosync} ("we," "us," or "our), including but not limited to {radiologyInterviewPrep} (collectively, the "Websites"), you agree to be bound by these Terms of Service (the "Terms"). If you do not agree with any part of these Terms, please refrain from using the Websites.</>
      },
      {
        heading: 'Use of the Websites',
        body: 'The content provided through the Websites is intended for general information and educational purposes only. While we strive to ensure the information is accurate and up to date, we make no warranties, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the Websites or the information offered for any purpose.'
      },
      {
        heading: 'User Accounts',
        body: <>Certain features of the Websites, such as access to the {radiologyInterviewPrep} {questionBank}, may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. You agree to provide accurate, current, and complete information when registering and to update your details as necessary.</>
      },
      {
        heading: 'Subscription Services',
        body: `The Websites may offer subscription-based services granting access to certain features for a specified period (e.g., 3 months). Subscriptions are automatically recurring unless cancelled by you via the link provided on the relevant Website. Payments are processed securely through Stripe, a third-party payment processor. You may refer to the ${<Link href="https://stripe.com/gb/legal/ssa#general-terms">Stripe Services Agreement</Link>} for further clarity.`
      },
      {
        heading: 'Intellectual Property',
        body: <>All content and materials on the Websites — including but not limited to text, images, graphics, logos, and software — are the property of {diagnosync} and are protected by United Kingdom and international copyright laws. You may not reproduce, modify, distribute, or create derivative works based on the content without prior written permission.</>
      },
      {
        heading: 'Privacy',
        body: <>Your privacy is important to us. Please refer to our {<Link href="./privacy">Privacy Policy</Link>} for details on how we collect, use, and safeguard your personal data.</>
      },
      {
        heading: 'Limitation of Liability',
        body: <>In no event shall {diagnosync} be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from your use of the Websites, services, or subscription plans.</>
      },
      {
        heading: 'Indemnification',
        body: <>You agree to indemnify, defend, and hold harmless {diagnosync} from any claims, liabilities, losses, damages, expenses, or costs (including reasonable legal fees) arising out of your use of the Websites, services, or breach of these Terms.</>
      },
      {
        heading: 'Governing Law',
        body: 'These Terms shall be governed by and interpreted in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.'
      },
      {
        heading: 'Changes to the Terms',
        body: 'We reserve the right to modify, amend, or replace these Terms at any time. It is your responsibility to check these Terms periodically for updates. By continuing to use the Websites after changes have been made, you acknowledge and agree to be bound by the revised Terms.'
      }
    ]
  },
  {
    path: 'privacy',
    title: 'Privacy Policy',
    description: 'Discover how Diagnosync handles your personal data. View our Privacy Policy for details on data protection and privacy practices.',
    paragraphs: [
      {
        body: 'Effective Date: May 16, 2025'
      },
      {
        body: <>{diagnosync} ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose personal information when you use our websites, including {radiologyInterviewPrep} and any associated services (collectively, the "Websites").</>
      },
      {
        heading: 'Information We Collect',
        paragraphs: [
          {
            heading: 'Personal Information',
            body: 'When you create an account on our Websites, we may collect personal details such as your name, email address, and other contact information you provide.'
          },
          {
            heading: 'Payment Information',
            body: 'If you subscribe to our services, your payment details (e.g. credit card information) are securely collected and processed by our third-party payment processor, Stripe. We do not store your payment information on our servers.'
          },
          {
            heading: 'Usage Data',
            body: 'We may collect information about how you interact with our Websites, including your IP address, browser type, device details, referring and exit pages, and operating system.'
          }
        ]
      },
      {
        heading: 'How We Use Your Information',
        paragraphs: [
          {
            body: 'To provide, manage, and improve our Websites and subscription services.'
          },
          {
            body: 'To send service-related communications, such as account confirmations, subscription details, and payment receipts.',
          },
          {
            body: 'To analyse anonymised and aggregated data for service improvement and operational insights.'
          }
        ]
      },
      {
        heading: 'Information Sharing and Disclosure',
        paragraphs: [
          {
            body: 'We do not sell, trade, or rent your personal information to third parties.',
          },
          {
            body: 'We may share your information with trusted service providers who support us in operating our Websites and services (e.g. hosting providers, payment processors). These providers are obligated to handle your information securely and confidentially.'
          },
          {
            body: 'We may disclose your personal information if required by law, legal process, or to protect our rights, property, or safety, or that of others.'
          }
        ]
      },
      {
        heading: 'Data Security',
        body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is entirely secure.'
      },
      {
        heading: 'Your Rights',
        paragraphs: [
          {
            body: 'You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us at the email address provided below.',
          },
          {
            body: 'You can unsubscribe from our non-essential email communications at any time by clicking the "unsubscribe" link at the bottom of our emails or by contacting us directly.'
          }
        ]
      },
      {
        heading: 'Third-Party Links',
        body: 'Our Websites may contain links to external websites or services. We are not responsible for the privacy practices or content of those third-party sites and encourage you to review their privacy policies separately.'
      },
      {
        heading: 'Children’s Privacy',
        body: 'Our services are not intended for individuals under the age of 16, and we do not knowingly collect personal information from children. If you believe a child under 16 has provided us with personal data, please contact us immediately.'
      },
      {
        heading: 'Changes to This Privacy Policy',
        body: 'We may update this Privacy Policy from time to time. We will post any changes on this page and update the "Effective Date" accordingly. Continued use of our Websites after any changes constitutes your acceptance of the updated policy.'
      },
      {
        heading: 'Contact Us',
        body: <>If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us at {<Link variant="underline" href="mailto:hello@diagnosync.com?subject=Privacy%20Policy">hello@diagnosync.com</Link>}.</>
      }
    ]
  }
];