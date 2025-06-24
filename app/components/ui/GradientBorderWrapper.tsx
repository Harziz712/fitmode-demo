
import React from 'react';

type Props = {
  children: React.ReactNode;
  rounded?: string; // e.g., "rounded-xl", "rounded-2xl"
  className?: string;
    onClick: () => void;
};

const GradientBorderWrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ children, onClick, className, rounded }, ref) => {

  return (
     <div
    ref={ref}
    onClick={onClick}
      className={`relative overflow-hidden  group cursor-pointer border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-md transition-all duration-300 ${rounded} ${className}`}
      style={{
        boxShadow: '0 0 0 2px transparent',
      }}
    >
      {/* Gradient border effect */}
      <span
        className={`pointer-events-none absolute inset-0 ${rounded} p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to right, #22d3ee, #06b6d4)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude', 
        }}
      />

     {children}
    </div>
  );
})
export default GradientBorderWrapper;
