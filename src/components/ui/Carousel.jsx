import { useState, useEffect, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(Children.count(children));
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(Children.count(children));
  }, [children]);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container relative">
      <div className="carousel-wrapper">
        <button 
          onClick={prev} 
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
            currentIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex <= 0}
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
        
        <div
          className="carousel-content-wrapper overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Children.map(children, child => cloneElement(child, {
              className: 'flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2'
            }))}
          </div>
        </div>
        
        <button 
          onClick={next} 
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
            currentIndex >= length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex >= length - 1}
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}