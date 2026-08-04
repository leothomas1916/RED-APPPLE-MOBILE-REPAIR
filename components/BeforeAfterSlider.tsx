import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  badgeTitle?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ 
  beforeImage, 
  afterImage, 
  alt,
  badgeTitle 
}) => {
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
    <div className="space-y-2">
      <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-col-resize select-none shadow-2xl border-4 border-white bg-gray-900 group"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
      >
        {/* After Image (Background - Fixed OEM Quality) */}
        <img 
          src={afterImage} 
          alt={`Fixed ${alt}`} 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-black px-3.5 py-1.5 rounded-full shadow-xl z-10 pointer-events-none flex items-center gap-1.5 border border-emerald-400/30">
          <Sparkles size={13} className="text-emerald-300" />
          <span>AFTER • RESTORED OEM</span>
        </div>

        {/* Before Image (Shattered / Damaged) */}
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
              src={beforeImage} 
              alt={`Broken ${alt}`} 
              className="absolute top-0 left-0 max-w-none h-full object-cover filter contrast-105"
              style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
              draggable={false}
          />
          <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white text-[11px] font-black px-3.5 py-1.5 rounded-full shadow-xl pointer-events-none flex items-center gap-1.5 border border-red-400/30">
            <AlertTriangle size={13} className="text-amber-300" />
            <span>BEFORE • SHATTERED</span>
          </div>
        </div>

        {/* Bottom Banner Title */}
        {badgeTitle && (
          <div className="absolute bottom-3 left-3 right-3 bg-gray-950/80 backdrop-blur-md text-white px-4 py-2 rounded-2xl border border-gray-800 z-10 pointer-events-none flex items-center justify-between">
            <span className="text-xs font-bold text-gray-200">{badgeTitle}</span>
            <span className="text-[10px] text-emerald-400 font-extrabold flex items-center gap-1">
              <ShieldCheck size={12} />
              100% Functional
            </span>
          </div>
        )}

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-2xl text-red-600 border-2 border-red-100 hover:scale-110 active:scale-95 transition-transform">
            <ChevronsLeftRight size={22} />
          </div>
        </div>
      </div>
      <p className="text-center text-[11px] text-gray-600 font-bold tracking-wide uppercase">
        Drag slider left or right to inspect repair quality
      </p>
    </div>
  );
};

export default BeforeAfterSlider;
