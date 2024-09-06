import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgSelected = ({width, height}: {width?: number; height?: number}) => (
  <Svg width={width || 10} height={height || 7} fill="none" viewBox="0 0 10 7">
    <Path
      fill="#000"
      d="M3.988 5.095 8.882.2l.753.753L3.988 6.6.6 3.212l.753-.753 2.635 2.636Z"
    />
  </Svg>
);
export default SvgSelected;
