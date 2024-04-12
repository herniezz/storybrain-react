import { memo, SVGProps } from 'react';

const PlayButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 68 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_180_349)'>
      <path
        d='M66.52 7.83375C65.74 4.90375 64.03 2.42375 61.1 1.64375C55.79 0.22375 34 0.09375 34 0.09375C34 0.09375 12.21 0.22375 6.9 1.64375C3.97 2.42375 2.27 4.90375 1.48 7.83375C0.0600001 13.1437 0 24.0938 0 24.0938C0 24.0938 0.0600001 35.0437 1.48 40.3537C2.26 43.2837 3.97 45.7638 6.9 46.5438C12.21 47.9638 34 48.0938 34 48.0938C34 48.0938 55.79 47.9638 61.1 46.5438C64.03 45.7638 65.74 43.2837 66.52 40.3537C67.94 35.0437 68 24.0938 68 24.0938C68 24.0938 67.94 13.1437 66.52 7.83375Z'
        fill='#212121'
        fillOpacity={0.8}
      />
      <path d='M45.0004 23.9063L27.0004 13.9062V33.9063' fill='white' />
    </g>
    <defs>
      <clipPath id='clip0_180_349'>
        <rect width={68} height={48} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(PlayButtonIcon);
export { Memo as PlayButtonIcon };
