import { memo, SVGProps } from 'react';

const YoutubeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.0002 8.01519C12.4702 8.01519 8.00024 12.4852 8.00024 18.0152C8.00024 23.5352 12.4702 28.0152 18.0002 28.0152C23.5202 28.0152 28.0002 23.5352 28.0002 18.0152C28.0002 12.4852 23.5202 8.01519 18.0002 8.01519ZM16.0002 19.0352V12.0152H18.0002V17.8752L23.1002 20.8252L22.1002 22.5552L16.0002 19.0352Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(YoutubeIcon2);
export { Memo as YoutubeIcon2 };
