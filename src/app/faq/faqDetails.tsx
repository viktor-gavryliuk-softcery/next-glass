import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { FAQCategory } from '../../data/faqData';

import type { RootState } from '@/store/store';

import { bebas_neue, fontGrotesk } from '../fonts';

import { ChevronDownIcon } from '@radix-ui/react-icons';

import * as Accordion from '@radix-ui/react-accordion';

interface FaqDetailsProps {
  faqCategory: FAQCategory;
}

const AccordionItem = ({ children, value }: { children: ReactElement[]; value: string }) => (
  <Accordion.Item
    className={`bg-neutral-700 rounded-2xl focus-within:border-2 border-lime`}
    value={value}>
    {children}
  </Accordion.Item>
);

const AccordionTrigger = ({ heading }: { heading: string }) => (
  <Accordion.Header className='flex'>
    <Accordion.Trigger
      className={` bg-neutral-800 p-4 rounded-2xl data-[state=open]:text-violet text-neutral-200 font-medium  group flex flex-1 text-left items-center justify-between text-2xl leading-none outline-none`}>
      {heading}
      <ChevronDownIcon
        className='w-10 h-10 min-w-10 text-my-cyan text-lime bg-neutral-700 p-2 rounded-full ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180'
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
);

const AccordionContent = ({ description }: { description: string }) => (
  <Accordion.Content
    className={`font-light text-neutral-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-md h-32 px-8`}>
    <span className='h-full w-full flex align-middle items-center data-[state=closed]:hi'>
      {description}
    </span>
  </Accordion.Content>
);

const FaqDetail = ({ faqCategory }: FaqDetailsProps) => (
  <>
    <h2 className={`${fontGrotesk.className} text-lime text-2xl font-bold mb-4`}>
      {faqCategory.title}{' '}
    </h2>

    <Accordion.Root
      type='single'
      defaultValue='0'
      collapsible
      className='flex flex-col gap-4'>
      {faqCategory.faqs.map((faqItem, index) => (
        <AccordionItem
          key={index}
          value={index + ''}>
          <AccordionTrigger heading={faqItem.question} />

          <AccordionContent description={faqItem.answer} />
        </AccordionItem>
      ))}
    </Accordion.Root>
  </>
);

const FaqPickedDetails = () => {
  const activePage = useSelector((state: RootState) => state.faq.activePage);
  const faqData = useSelector((state: RootState) => state.faq.faqData);

  if (!faqData[activePage]) {
    return <div className='text-red-500'>No FAQ data available for the selected page.</div>;
  }

  const selectedCategory: FAQCategory = faqData[activePage];

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <h2 className={`${bebas_neue.className} text-4xl font-bold mb-8`}>
        Frequently Asked Questions
      </h2>
      <FaqDetail faqCategory={selectedCategory} />
    </div>
  );
};

export default FaqPickedDetails;
