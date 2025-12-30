import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateWidth = () => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent | TouchEvent) => {
        if (isDragging) {
            // @ts-ignore
            handleMove(e);
        }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchmove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  return (
    <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-2xl border-4 border-white bg-gray-100"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
    >
      {/* After Image (Background - 100% visible initially) */}
      <img 
        src={afterImage} 
        alt={`Fixed ${alt}`} 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        draggable={false}
      />
      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 pointer-events-none">
        AFTER
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
            src={beforeImage} 
            alt={`Broken ${alt}`} 
            className="absolute top-0 left-0 max-w-none h-full object-cover"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
            draggable={false}
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
            BEFORE
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-red-600 border-2 border-red-50">
          <ChevronsLeftRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;