import { View, Text,Image } from 'react-native'
import React from 'react'
const ImageComponents = () => {
  return (
    <View>
        <Text>Image</Text>
      <Image source={require('../assets/img1.jpg')}
      style={{ width: '100%', height:"auto", aspectRatio: 16 / 8 }}
    //   resizeMode="contain"
    
      />
    </View>
  )
}

export default ImageComponents