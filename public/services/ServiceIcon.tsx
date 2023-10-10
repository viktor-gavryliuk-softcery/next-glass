import Strategy from './strategy';
import Target from './target';
import Smm from './smm';
import Community from './community';
import Pr from './pr';
import Consultation from './consultation';

const ServiceIcon = ({ slug, isHovered, color }: { slug: string, isHovered: boolean, color: string }) => {
    {/* <Image src={`/services/${slug}.svg`} width={60} height={60} alt='Service Icon' className={`relative z-10 bg-${isHovered ? hoveredText : 'black'}  service-icon service-icon`} /> */ }

    const ChooseSVGIcon = () => {
        switch (slug) {
            case 'smm':
                return <Smm className={`bg-${isHovered ? 'white' : 'black'} service-icon`} color={isHovered ? 'black' : '#D8D8D8'} viewBox='-3 0 53 48' />;
            case 'target':
                return <Target className={`bg-black service-icon`} color={isHovered ? '#bdff00' : '#D8D8D8'} viewBox='0 0 56 56' />;
            case 'community':
                return <Community className={`bg-${isHovered ? 'white' : 'black'} service-icon`} color={isHovered ? 'black' : '#D8D8D8'} viewBox='-2 -8 68 68' />
            case 'pr':
                return <Pr className={`bg-black service-icon`} color={isHovered ? '#bdff00' : '#D8D8D8'} width='60' height='56' viewBox='0 6 62 62' />
            case 'consultation':
                return <Consultation className={`bg-${isHovered ? 'lime' : 'black'} service-icon`} color={isHovered ? '#8B4AF6' : '#D8D8D8'} viewBox='0 0 60 60' />
            case 'strategy':
                return <Strategy isHovered={isHovered} className={`bg-${isHovered ? 'lime' : 'black'} service-icon`} color={isHovered ? '#8B4AF6' : '#D8D8D8'}
                    viewBox='0 0 65 65' />
        }
    }
    return ChooseSVGIcon();
}

export default ServiceIcon;
export { Strategy, Target, Smm, Community, Pr, Consultation };