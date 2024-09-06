import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SvgCheckBoxChecked = () => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <G id="Interface / Checkbox_Check">
        <Path
          id="Vector"
          d="m8 12 3 3 5 -6M4 16.8V7.2c0 -1.12 0 -1.68 0.218 -2.108 0.192 -0.377 0.497 -0.682 0.874 -0.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107 0.218 0.377 0.192 0.683 0.497 0.875 0.874 0.218 0.427 0.218 0.987 0.218 2.105v9.607c0 1.118 0 1.677 -0.218 2.104a2 2 0 0 1 -0.875 0.874c-0.427 0.218 -0.986 0.218 -2.104 0.218H7.197c-1.118 0 -1.678 0 -2.105 -0.218a2 2 0 0 1 -0.874 -0.874C4 18.48 4 17.92 4 16.8"
          stroke={'black'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default SvgCheckBoxChecked;
