import { notFound, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import serviceData from '../data/serviceData';

import type { iServiceData } from '../data/serviceData';

const useServiceSlug = () => {
  const pathname = usePathname();

  const [sData, SetSPData] = useState<iServiceData | undefined>({} as iServiceData);

  const extractKey = (path: string) => path.split('/').reverse()[0];

  const isSlugValid = () => serviceData.some((data) => data.key === extractKey(pathname));

  useEffect(() => {
    if (!isSlugValid()) {
      notFound();
    } else {
      SetSPData(serviceData.find((sd) => sd.key === extractKey(pathname)));
    }
  }, [sData]);

  return sData;
};

export { useServiceSlug };
