import React from 'react';
import { View, StyleSheet, Text, Image,Dimensions, Pressable, Platform } from 'react-native';
const { height } = Dimensions.get('window'); // Get the height of the window
const UserProfile = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={require("@/src/assets/userProfile.jpg")} style={styles.userProfileImage} />
        <Text style={styles.userName}>Charlie clifton</Text>
        <Text style={styles.userProfileDescription}>My Place Is California and i love coding</Text>
        <Pressable style={styles.viewProfileBtn}>
          <Text >View Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height:"auto",
    alignItems: "center", 
    paddingVertical:40,


  },
  container: {
    paddingHorizontal: 10,
    width: "90%",
    paddingVertical: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    ...Platform.select({
      ios:{
        shadowColor: "black",
      },
      android:{
        elevation: 10
      }
    })
  },
  userProfileImage:{
    width:100,
    height:100,
    borderRadius:50,
  },
  userName:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:20,
    color:"black",
  },
  userProfileDescription:{
    fontSize:16,
    color:"black",
    marginTop:10,
    fontWeight:'light',
  },
  viewProfileBtn:{
    backgroundColor:"gray",
    marginTop:20,
    width:"100%",
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:5,
    alignItems: 'center',
  }

});

export default UserProfile;