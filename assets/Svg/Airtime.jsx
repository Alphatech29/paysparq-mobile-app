import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Airtime = ({ style, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    viewBox="0 0 153.806 103.806" 
    style={style}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#9DEBE5"
        d="m42.105 84.796 98.667-35.912a5 5 0 0 0 2.989-6.409l-23.942-65.779a5 5 0 0 0-6.408-2.988L14.743 9.62a5 5 0 0 0-2.988 6.409l23.941 65.778a5 5 0 0 0 6.409 2.989Z"
      />
      <Path
        fill="#4DBE86"
        d="M84.598 48.046a17.5 17.5 0 1 0-11.97-32.89 17.5 17.5 0 0 0 11.97 32.89Zm-8.55-23.492a7.5 7.5 0 1 1 5.13 14.093 7.5 7.5 0 0 1-5.13-14.093ZM43.167 65.786l18.794-6.84a2.5 2.5 0 0 1 1.71 4.698l-18.794 6.84a2.5 2.5 0 0 1-1.71-4.698ZM25.211 16.452l18.794-6.84a2.5 2.5 0 1 1 1.71 4.698l-18.794 6.84a2.5 2.5 0 1 1-1.71-4.698Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          d="M153.806 62.763 41.043 103.806 0-8.958 112.764-50z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Airtime;
