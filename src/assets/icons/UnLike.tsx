import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgUnLike = ({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <Svg
    width={width || 10}
    height={height || 10}
    fill={color || '#000'}
    viewBox="0 0 10 10">
    <Path
      stroke={color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.165 4.822c-.477-1.49.08-3.191 1.644-3.695a2.67 2.67 0 0 1 2.414.406c.646-.5 1.587-.67 2.409-.406 1.563.504 2.124 2.206 1.647 3.695C8.537 7.182 5.223 9 5.223 9s-3.29-1.79-4.058-4.178Z"
      clipRule="evenodd"
    />
    <Path
      stroke={color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 2.646c.476.153.812.578.853 1.076"
    />
  </Svg>
);

export default SvgUnLike;
