import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PayBills = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path 
    fill="#F66B04"
    d="M15 8a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Zm-1 3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm-4 4H6a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm13-3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7h3a1 1 0 0 1 1 1Zm-6-8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h13Zm4 9h-2v8h1a1 1 0 0 0 1-1Z" />
  </Svg>
)
export default PayBills
