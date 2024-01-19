import Link from "next/link";
import VacanciesData from "./vacancies";
import { montserrat } from "../fonts";

const VaccancyDetails = ({ activeSlide }: { activeSlide: number }) => {
    const vaccancyData = VacanciesData[activeSlide];
    return (<>
        <p className="text-lg mb-4">{vaccancyData?.greeting}</p>

        <div>
            <h3 className="text-xl font-bold mt-4">Conditions:</h3>
            <ul className="list-disc ml-6">
                {vaccancyData?.conditions.map((condition, index) => (
                    <li>{condition}</li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className="text-xl font-bold mt-4">Responsibilities:</h3>
            <ul className="list-disc ml-6">
                {vaccancyData?.responsibilities.map((responsibility, index) => (
                    <li >{responsibility}</li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className="text-xl font-bold mt-4">Requirements:</h3>
            <div>
                <h4 className="text-lg font-bold mt-2">Soft Skills:</h4>
                <ul className="list-disc ml-6">
                    {vaccancyData?.requirements.softSkills.map((skill, index) => (
                        <li >{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold mt-2">Hard Skills:</h4>
                <ul className="list-disc ml-6">
                    {vaccancyData?.requirements.hardSkills.map((skill, index) => (
                        <li >{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold mt-2">Will Be a Plus:</h4>
                <ul className="list-disc ml-6">
                    {vaccancyData?.requirements.willBeAPlus.map((skill, index) => (
                        <li >{skill}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-12 mb-6">
            <a target="_blank" rel="noopener noreferrer"
                href={vaccancyData?.linkToForm as string}
                className={`${montserrat.className}  rounded-md text-center bg-neutral-100 hover:bg-lime text-black hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#8abd00] hover:font-semibold uppercase text-xl md:text-3xl md:p-4 p-3 flex-1`}>
                Apply Now
            </a>
        </div>
    </>
    )
}

export default VaccancyDetails;