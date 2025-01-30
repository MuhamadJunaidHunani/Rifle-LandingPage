import { FiRefreshCw, FiSettings, FiTarget } from "react-icons/fi";

const Features = () => {
    const features = [
        {
            title: "Performance",
            description:
                "Our patented mating of Action and Receiver design guarantees superior Ballistic Performances.",
            icon: <FiSettings className="text-[80px] text-white" />,
        },
        {
            title: "Technology",
            description:
                "Our revolutionary BIOMETRIC design approach provides unparalleled comfort to the operator.",
            icon: <FiRefreshCw className="text-[80px] text-white" />,
        },
        {
            title: "Accuracy",
            description:
                "Our patented mating of Action and Receiver design guarantees superior Ballistic Performances.",
            icon: <FiTarget className="text-[80px] text-white" />,
        },
    ];

    return (
        <section className="bg-black text-white py-[100px] text-center flex flex-col items-center ">
            <div className='text-center w-full customFont text-white pt-[10px] text-[30px] font-semibold flex flex-col items-center justify-start animate-slide-up'>
                <h1> WHY TRANSITION TO A SIRARMS REX</h1>
                <h1><span className='text-[#E6CD1E]'>SNIPER PLATFORM?</span></h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-[80%] items-center gap-16 mt-10">
                {features.map((feature, index) => (
                    <div key={index} className="text-center w-64">
                        <div className="w-[220px] h-[220px] mx-auto flex items-center justify-center rounded-full bg-[#C2A265] border-[20px] border-[#5E520A]">
                            <span className="text-[100px]">{feature.icon}</span>
                        </div>
                        <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                        <div className="w-14 h-[2px] bg-[#C2A265] rounded-4xl mx-auto my-2"></div>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
