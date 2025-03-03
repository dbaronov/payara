import {useState} from "react";

const plans = [
  {
    name: "Freebie",
    price: "$0",
    description: "Ideal for individuals who need quick access to basic features.",
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
    ],
    missingFeatures: [
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    buttonText: "Get Started Now",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$25",
    description: "Ideal for individuals who need advanced features and tools for client work.",
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
    ],
    missingFeatures: [
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    buttonText: "Get Started Now",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$100",
    description: "Ideal for businesses who need personalized services and security for large teams.",
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    missingFeatures: [],
    buttonText: "Get Started Now",
    highlight: false,
  },
];

const PricingCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-[#1E293B] text-white" : "bg-gray-100 text-gray-900"} flex flex-col items-center justify-center py-12 transition-all`}>
      <button 
        className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h2 className="text-5xl font-bold text-center mb-4 px-4">
        Powerful features for <span className="text-[#7C3AED]">powerful creators</span>
      </h2>
      <p className={`text-center text-[16px] mb-24 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Choose a plan that’s right for you</p>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-0">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`px-8 py-12 rounded-2xl transition-all w-xs md:w-xs lg:w-xs xl:w-sm
              ${plan.highlight ? `lg:px-4 lg:pt-13 bg-[#6D28D9] text-white lg:scale-105 ${darkMode ? "lg:shadow-[0px_4px_44px_0px_#020617]" : "lg:shadow-[0px_4px_44px_0px_#A78BFA]"}` : `${darkMode ? "bg-[#334155] text-white" : "bg-[#EDE9FE] text-gray-900"}`}`}

          >
            <h3 className="text-4xl font-medium">{plan.name}</h3>
            <p className={`text-base my-4 ${plan.highlight ? "text-gray-200" : darkMode ? "text-white" : "text-gray-600"}`}>{plan.description}</p>
            <p className="text-5xl font-bold my-8 flex items-center">{plan.price} <span className="text-base font-normal mx-1">/ Month</span></p>

            <button className={`w-full py-2 rounded-lg font-base mb-4 ${darkMode ? "border-[#C4B5FD] hover:bg-[#475069]" : "border-[#7C3AED]"} border-1 text-[#6D28D9] 
              ${plan.highlight ? `${darkMode ? "bg-[#F5F3FF] text-[#6D28D9] hover:bg-[#DEDCE8]" : "bg-[#F97316] hover:bg-[#E36A14] text-[#F5F3FF]"} border-none` : `${darkMode ? "text-[#C4B5FD] hover:bg-grey-600" : "hover:bg-purple-200"}`}`}
            >
              {plan.buttonText}
            </button>
            
            <ul className="text-left mt-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-base my-3">
                  <span className="w-[33px] h-[32px]">
                    { plan.highlight
                      ?
                        darkMode
                          ?
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M16.665 32C25.5016 32 32.665 24.8366 32.665 16C32.665 7.16344 25.5016 0 16.665 0C7.82848 0 0.665039 7.16344 0.665039 16C0.665039 24.8366 7.82848 32 16.665 32ZM22.458 13.1495C22.7247 12.8957 22.7351 12.4737 22.4813 12.207C22.2274 11.9403 21.8054 11.9299 21.5387 12.1838L14.3385 19.0379L11.8333 16.1763C11.5908 15.8992 11.1696 15.8713 10.8926 16.1138C10.6156 16.3563 10.5876 16.7775 10.8301 17.0545L13.7931 20.4391C13.9127 20.5758 14.0829 20.6577 14.2644 20.666C14.4458 20.6742 14.6228 20.6081 14.7543 20.4829L22.458 13.1495Z" fill="#DDD6FE"/>
                            </svg>

                          :
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M16.665 32C25.5016 32 32.665 24.8366 32.665 16C32.665 7.16344 25.5016 0 16.665 0C7.82848 0 0.665039 7.16344 0.665039 16C0.665039 24.8366 7.82848 32 16.665 32ZM22.458 13.1495C22.7247 12.8957 22.7351 12.4737 22.4813 12.207C22.2274 11.9403 21.8054 11.9299 21.5387 12.1838L14.3385 19.0379L11.8333 16.1763C11.5908 15.8992 11.1696 15.8713 10.8926 16.1138C10.6156 16.3563 10.5876 16.7775 10.8301 17.0545L13.7931 20.4391C13.9127 20.5758 14.0829 20.6577 14.2644 20.666C14.4458 20.6742 14.6228 20.6081 14.7543 20.4829L22.458 13.1495Z" fill="#F5F3FF"/>
                            </svg>
                      :
                        darkMode
                          ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM21.7913 13.1495C22.058 12.8957 22.0684 12.4737 21.8145 12.207C21.5606 11.9403 21.1387 11.9299 20.872 12.1838L13.6717 19.0379L11.1666 16.1763C10.9241 15.8992 10.5029 15.8713 10.2258 16.1138C9.94881 16.3563 9.92083 16.7775 10.1634 17.0545L13.1263 20.4391C13.246 20.5758 13.4162 20.6577 13.5976 20.666C13.7791 20.6742 13.956 20.6081 14.0876 20.4829L21.7913 13.1495Z" fill="#C4B5FD"/>
                            </svg>
                          :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM21.7913 13.1495C22.058 12.8957 22.0684 12.4737 21.8145 12.207C21.5606 11.9403 21.1387 11.9299 20.872 12.1838L13.6717 19.0379L11.1666 16.1763C10.9241 15.8992 10.5029 15.8713 10.2258 16.1138C9.94881 16.3563 9.92083 16.7775 10.1634 17.0545L13.1263 20.4391C13.246 20.5758 13.4162 20.6577 13.5976 20.666C13.7791 20.6742 13.956 20.6081 14.0876 20.4829L21.7913 13.1495Z" fill="#8B5CF6"/>
                            </svg>
                    }
                  </span>
                   {feature}
                </li>
              ))}
              {plan.missingFeatures.map((feature, i) => (
                <li key={i} className={`flex items-center gap-2 ${darkMode ? "text-[#94A3B8]" : "text-[#A78BFA]"} text-base my-3`}>
                  <span className="w-[33px] h-[32px]">
                    { plan.highlight
                      ?
                        darkMode
                          ?
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M16.665 32C25.5016 32 32.665 24.8366 32.665 16C32.665 7.16344 25.5016 0 16.665 0C7.82848 0 0.665039 7.16344 0.665039 16C0.665039 24.8366 7.82848 32 16.665 32ZM20.9056 19.2978C21.166 19.5581 21.166 19.9803 20.9056 20.2406C20.6453 20.501 20.2232 20.501 19.9628 20.2406L16.6635 16.9412L13.3641 20.2406C13.1037 20.501 12.6816 20.501 12.4213 20.2406C12.1609 19.9803 12.1609 19.5581 12.4213 19.2978L15.7206 15.9984L12.4204 12.6981C12.16 12.4378 12.16 12.0157 12.4204 11.7553C12.6807 11.495 13.1028 11.495 13.3632 11.7553L16.6635 15.0556L19.9637 11.7553C20.2241 11.495 20.6462 11.495 20.9065 11.7553C21.1669 12.0157 21.1669 12.4378 20.9065 12.6981L17.6063 15.9984L20.9056 19.2978Z" fill="#8B5CF6"/>
                            </svg>
                          :
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M16.665 32C25.5016 32 32.665 24.8366 32.665 16C32.665 7.16344 25.5016 0 16.665 0C7.82848 0 0.665039 7.16344 0.665039 16C0.665039 24.8366 7.82848 32 16.665 32ZM20.9056 19.2978C21.166 19.5581 21.166 19.9803 20.9056 20.2406C20.6453 20.501 20.2232 20.501 19.9628 20.2406L16.6635 16.9412L13.3641 20.2406C13.1037 20.501 12.6816 20.501 12.4213 20.2406C12.1609 19.9803 12.1609 19.5581 12.4213 19.2978L15.7206 15.9984L12.4204 12.6981C12.16 12.4378 12.16 12.0157 12.4204 11.7553C12.6807 11.495 13.1028 11.495 13.3632 11.7553L16.6635 15.0556L19.9637 11.7553C20.2241 11.495 20.6462 11.495 20.9065 11.7553C21.1669 12.0157 21.1669 12.4378 20.9065 12.6981L17.6063 15.9984L20.9056 19.2978Z" fill="#8B5CF6"/>
                            </svg>
                      :
                        darkMode
                          ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM20.2389 19.2978C20.4992 19.5581 20.4992 19.9803 20.2389 20.2406C19.9785 20.501 19.5564 20.501 19.2961 20.2406L15.9967 16.9412L12.6973 20.2406C12.437 20.501 12.0149 20.501 11.7545 20.2406C11.4942 19.9803 11.4942 19.5581 11.7545 19.2978L15.0539 15.9984L11.7536 12.6981C11.4933 12.4378 11.4933 12.0157 11.7536 11.7553C12.014 11.495 12.4361 11.495 12.6964 11.7553L15.9967 15.0556L19.297 11.7553C19.5573 11.495 19.9795 11.495 20.2398 11.7553C20.5001 12.0157 20.5001 12.4378 20.2398 12.6981L16.9395 15.9984L20.2389 19.2978Z" fill="#64748B"/>
                            </svg>
                          :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM20.2389 19.2978C20.4992 19.5581 20.4992 19.9803 20.2389 20.2406C19.9785 20.501 19.5564 20.501 19.2961 20.2406L15.9967 16.9412L12.6973 20.2406C12.437 20.501 12.0149 20.501 11.7545 20.2406C11.4942 19.9803 11.4942 19.5581 11.7545 19.2978L15.0539 15.9984L11.7536 12.6981C11.4933 12.4378 11.4933 12.0157 11.7536 11.7553C12.014 11.495 12.4361 11.495 12.6964 11.7553L15.9967 15.0556L19.297 11.7553C19.5573 11.495 19.9795 11.495 20.2398 11.7553C20.5001 12.0157 20.5001 12.4378 20.2398 12.6981L16.9395 15.9984L20.2389 19.2978Z" fill="#C4B5FD"/>
                            </svg>
                    }
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
