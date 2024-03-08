import VacanciesData from '../../data/vacancies';
import { montserrat } from '../fonts';

import { HighlightActiveBlock } from '@/components/HighlightActiveBlock';
import './style.scss';

const VaccancyDetails = ({ activeSlide }: { activeSlide: number }) => {
  const vacancyData = VacanciesData[activeSlide];

  return (
    <>
      <p className='text-lg mb-8'>{vacancyData?.greeting}</p>

      <div className={'flex flex-col gap-10'}>
        <HighlightActiveBlock>
          <h3 className='text-4xl font-bold relative -top-4 '>Conditions:</h3>
          <ul className='list-disc ml-6 leading-7 text-neutral-100'>
            {vacancyData?.conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </HighlightActiveBlock>

        <HighlightActiveBlock>
          <h3 className='text-4xl font-bold relative -top-4 '>Responsibilities:</h3>
          <ul className='list-disc ml-6 leading-7 text-neutral-100'>
            {vacancyData?.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </HighlightActiveBlock>

        <HighlightActiveBlock>
          <h3 className='text-4xl font-bold relative -top-4 '>Requirements:</h3>
          <div>
            <h4 className='text-lg font-bold mt-2 text-neutral-100'>Soft Skills:</h4>
            <ul className='list-disc ml-6 leading-7 text-neutral-100'>
              {vacancyData?.requirements.softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-bold mt-2 text-neutral-100'>Hard Skills:</h4>
            <ul className='list-disc ml-6 leading-7 text-neutral-100'>
              {vacancyData?.requirements.hardSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-bold mt-2 text-neutral-100'>Will Be a Plus:</h4>
            <ul className='list-disc ml-6 leading-7 text-neutral-100'>
              {vacancyData.requirements.willBeAPlus ??
                [].map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </HighlightActiveBlock>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href={vacancyData?.linkToForm as string}
          className={`${montserrat.className} apply-btn `}>
          Apply Now
        </a>
      </div>
    </>
  );
};

export default VaccancyDetails;
