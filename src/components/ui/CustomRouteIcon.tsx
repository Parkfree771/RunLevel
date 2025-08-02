import React from 'react';

export const CustomRouteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="6" cy="6" r="2.5" fill="currentColor" />
    <circle cx="18" cy="18" r="2.5" fill="currentColor" />
    <path d="M 6 6 C 18 6, 6 18, 18 18" />
  </svg>
);
