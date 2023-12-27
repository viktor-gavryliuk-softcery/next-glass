import { useState, useEffect } from "react";
import { usePathname, notFound } from "next/navigation";

import serviceData from '../../../data/serviceData';

import type { iServiceData } from '../../../data/serviceData';

const useServiceSlug = () => {
    const pathname = usePathname()

    const [sData, SetSPData] = useState<iServiceData | undefined>({} as iServiceData);

    const extractKey = (path: string) => path.split('/').reverse()[0];

    const isSlugValid = () => serviceData.some((data) => data.key === extractKey(pathname));

    useEffect(() => {
        if (!isSlugValid()) {
            notFound();
        }
        else {
            SetSPData(serviceData.find(sd => sd.key === extractKey(pathname)));
        }

    }, [sData])

    return sData;
}

export { useServiceSlug };