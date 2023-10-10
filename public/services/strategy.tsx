import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <path
            fill="currentColor"
            d="M32.5 65C50.45 65 65 50.45 65 32.5S50.45 0 32.5 0 0 14.55 0 32.5 14.55 65 32.5 65Z"
        />
        <path
            fill={props.isHovered ? '#bdff00' : 'black'}
            d="m46.28 18.72-6.89 20.67-20.67 6.89 6.89-20.67 20.67-6.89Z"
        />
    </svg>
)
export default SvgComponent
