import * as React from "react"
import Svg, { Path } from "react-native-svg"


const Chevronleft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#451805"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m15.5 19-7-7 7-7"
    />
  </Svg>
)
export default Chevronleft
