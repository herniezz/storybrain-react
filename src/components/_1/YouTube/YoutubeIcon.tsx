import { memo, SVGProps } from 'react';

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.1992 14.1531V9.70312L27.9892 17.4931L20.1992 25.2831V20.7231C16.2692 20.6531 12.0992 21.7731 9.33923 24.7231C8.79923 25.0931 7.59923 27.2531 8.11923 25.6131C9.07923 21.2831 11.7992 17.1431 15.9792 15.3431C17.3092 14.7431 18.7392 14.3631 20.1892 14.1531H20.1992Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(YoutubeIcon);
export { Memo as YoutubeIcon };
