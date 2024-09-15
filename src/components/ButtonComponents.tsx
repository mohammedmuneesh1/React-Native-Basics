import { View, Text, Button,Alert, Pressable, StyleSheet  } from 'react-native'
import React from 'react'

const ButtonComponents = () => {
  return (
    <View>
        <Button 
        title='hello'
        accessibilityLabel="Learn more about this purple button"
        onPress={() => Alert.alert('Simple Button pressed')}
        color={"red"}
        
        />
  <Pressable style={styles.button}>
      <Text style={styles.text}>I'm pressable!</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3498db', // Your desired background color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center', // Center the text horizontally
    },
    text: {
      color: '#fff', // Text color
      fontWeight: 'bold',
    },
  });

export default ButtonComponents