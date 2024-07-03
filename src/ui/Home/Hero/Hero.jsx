import jsIcon from '.././../../assets/All-icon/js.png'
import reactIcon from '.././../../assets/All-icon/react.png'
import dockerIcon from '.././../../assets/All-icon/docker.png'
import nodeIcon from '.././../../assets/All-icon/node.png'
import awsIcon from '.././../../assets/All-icon/aws.png'
import htmlIcon from '.././../../assets/All-icon/html5.png'
import cssIcon from '.././../../assets/All-icon/css.png'
import flutterIcon from '.././../../assets/All-icon/flutter.png'
import androidIcon from '.././../../assets/All-icon/android.png'
import mongodbIcon from '.././../../assets/All-icon/mongodb.png'
import { FaArrowRightLong } from "react-icons/fa6";
import OrbitingCircles from '../../../component/Hero/OrbitingCircles'

const Hero = () => {
    const Icons = {
        jsIcon: () => (
        <img src={jsIcon} alt="js" />
    
      ),
      reactIcon: () => (
        <img src={reactIcon} alt="react" />
      ),
      nodeIcon: () => (
        <img src={nodeIcon} alt="node" />
      ),
      awsIcon: () => (
        <img src={awsIcon} alt="aws" />
      ),
      mongodbIcon: () => (
        <img src={mongodbIcon} alt="db" />
      ),
      flutterIcon: () => (
        <img src={flutterIcon} alt="flutter" />
      ),
      dockerIcon: () => (
        <img src={dockerIcon} alt="docker" />
      ),
      htmlIcon: () => (
        <img src={htmlIcon} alt="html" />
      ),
      cssIcon: () => (
        <img src={cssIcon} alt="css" />
      ),
      androidIcon: () => (
        <img src={androidIcon} alt="android" />
      ),
    };
    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="text-center space-y-6 relative overflow-hidden z-10 p-2">
      <h1 className="text-4xl md:text-6xl font-semibold">
      We’ve really sped up our workflow
      </h1>
      <p className="w-full md:w-3/4 mx-auto text-sm text-gray-500"> <span className="font-semibold">We’ve just released a new update!</span> Check out the all new dashboard view. Pages and now load faster.you can try us for free for 30 days.
      <br /> Join 4,000+ companies already growing</p>
      
      <div className="flex justify-center mx-auto gap-2">
        <button className="flex justify-center items-center  gap-2 font-medium border px-3 py-2 rounded-lg"> <FaArrowRightLong/> Start Learning Today</button>

        <button className="font-medium border px-3 py-2 rounded-lg bg-[#7F6EFC] text-white"> Join Now</button>
      </div>
      </div>

      {/* Inner Circles */}
    
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={150}
        reverse
      >
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
      >
        <Icons.jsIcon />
      </OrbitingCircles>

      
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={18}
      >
        <Icons.nodeIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={350}
        duration={22}
        delay={15}
       
      >
        <Icons.awsIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={450}
        duration={18}
        delay={20}
      >
        <Icons.flutterIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={450}
        duration={18}
        delay={20}
        reverse
      >
        <Icons.reactIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={550}
        duration={16}
        delay={16}
        reverse
      >
        <Icons.htmlIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={650}
        duration={14}
        delay={15}
      >
        <Icons.cssIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={750}
        duration={10}
        delay={12}
        reverse
      >
        <Icons.dockerIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={450}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.androidIcon />
      </OrbitingCircles>
      
    </div>
    );
};

export default Hero;