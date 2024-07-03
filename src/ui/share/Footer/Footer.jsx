import StickyScroll from "../../../component/Footer/StickyScroll";

const Footer = () => {
    const content = [
        {
          title: "AI Integration",
          description:
            "Leverage the power of Artificial Intelligence to automate tasks, analyze data, and make smarter decisions. Our platform integrates seamlessly with AI technologies to enhance your workflows and boost productivity.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
              AI Integration
            </div>
          ),
        },
        {
          title: "Blockchain Security",
          description:
            "Enhance your security with blockchain technology. Our platform utilizes blockchain to ensure that your data is safe, secure, and tamper-proof. Stay ahead of the curve with cutting-edge security solutions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
              Blockchain Security
            </div>
          ),
        },
        {
          title: "Sustainable Practices",
          description:
            "Adopt sustainable practices in your business operations. Our platform helps you reduce your carbon footprint, optimize resource usage, and promote eco-friendly initiatives. Contribute to a greener future while maintaining efficiency.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-400),var(--yellow-500))] flex items-center justify-center text-white">
              Sustainable Practices
            </div>
          ),
        },
        {
          title: "Remote Work Optimization",
          description:
            "Optimize your remote work setup with our platform. Enable seamless communication, collaboration, and project management regardless of location. Stay connected and productive while working from anywhere.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
              Remote Work Optimization
            </div>
          ),
        },
        {
          title: "Data Privacy",
          description:
            "Protect your sensitive information with our robust data privacy solutions. Our platform ensures compliance with the latest data protection regulations, giving you peace of mind and safeguarding your business.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
              Data Privacy
            </div>
          ),
        },
        {
          title: "5G Connectivity",
          description:
            "Experience lightning-fast internet speeds and low latency with 5G connectivity. Our platform supports 5G, enabling you to leverage the benefits of this revolutionary technology for enhanced communication and data transfer.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
              5G Connectivity
            </div>
          ),
        },
      ];
      
    return (
        <div>
             <StickyScroll content={content}/>
        </div>
    );
};

export default Footer;