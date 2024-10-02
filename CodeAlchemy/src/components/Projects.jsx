import React, { useState, useEffect, useRef } from "react";
import Bike from "../assets/Projects/BikePalace.png"
import Blog from "../assets/Projects/Blog.png"
import Booking from "../assets/Projects/Booking.png"
import Book from "../assets/Projects/BookStore.png"
import Port from "../assets/Projects/Portfolio.png"
import Github from '/Svg/Github.svg'

const Projects = () => {
  const [active, setActive] = useState(2);
  const [Tran, setTran] = useState(15);
  const [Position, setPosition] = useState('');
  const itemsRef = useRef([]);

  const items = [
    {
      title: "Bike Palace",
      img:Bike,
      source:"https://github.com/MaNaNBaTrA/Bike-Palace"
    },
    {
      title: "Bolg Website",
      img:Blog,
      source:"https://github.com/MaNaNBaTrA/Blog-Web"
    },
    {
      title: "Art In Motion",
      img:Port,
      source:"https://github.com/MaNaNBaTrA/Art-In-Motion"
    },
    {
      title: "Books Library",
      img:Book,
      source:"https://github.com/MaNaNBaTrA/Books-Library"
    },
    {
      title: "Booking.com",
      img:Booking,
      source:"https://github.com/MaNaNBaTrA/Booking-App"
    },
  ];

  const loadShow = () => {
    let stt = 0;

    if (itemsRef.current[active]) {
      itemsRef.current[active].style.transform = "none";
      itemsRef.current[active].style.zIndex = 1;
      itemsRef.current[active].style.filter = "none";
      itemsRef.current[active].style.opacity = 1;
    }

    for (let i = active + 1; i < items.length; i++) {
      stt++;
      if (itemsRef.current[i]) {
        itemsRef.current[i].style.transform = `translateX(${Tran * stt}rem) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        itemsRef.current[i].style.zIndex = -stt;
        itemsRef.current[i].style.filter = "blur(5px)";
        itemsRef.current[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      if (itemsRef.current[i]) {
        itemsRef.current[i].style.transform = `translateX(${-Tran * stt}rem) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        itemsRef.current[i].style.zIndex = -stt;
        itemsRef.current[i].style.filter = "blur(5px)";
        itemsRef.current[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }
  };

  useEffect(() => {
    loadShow();
  }, [active, Tran]);

  const nextSlide = () => {
    if (active + 1 < items.length) {
      setActive(active + 1);
    }
  };

  const prevSlide = () => {
    if (active - 1 >= 0) {
      setActive(active - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const screenX = window.innerWidth;
      if (screenX < 520) {
        setPosition('calc(30% - 50px)');
      }
      else if(screenX < 586){
        setPosition('calc(45% - 110px)');
      } 
      else {
        setPosition('calc(40% - 70px)');
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  useEffect(() => {
    const TranResize = () => {
      const screenX = window.innerWidth;
  
      if (screenX < 440) {
        setTran(6);
      } 
      else if (screenX < 586) {
        setTran(8);
      } 
      else if (screenX < 682) {
        setTran(11);
      } 
      else if(screenX<1600){
        setTran(15);
      }
      else{
        setTran(20);
      }
    };
  
    TranResize();

    window.addEventListener("resize", TranResize);

    return () => {
      window.removeEventListener("resize", TranResize);
    };
  }, []);
  

  return (
    <div className="f relative mt-32 mb-20 w-full overflow-hidden px-12">
      <div className="relative w-full h-[550px] overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute w-[30%] h-[600px] text-justify rounded-lg p-5 transition-all duration-500 max-[970px]:w-[40%] max-[800px]:w-[45%] max-[700px]:w-[50%] max-[650px]:w-[55%] flex flex-col max-[586px]:w-[70%]"
            style={{ left: Position, top: 0 }}
          >
            <h1 className="text-xl  mb-2 font-Grotesk max-[586px]:text-lg">{item.title}</h1>
            <img src={item.img} alt={item.title + 'Img'} />
           { active === index && <a  href={item.source} target="_blank" className="transition-all duration-1000 opacity-100  ml-1"><div className="inline-flex bg-Black text-White mt-4 rounded-xl gap-2 items-center justify-center p-1 cursor-pointer opacity-100 hover:scale-105 transition-all"><img src={Github} alt="Source" className="w-8 invert max-[586px]:w-6"/>Source</div></a>}
          </div>
        ))}
        <div
          id="prev"
          onClick={prevSlide}
          className="absolute left-0 bg-Menu text-3xl w-12 h-12 rounded-full shadow-lg text-Text text-center p-1 top-1/2 z-10"
        >
          {"<"}
        </div>
        <div
          id="next"
          onClick={nextSlide}
          className="absolute right-0 bg-Menu text-3xl w-12 h-12 rounded-full shadow-lg text-Text text-center p-1 top-1/2 z-10"
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Projects;
