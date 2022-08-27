import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const Flex = () => {
    return (
       <View style={[styles.container,{
          flexDirection:"column"
       }]}>
        <View style={styles.redBox}/>
        <View style={styles.darkOrange}/>
        <View style={styles.green}/>
       </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    redBox:{
      flex:1,
      backgroundColor:"red",
    },
    darkOrange:{
       flex:2,
       backgroundColor:"darkorange",
    },
    green:{
    flex:3,
    backgroundColor:"green",
    }
  });
  
  export default Flex;