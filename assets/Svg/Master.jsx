import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const Master = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={25}
    fill="none"
    {...props}
  >
    <Circle cx={12.5} cy={12.5} r={12.5} fill="red" />
    <Circle cx={26.5} cy={12.5} r={12.5} fill="#F79F1A" fillOpacity={0.8} />
  </Svg>
)
export default Master
