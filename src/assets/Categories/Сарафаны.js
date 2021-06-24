import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={29} height={27} viewBox="0 0 29 27" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M25.993 15.847c-.07-.207-.308-.322-.531-.257-.223.066-.347.287-.276.495 1.334 3.92 1.44 8.298 1.444 9.39-.71.127-1.168.207-1.236.217-1.936.29-3.91.413-5.88.468-.045-1.052-.202-3.895-.69-6.906-.698-4.32-1.77-7.25-3.195-8.742h5.93c1.035.766 1.934 1.878 2.674 3.306a.438.438 0 00.565.184.383.383 0 00.197-.526c-.795-1.536-1.774-2.74-2.91-3.58l-.443-1.851c.564-.193.967-.51 1.2-.949.318-.6.227-1.281.097-1.743.432-.065.812-.264 1.052-.559.26-.321.333-.728.205-1.145a1.853 1.853 0 00-.394-.66c.385-.233.598-.603.6-1.076.007-.848-.67-1.571-1.608-1.72-.73-.117-1.481-.017-1.907.065l-1.662-.22A.446.446 0 0019.047 0H9.96a.447.447 0 00-.179.037L8.12.257C7.693.178 6.942.077 6.212.193c-.939.15-1.615.873-1.609 1.72.003.473.216.844.6 1.076-.06-.034-.355.557-.38.626-.143.396-.08.845.193 1.18.239.295.619.494 1.051.56-.13.46-.221 1.142.098 1.742.232.438.635.756 1.199.949l-.442 1.85c-2.197 1.624-3.761 4.534-4.65 8.656-.696 3.235-.745 6.206-.743 7.04 0 .307.236.577.559.641a34.777 34.777 0 003.127.462c.213 0 .396-.148.42-.35.027-.216-.14-.41-.372-.436a33.914 33.914 0 01-2.887-.425c.003-.939.072-3.739.727-6.777.387-1.793.914-3.37 1.567-4.683.759-1.528 1.693-2.708 2.777-3.51h5.966c-1.414 1.497-2.48 4.421-3.175 8.72-.492 3.043-.648 5.914-.69 6.938a66.879 66.879 0 01-1.684-.063c-.235-.012-.433.155-.446.372-.012.218.167.404.4.415 1.645.084 3.264.098 4.918.098 4.258 0 8.564.108 12.792-.523.104-.015.805-.14 1.375-.24.332-.06.573-.33.574-.644.002-1.255-.098-5.666-1.484-9.739zm-4.851-14.5l.005-.019a18.498 18.498 0 01.093-.33c.372-.06.905-.11 1.411-.028.52.082.908.485.905.938-.002.234-.075.462-.595.542a.413.413 0 00-.343.297.38.38 0 00.16.409c.127.087.51.405.604.71.137.447-.317.722-.756.722h-.273a.432.432 0 00-.356.183.371.371 0 00-.027.379c.005.01.463.941.111 1.599-.14.262-.406.455-.792.576-.377-.663-1.085-2.502-.147-5.978zM18.577.788l-.012.1a1.757 1.757 0 01-.006.039c-.194 1.305-.886 2.56-2.256 3.077-.87.327-2.112.387-3.021.188-1.685-.369-2.58-1.675-2.825-3.198l-.017-.12-.011-.086h8.148zM6.925 6.748c-.352-.657.106-1.589.11-1.597a.37.37 0 00-.025-.38.432.432 0 00-.358-.183H6.38c-.29 0-.554-.103-.688-.269-.1-.122-.122-.275-.068-.453.093-.303.468-.616.604-.71a.38.38 0 00.16-.41.413.413 0 00-.343-.296c-.52-.08-.593-.308-.595-.543-.003-.452.385-.855.905-.938.19-.03.382-.042.57-.042.312 0 .609.034.841.071.133.456.239.885.32 1.289l.008.035c.314 1.574.465 3.508-.38 5.002-.384-.12-.65-.314-.79-.575zm.905 2.976l.4-1.675.022-.03c.004-.003.008-.008.01-.012.881-1.187.988-2.825.89-4.213l-.002-.018a14.16 14.16 0 00-.51-2.79c.313-.043.634-.072.942-.13.066.352.102.643.204.99.282.96.818 1.853 1.691 2.45.69.47 1.634.718 2.482.746.718.024 1.434.03 2.138-.132l.031-.007c.687-.162 1.38-.522 1.878-.992.513-.485.795-1.059 1.063-1.679.048-.11.491-1.345.352-1.373l.945.126-.05.19a3.172 3.172 0 00-.01.037c-.554 2.075-.969 4.904.437 6.795l.01.013.023.029.4 1.675H7.83zm9.953 16.467c-2.081-.011-7.135-.006-7.389-.008.043-1.02.198-3.847.682-6.84.746-4.606 1.932-7.612 3.441-8.732 1.522 1.103 2.719 4.117 3.47 8.753.48 2.969.636 5.774.68 6.814-.295.006-.59.01-.884.013z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h29v27H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
