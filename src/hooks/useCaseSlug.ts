import { useState, useEffect } from "react";
import { usePathname, notFound } from "next/navigation";

import casesData from "../data/casesData";
import type { caseProps } from "../data/casesData";


const useCaseSlug = () => {
    const pathname = usePathname()

    const [sData, SetSPData] = useState<caseProps | undefined>({} as caseProps);

    const extractKey = (path: string) => path.split('/').reverse()[0];

    const isSlugValid = () => casesData.some((data) => data.slug === extractKey(pathname));

    useEffect(() => {
        if (!isSlugValid()) {
            notFound();
        }
        else {
            SetSPData(casesData.find(sd => sd.slug === extractKey(pathname)));
        }

    }, [sData])

    return sData;
}

export { useCaseSlug };