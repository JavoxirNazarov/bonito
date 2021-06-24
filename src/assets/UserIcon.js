import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636"
        stroke="#806ED8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.707 18.958A7.848 7.848 0 0012 16.5a7.845 7.845 0 00-5.707 2.459M13.988 8.325a2.812 2.812 0 11-3.977 3.976 2.812 2.812 0 013.977-3.976"
        stroke="#806ED8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
