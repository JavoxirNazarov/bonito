import * as React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Svg, {Mask, Circle, G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={widthPercentageToDP(6)}
      height={widthPercentageToDP(6)}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={44}
        height={44}>
        <Circle cx={22} cy={22} r={22} fill="#C4C4C4" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#fff" d="M0 0h44v44H0z" />
        <Path fill="#4657E8" d="M0 15h44v15H0z" />
        <Path fill="#E84646" d="M0 30h44v14H0z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
