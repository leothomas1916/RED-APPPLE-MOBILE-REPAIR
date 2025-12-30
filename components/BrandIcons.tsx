import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const AppleLogo: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg 
    viewBox="0 0 384 512" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className} 
    {...props}
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
);

export const AndroidLogo: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg viewBox="0 0 576 512" width={size} height={size} fill="currentColor" className={className} {...props}>
     <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
  </svg>
);

export const GoogleLogo: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} {...props}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.1-1.147 8.24-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

export const SamsungLogo: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} fill="currentColor" className={className} {...props}>
    {/* Correct Samsung Ellipse Logo Path */}
    <path d="M401 144c-3.3-13.6-21.5-27-52.9-38-34.7-12.1-80.8-19.1-129-19.1s-94.4 7-129.1 19.1c-31.4 11-49.6 24.4-52.9 38-3.9 16.2-3.9 33.1 0 49.3 3.3 13.6 21.5 27 52.9 38 34.7 12.1 80.8 19.1 129.1 19.1s94.4-7 129-19.1c31.4-11 49.6-24.4 52.9-38 3.9-16.2 3.9-33.1 0-49.3zm-69.6 42.4c-31.1 11.2-72 17.6-116.3 17.6s-85.2-6.4-116.3-17.6c-26.6-9.6-41.2-20.9-43.6-32 .5-2 1.5-3.8 2.8-5.5 8.1-10.4 34.9-18.8 69.3-25.2 3.8-.7 7.7-1.3 11.7-1.9-5-1.5-10.3-2.8-15.8-3.8-29-5.3-51.5 3.9-58.4 12.5-6.5 8.1-6.5 19.1 0 27.2 10 12.5 45.4 23.9 91.6 29.8 4.2.5 8.4 1 12.7 1.4-5.3 1.8-10.8 3.5-16.5 5.1-39.5 11-85 15.6-118.9 11.1v45.3c35.4 5.9 84.4.9 127.3-11.1 52.6-14.7 93.3-43.9 83.1-68.4-1.6-4.2-4.5-8-8.5-11.2-1.9 1.5-4 2.9-6.2 4.1z"/>
  </svg>
);

export const IWatchIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
       <rect x="6" y="5" width="12" height="14" rx="4" />
       <path d="M9 2v3" />
       <path d="M15 2v3" />
       <path d="M9 19v3" />
       <path d="M15 19v3" />
       <circle cx="17.5" cy="9.5" r="1.5" stroke="none" fill="currentColor" />
       <path d="M16 10v2" strokeWidth="1"/>
    </svg>
);