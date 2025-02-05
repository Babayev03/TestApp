import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgHomeIcon = ({color}: {color: string}) => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M19.0167 7.1419C19.6261 7.50161 20 8.15658 20 8.86423V18.0001C20 19.1047 19.1046 20.0001 18 20.0001H16C14.8954 20.0001 14 19.1047 14 18.0001V14C14 12.8955 13.1046 12 12 12V12C10.8954 12 10 12.8955 10 14V18.0001C10 19.1047 9.10457 20.0001 8 20.0001H6C4.89543 20.0001 4 19.1047 4 18.0001V8.86423C4 8.15658 4.37395 7.50161 4.98335 7.1419L10.9833 3.60023C11.6106 3.23 12.3894 3.23 13.0167 3.60023L19.0167 7.1419Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default SvgHomeIcon;
