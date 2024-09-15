

import { View, Text } from 'react-native'
import React from 'react'

const MultiplyComponent = () => {
    const multiplyFn = (a:number,b:number) => a*b;
  return (
    <View>
      {/* <Text>MultiplyComponent</Text> */}
      <Text>This is the multiplication of 2*2 = {multiplyFn(2,2)}</Text>
      <Text>This is the Expression plus of 2 + 2 = {2+2}</Text>
    </View>
  )
}

export default MultiplyComponent;