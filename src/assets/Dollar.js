import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Dollar(props) {
  return (
    <Svg width={28} height={30} viewBox="0 0 28 30" fill="none" {...props}>
      <G
        filter="url(#prefix__filter0_d)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M17 9.75v-.143A2.107 2.107 0 0014.893 7.5h-1.786a2.107 2.107 0 00-.513 4.15l2.812.705a2.107 2.107 0 01-.513 4.151H13.25v-.005h-.143A2.108 2.108 0 0111 14.393v-.143M14 6v.95M14 18v-.95" />
        <Path d="M20.364 5.636A9 9 0 117.636 18.364 9 9 0 0120.364 5.636" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default Dollar;
