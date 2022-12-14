import React ,{useState} from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Task from "./Component/Task";

export default function App() {
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);
  const handleAddTask = ()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
        console.log('Hello');
  }

  const completeTask = (index) =>{
      let tempItems = [...taskItems];
      tempItems.splice(index,1);
      setTaskItems(tempItems);
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {
             taskItems.map((value,index) =>{
                return( 
                  <TouchableOpacity key = {index} onPress={()=> completeTask(index)}>
                <Task text={value}/>
                </TouchableOpacity>
                )
             })
          }
          {/* <Task text={'Text1'} />
          <Task text={'Text2'} />
          <Task text={'Text3'} /> */}
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Task'} value ={task}onChangeText={(text)=>{setTask(text)}}></TextInput>
        <TouchableOpacity onPress={() =>handleAddTask()}>
          <View styles={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  input: {
    paddingVertical : 15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText: {},
});