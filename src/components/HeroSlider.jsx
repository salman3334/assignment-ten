// // src/components/HeroSlider.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     id: 1,
//     title: "Trusted Local Electricians",
//     desc: "Quick & reliable service for your home electrical needs.",
//     image: "/images/hero1.jpg",
//   },
//   {
//     id: 2,
//     title: "Plumbing Experts",
//     desc: "Affordable and efficient plumbing services near you.",
//     image: "/images/hero2.jpg",
//   },
//   {
//     id: 3,
//     title: "House Cleaning Services",
//     desc: "Keep your home sparkling clean with our trusted cleaners.",
//     image: "/images/hero3.jpg",
//   },
// ];

// const HeroSlider = () => {
//   return (
//     <div className="relative h-[500px] w-full overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className="absolute inset-0 transition-opacity duration-1000"
//           style={{ opacity: index === 0 ? 1 : 0 }} // first slide visible
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 md:px-20 text-white">
//             <motion.h2
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl md:text-5xl font-bold mb-4"
//             >
//               {slide.title}
//             </motion.h2>
//             <motion.p
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="mb-6 text-lg md:text-xl"
//             >
//               {slide.desc}
//             </motion.p>
//             <Link
//               to="/services"
//               className="bg-blue-500 px-6 py-2 rounded font-semibold hover:bg-blue-600 transition"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroSlider;
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Trusted Local Electricians",
    desc: "Quick & reliable service for your home electrical needs.",
    image: "https://i.postimg.cc/rFYjGZQS/pexels-divinetechygirl-1181677.jpg",
  },
  {
    id: 2,
    title: "Plumbing Experts",
    desc: "Affordable and efficient plumbing services near you.",
    image: "https://i.postimg.cc/nLwnnJ15/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg",
  },
  {
    id: 3,
    title: "House Cleaning Services",
    desc: "Keep your home sparkling clean with our trusted cleaners.",
       image:
                "https://i.postimg.cc/J0j83BWn/carlos-muza-hpj-Sk-U2UYSU-unsplash.jpg",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 md:px-20 text-white">
                  <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-6 text-lg md:text-xl"
                  >
                    {slide.desc}
                  </motion.p>
                  <Link
                    to="/services"
                    className="bg-blue-500 px-6 py-2 rounded font-semibold hover:bg-blue-600 transition"
                  >
                    Explore
                  </Link>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
