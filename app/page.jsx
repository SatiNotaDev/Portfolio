'use client'; 
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import {Button} from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  const handleDownload = () => {
    const cvUrl = '/assets/Satenik-SAAKIAN-CV.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Satenik-SAAKIAN-CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-stack Developer</span>
            <h1 className="h1">Hi! I am <br/> <span className="text-accent">Sati Nota</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Full stack developer with one year of frontend experience and an extensive 8-year background in marketing. Quick to master new skills, I create functional and visually appealing web applications, combining technical expertise with a deep understanding of user needs and business requirements.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="uppercase flex items-center gap-2"
              onClick={handleDownload} 
            >
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0"><Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transitions-all duration-500"/></div>
          </div>
          </div>
          <div className="mb-8 xl:mb-0 order-1 xl:order-none"><Photo/></div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home