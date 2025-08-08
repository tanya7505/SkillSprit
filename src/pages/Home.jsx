import react from 'react';
import HeroSection from '../components/Home/HeroSection';
import WhySkillSpirit from '../components/Home/WhySkillSpirit';
import JourneyWithSKillSprit from '../components/Home/JourneyWithSkillSprit';
import Testimonials from '../components/Home/Testimonals';

function Home(){
    return(
        <>
        <HeroSection />
        <WhySkillSpirit />
        <JourneyWithSKillSprit/>
        <Testimonials/>
        </>
    )

}

export default Home