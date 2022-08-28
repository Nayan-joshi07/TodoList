import React from "react";
import {StyleSheet, View, Text, KeyboardAvoidingView, Platform } from "react-native";
import Task from "./Component/Task";

export default function App(){
  return(
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            <Task text = {'Text1'}/>
            <Task text = {'Text2'}/>
            <Task text ={'Text3'}/>
          </View>
        </View>

<KeyboardAvoidingView behavior={Platform.OS === 'ios' ?'padding':'height'} style={styles.writeTaskWrapper}></KeyboardAvoidingView>
      </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor :'#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:"bold",
  },
  items:{
    marginTop:30,
  },
});