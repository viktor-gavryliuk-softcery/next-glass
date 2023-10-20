import Image from "next/image";

const VectorArrow = ({ color, isHovered }: { color: string, isHovered: boolean }) => {
    return <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute top-4 right-4 h-8 w-8 transition-all duration-500 ${isHovered ? '' : 'opacity-0'} link-arrow`}>
        <path d="M2.49869 35L35 2M35 2V33.2557M35 2L2 2.4903" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
}

export default VectorArrow;