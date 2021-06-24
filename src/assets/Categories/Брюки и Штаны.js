import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={29} height={27} viewBox="0 0 29 27" fill="none">
      <Path
        d="M20.537 0H8.463c-.718 0-1.302.544-1.302 1.213V2.835l1.264 23.758c.012.228.214.407.46.407h4.422c.243 0 .444-.176.46-.402l.733-10.79.734 10.79c.015.226.216.402.46.402h4.421c.246 0 .448-.18.46-.407l.68-12.775c.012-.237-.183-.438-.437-.45-.256-.01-.47.17-.483.407l-.658 12.368h-3.552L14.96 9.009V7.85l1.396-.662a.426.426 0 00.251-.382V3.243h.624c.03.505.187 1.362.867 2.064.612.631 1.495.99 2.63 1.069l-.314 5.908c-.012.237.183.438.437.45.256.01.47-.17.483-.407l.332-6.245a.4.4 0 00.01-.195l.163-3.052v-.01-1.612C21.84.544 21.256 0 20.538 0zm-9.261.857h2.272v1.528h-2.273V.857zm-3.194.356c0-.196.17-.356.381-.356h1.891v1.528H8.082V1.213zm.023 2.03h2.798c-.029.38-.154 1.004-.633 1.495-.453.464-1.14.727-2.044.785l-.121-2.28zm5.935 5.766l-1.165 17.133H9.323L8.272 6.38c1.162-.071 2.066-.43 2.688-1.072.679-.702.837-1.56.866-2.064H14.04v5.766zm1.646-2.465l-.725.344V3.243h.725v3.3zm2.039-4.159h-3.256V.857h3.256v1.528zm3.05 3.133c-.877-.065-1.544-.326-1.987-.78-.48-.49-.605-1.116-.634-1.495h2.741l-.12 2.275zm.144-3.133h-2.273V.857h1.89c.211 0 .383.16.383.356v1.172z"
        fill={props.color}
      />
      <Path
        d="M15.32 2.05c.12 0 .239-.046.325-.125a.417.417 0 00.135-.304.416.416 0 00-.135-.303.481.481 0 00-.652 0 .417.417 0 00-.134.303c0 .113.049.224.134.304.086.08.205.125.326.125z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
