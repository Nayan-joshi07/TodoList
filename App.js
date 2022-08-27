import React from "react";
import {StyleSheet, View, Text } from "react-native";
import Task from "./Component/Task";

export default function App(){
  return(
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            <Task/>
          </View>
        </View>

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
  }
});