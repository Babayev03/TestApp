import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgArrowLeft = ({width, height}: {width?: number; height?: number}) => (
  <Svg width={width || 10} height={height || 15} fill="none" viewBox="0 0 7 12">
    <Path
      fill="#fff"
      d="M6 11.307.692 5.999 6 .691l.708.708-4.6 4.6 4.6 4.6-.708.708Z"
    />
  </Svg>
);

export default SvgArrowLeft;
