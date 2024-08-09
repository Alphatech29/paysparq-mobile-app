import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Convert = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-exchange"
    {...props}
  >
    <Path
     stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0" 
     stroke="#F66B04"
    />
    <Path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6-3-3M5 16v-5a5 5 0 0 1 5-5h3l-3-3m0 6 3-3" 
     stroke="#F66B04"
    />
  </Svg>
)
export default Convert
