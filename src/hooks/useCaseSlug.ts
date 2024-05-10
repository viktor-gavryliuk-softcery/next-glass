import { notFound, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { CaseProps } from '../data/casesData';
import casesData from '../data/casesData';

const useCaseSlug = () => {
  const pathname = usePathname();

  const [sData, SetSPData] = useState<CaseProps | undefined>({} as CaseProps);

  const extractKey = (path: string) => path.split('/').reverse()[0];

  const isSlugValid = () => casesData.some((data) => data.slug === extractKey(pathname));

  useEffect(() => {
    if (!isSlugValid()) {
      notFound();
    } else {
      SetSPData(casesData.find((sd) => sd.slug === extractKey(pathname)));
    }
  }, [sData]);

  return sData;
};

export { useCaseSlug };
