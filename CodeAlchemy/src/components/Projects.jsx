import React, { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Bike from "../assets/Projects/BikePalace.png";
import Blog from "../assets/Projects/Blog.png";
import Booking from "../assets/Projects/Booking.png";
import Book from "../assets/Projects/BookStore.png";
import Port from "../assets/Projects/Portfolio.png";
import Github from '/Svg/Github.svg';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [active, setActive] = useState(2);
  const [Tran, setTran] = useState(15);
  const [Position, setPosition] = useState("");
  const itemsRef = useRef([]);

  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 100 }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: 'power2.out', 
        scrollTrigger: {
          trigger: element,
          start: 'top 95%', 
          end: 'bottom 30%', 
          scrub: 0.5, 
          markers: false, 
        },
      }
    );
  }, []);

  const items = [
    { title: "Bike Palace", img: Bike, source: "https://github.com/MaNaNBaTrA/Bike-Palace" },
    { title: "Blog Website", img: Blog, source: "https://github.com/MaNaNBaTrA/Blog-Web" },
    { title: "Art In Motion", img: Port, source: "https://github.com/MaNaNBaTrA/Art-In-Motion" },
    { title: "Books Library", img: Book, source: "https://github.com/MaNaNBaTrA/Books-Library" },
    { title: "Booking.com", img: Booking, source: "https://github.com/MaNaNBaTrA/Booking-App" }
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
        itemsRef.current[i].style.transform = `translateX(${Tran * stt}rem) scale(${1 - 0.2 * stt})`;
        itemsRef.current[i].style.zIndex = -stt;
        itemsRef.current[i].style.filter = "blur(5px)";
        itemsRef.current[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      if (itemsRef.current[i]) {
        itemsRef.current[i].style.transform = `translateX(${-Tran * stt}rem) scale(${1 - 0.2 * stt})`;
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
      setActive((prevActive) => prevActive + 1);
    }
  };

  const prevSlide = () => {
    if (active - 1 >= 0) {
      setActive((prevActive) => prevActive - 1);
    }
  };

  useEffect(() => {
    const forceRepaint = () => {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        document.body.style.overflow = '';
      });
    };

    forceRepaint(); 
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      const screenX = window.innerWidth;
      if (screenX < 365) {
        setPosition('14%');
      } else if (screenX < 375) {
        setPosition('12%');
      } else if (screenX < 460) {
        setPosition('14%');
      } else if (screenX < 680) {
        setPosition('18%');
      } else if (screenX < 980) {
        setPosition('calc(50% - 220px)');
      } else {
        setPosition('calc(40% - 115px)');
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

      if (screenX < 400) {
        setTran(4);
      } else if (screenX < 500) {
        setTran(6);
      } else if (screenX < 700) {
        setTran(8);
      }else if (screenX < 1600) {
        setTran(18);
      } else {
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
    <div className="relative mt-16 mb-10 w-full overflow-hidden max-[620px]:mt-12 max-[700px]:mb-0" ref={containerRef}>
      <div className="relative w-full h-[300px] overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute h-[600px] text-justify rounded-lg p-5 transition-all duration-500 flex flex-col max-[1600px]:w-[45%] min-[1600px]:w-[47%] max-w-[490px] max-[980px]:min-w-[480px] max-[780px]:w-[60%] max-[680px]:w-[65%] max-[680px]:min-w-[320px] max-[480px]:min-w-[320px] max-[400px]:min-w-[280px] max-[365px]:min-w-[240px]"
            style={{ left: Position, top: 0, willChange: "transform, opacity" }}
          >
            <h1 className="text-xl mb-2 font-Grotesk max-[586px]:text-lg">{item.title}</h1>
            <img src={item.img} alt={item.title + 'Img'} className="object-cover w-full h-auto" />
            {active === index && (
              <a href={item.source} target="_blank" className="transition-all duration-1000 opacity-100 ml-1">
                <div className="inline-flex bg-Black text-White mt-4 rounded-xl gap-2 items-center justify-center p-1 cursor-pointer opacity-100 hover:scale-105 transition-all max-[425px]:gap-1">
                  <img src={Github} alt="Source" className="w-8 invert max-[586px]:w-6 max-[425px]:w-5" />
                  Source
                </div>
              </a>
            )}
          </div>
        ))}
        <div
          id="prev"
          onClick={prevSlide}
          className={`absolute left-0 bg-Work text-2xl w-12 h-12 flex rounded-full shadow-lg text-Black items-center justify-center p-1 top-[40%] z-10 max-[860px]:top-[35%] max-[640px]:top-[30%] max-[540px]:top-[25%] max-[425px]:w-8 max-[425px]:h-8 max-[425px]:text-xl m-2 max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-xl ${
            active - 1 < 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          &lt;
        </div>
        <div
          id="next"
          onClick={nextSlide}
          className={`absolute right-0 bg-Work flex items-center justify-center text-2xl w-12 h-12 rounded-full shadow-lg text-Black p-1 top-[40%] z-10 max-[860px]:top-[35%] max-[640px]:top-[30%] max-[540px]:top-[25%] max-[425px]:w-8 max-[425px]:h-8 max-[425px]:text-xl m-2 max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-xl ${
            active + 1 >= items.length ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Projects;
