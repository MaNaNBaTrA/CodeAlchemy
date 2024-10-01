import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [active, setActive] = useState(2);
  const [Tran, setTran] = useState(15);
  const [Position, setPosition] = useState('calc(40% - 80px)');
  const itemsRef = useRef([]);

  const items = [
    {
      title: "Project 1",

    },
    {
      title: "Project 2",
      
    },
    {
      title: "Project 3",
      
    },
    {
      title: "Project 4",
     
    },
    {
      title: "Project 5",
      
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
        setPosition('calc(30% - 15px)');
      } else {
        setPosition('calc(40% - 50px)');
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
      else if (screenX < 580) {
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
    <div className="f relative mt-20 mb-20 w-full overflow-hidden px-12">
      <div className="relative w-full h-[150px] overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute w-[30%] h-[300px] text-justify rounded-lg p-5 transition-all duration-500 max-[970px]:w-[40%] max-[800px]:w-[45%] max-[700px]:w-[50%] max-[650px]:w-[55%]"
            style={{ left: Position, top: 0 }}
          >
            <h1 className="text-xl font-bold mb-2">{item.title}</h1>
            <p>{item.content}</p>
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
