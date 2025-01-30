import experience1 from '../../assets/Images/experience1.jpg'
import experience2 from '../../assets/Images/experience2.webp'
import experience3 from '../../assets/Images/experience3.webp'


const Experience = () => {
    const sections = [
      { title: "SHOP", image: experience1 },
      { title: "EXPERIENCE", image: experience2 },
      { title: "LEARN", image: experience3 },
    ];
  
    return (
      <section className="bg-black text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-[40px]">
            {sections.map((section, index) => (
              <div key={index} className="relative">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-72 object-cover opacity-80"
                />
                <div className="absolute top-4 left-4 bg-[#C2A265] text-white px-4 py-2 font-bold">
                  {section.title}
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12 px-4">
            <h2 className="text-2xl md:text-3xl font-bold customFont animate-slide-up">
              FOR INFORMATION ON{" "}
              <span className="text-yellow-500">SIRARMS ARMOURY</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-sm md:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo...
            </p>
            <button className="mt-6 bg-[#C2A265] text-white px-6 py-3 font-bold rounded-md hover:opacity-80 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  