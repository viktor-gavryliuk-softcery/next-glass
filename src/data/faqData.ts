export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  faqs: FAQItem[];
}

const faq: FAQCategory[] = [
  {
    title: 'Faq',
    faqs: [
      {
        question: 'How can I contact customer support?',
        answer:
          'Our customer support team is available 24/7. You can reach us by email at support@example.com or by phone at +1-123-456-7890. We strive to respond to your inquiries promptly.',
      },
      {
        question: 'Is there a mobile app available?',
        answer:
          'Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store, depending on your device.',
      },
      {
        question: 'Do you offer a free trial?',
        answer:
          'Yes, we offer a 14-day free trial for our services. You can sign up on our website and explore the features without any commitment during the trial period.',
      },
      {
        question: 'How do I cancel my subscription?',
        answer:
          "To cancel your subscription, log in to your account and navigate to the 'Subscription' section. Follow the prompts to cancel, and your subscription will be terminated at the end of the current billing cycle.",
      },
      // Add more General FAQs as needed
    ],
  },
  {
    title: 'Contacts',
    faqs: [
      {
        question: 'How can I update my profile information?',
        answer:
          "To update your profile information, log in to your account and go to the 'Profile' section. Here, you can edit details such as your name, contact information, and profile picture. After making the desired changes, save the updates to reflect the new information on your profile.",
      },
      {
        question: 'Is there a customer support hotline?',
        answer:
          'Yes, we have a customer support hotline available 24/7. You can reach us at +1-800-123-4567 for immediate assistance. Our dedicated support team is ready to help with any questions or issues you may have.',
      },
      {
        question: 'Can I contact support through email?',
        answer:
          'Certainly! You can contact our support team via email at support@example.com. Simply send your inquiries or concerns, and our team will respond as soon as possible. Please provide detailed information to help us assist you more effectively.',
      },
    ],
  },
  {
    title: 'Offers',
    faqs: [
      {
        question: 'How can I avail of the latest marketing promotions?',
        answer:
          "To take advantage of our latest marketing offers and promotions, visit the 'Offers' section on our website. Here, you'll find exclusive deals, discounts, and special campaigns designed to boost your marketing efforts. Keep an eye on our newsletters and social media channels for announcements about upcoming offers.",
      },
      {
        question: 'Are there any discounts for bulk marketing services?',
        answer:
          "Yes, we offer special discounts for bulk marketing services. If you're looking to scale up your marketing campaigns, contact our sales team at sales@example.com to discuss customized packages and discounts based on your specific needs and requirements.",
      },
      {
        question: 'What types of promotional events do you host?',
        answer:
          'We regularly host promotional events such as webinars, workshops, and virtual conferences. These events cover the latest trends in marketing, provide valuable insights, and offer exclusive discounts on our services. Stay tuned to our event calendar for upcoming opportunities to enhance your marketing strategies.',
      },
      {
        question: 'Can I get a free trial for your marketing tools?',
        answer:
          "Yes, we offer a free trial for our marketing tools. Visit the 'Free Trial' page on our website to sign up and explore the features of our tools without any cost. The trial period allows you to experience the benefits and functionalities before making a decision to subscribe to our services.",
      },
    ],
  },
  {
    title: 'Support',
    faqs: [
      {
        question: 'How do I contact customer support?',
        answer:
          "Our customer support team is available 24/7 to assist you. You can reach us via email at support@example.com or by submitting a support ticket through the 'Contact Us' page on our website. For urgent matters, feel free to call our support hotline at +1-800-123-4567.",
      },
      {
        question: 'Is there a knowledge base or FAQ section?',
        answer:
          "Yes, we have a comprehensive knowledge base and FAQ section on our website. You can find answers to common questions, step-by-step guides, and troubleshooting tips. Visit the 'Help Center' to explore the resources and quickly resolve any issues you may encounter.",
      },
      {
        question: 'Do you offer live chat support?',
        answer:
          'Certainly! Our website features a live chat support option. Simply click on the chat icon located in the bottom corner of the screen to connect with a support representative in real-time. This is a quick and convenient way to get immediate assistance with your inquiries.',
      },
      {
        question: 'Can I schedule a one-on-one support session?',
        answer:
          "Yes, we offer personalized one-on-one support sessions. To schedule a session, log in to your account and navigate to the 'Support' or 'Help' section. There, you'll find options to book a dedicated support time with one of our experts who can address your specific needs.",
      },
      {
        question: 'How can I provide feedback or report an issue?',
        answer:
          "We appreciate your feedback! You can submit feedback or report any issues through the 'Feedback' or 'Report a Problem' feature on our website. Alternatively, you can send an email to feedback@example.com. Your input helps us improve our services for a better user experience.",
      },
      // Add more Support FAQs as needed
    ],
  },
];

export default faq;
