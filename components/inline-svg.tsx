import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface InlineSvgProps {
  size?: number;

  className?: string;
}

const InlineSvg = ({ size, className }: InlineSvgProps) => {
  return (
    <View className={`p-[91px] bg-[#D9D9D9] rounded-2xl ${className}`}>
      <Svg width={size} height={size}>
        <Path
          d="M30 126C26.7 126 23.876 124.826 21.528 122.478C19.18 120.13 18.004 117.304 18 114V30C18 26.7 19.176 23.876 21.528 21.528C23.88 19.18 26.704 18.004 30 18H114C117.3 18 120.126 19.176 122.478 21.528C124.83 23.88 126.004 26.704 126 30V114C126 117.3 124.826 120.126 122.478 122.478C120.13 124.83 117.304 126.004 114 126H30ZM30 114H114V30H30V114ZM36 102H108L85.5 72L67.5 96L54 78L36 102Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default InlineSvg;
