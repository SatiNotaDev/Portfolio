import {Button} from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Full-stack Developer</span>
            <h1 className="h1">Hi! I am <br/> <span className="text-accent">Sati Nota</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Full stack developer with one year of frontend experience and an extensive 8-year background in marketing. Quick to master new skills, I create functional and visually appealing web applications, combining technical expertise with a deep understanding of user needs and business requirements.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center  gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div>socials</div>
          </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Home

