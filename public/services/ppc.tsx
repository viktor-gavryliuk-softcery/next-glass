import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <path
            stroke="currentColor"
            strokeWidth={2}
            d="M1 6.339V1h5.339M6.339 54.39H1v-5.34M54.39 49.05v5.34h-5.34M49.05 1h5.34v5.339M27.695 6.339V1h5.339M22.356 1h5.339v5.339M49.05 27.695h5.34v5.338M54.39 22.356v5.339h-5.34M27.695 49.05v5.34h-5.34"
        />
        <path
            stroke="currentColor"
            strokeWidth={2}
            d="M33.034 54.39h-5.34v-5.34M6.339 27.695H1v-5.339M1 33.034v-5.339h5.339"
        />
    </svg>
)
export default SvgComponent
