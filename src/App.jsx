import NavBarMain from './components/navbar/NavBarMain'
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HelperSection from './components/HelperSection';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectMain from './components/projectSection/ProjectMain';
import ContactMain from './components/contactMeSection/ContactMain';
import FooterMain from './components/footer/FooterMain';

function App() {
 

  return (
  <main className='font-body'>
    <NavBarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
     <SubSkills/>
     <ExperienceMain/>
     <ProjectMain/>
     <ContactMain/>
     <FooterMain/>
     
   <HelperSection/>
  </main>
  );

    
  
}

export default App;
