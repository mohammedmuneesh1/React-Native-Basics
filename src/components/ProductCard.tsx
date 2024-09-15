

import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const ProductCard = () => {
  return (
    <View style={style.parentContainer}>
      <Text style={style.productPrice}>$ 20000</Text>
      <Image  source={require("../assets/img1.jpg")} style={style.productImage}/>
      <View style={style.productNameRatingContainer}>
        <Text style={style.productName}>Product Name </Text>
        <Text style={style.productRating}>Rating: 3.5</Text>
      </View>
      <Text style={style.productDescription}>Here is some random car description</Text>

      <Pressable style={style.cartBtn}>
        <Text style={style.cartBtnText}>Add To Cart</Text>
      </Pressable>


    </View>
  )
}

const style = StyleSheet.create({
    parentContainer:{
        // width:"100%",
        height:"auto",
        backgroundColor:"red",
        paddingHorizontal:"4%",
    },
    productPrice:{
        alignSelf:"flex-start",
        fontSize:20,
        fontWeight:"semibold",
        color:"white",
        backgroundColor:"black",
        paddingHorizontal:25,
        paddingVertical:10,
        borderRadius:8
    },
    productImage:{
        // marginHorizontal:10,
        aspectRatio: 16 / 14,
        width:"100%",
        height:"auto",
        marginVertical:13
    },
    productNameRatingContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        marginVertical:10

    },
    productName:{
        fontSize:16,
        fontWeight:"bold",
        color:"black",
    },
    productRating:{
        fontSize:13,
        color:"black",
        fontWeight:'light',
        letterSpacing:0.5,


    },
    productDescription:{
        fontSize:10,
        fontWeight:"light",
        letterSpacing:0.5,
        color:"black",
        marginVertical:10,
    },
    cartBtn:{
        backgroundColor:"black",
        paddingVertical:10,
        borderRadius:8,
        alignItems:"center",
    },
    cartBtnText:{
        color:"white",
        fontWeight:"bold",
        fontSize:16,

    }



})




export default ProductCard;