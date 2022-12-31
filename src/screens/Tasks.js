import React, { useState } from 'react';
import Header  from '../components/AppHeader';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { color } from '@rneui/base';
import { StackActions, useNavigation } from '@react-navigation/native';
import { Input, CheckBox, Button } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { appActions, appSelector } from '../redux/appRedux';
import { v4 as uuid } from 'uuid';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



const Tasks = () => {

  const dispatch = useDispatch();
  const todo = useSelector(appSelector.todo);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e);
  };

  const addTask = () => {
    dispatch(appActions.addTodo({text: text, id: todo.length + 1 }));
    setText('');
  };

  const handleChecked = (e, id) => {
    dispatch(appActions.setCompletedTodo({id, completed: e}));
  }

  const delTask = (id) => {
    dispatch(appActions.deleteTodo(id));
  };


  return (
    <SafeAreaProvider>
      <Header title="tareas"/>
      <ScrollView style={ styles.viewGrid }>
        <View style={{flex:1, width: WIDTH, alignItems:'center'}}>
          <Input
          placeholder = "Nueva Tarea"
          value={text}
          onChangeText = { (e)=> handleChange(e) }
          />
          <Button title="Agregar Tarea" onPress={() => addTask()} buttonStyle={{marginBottom: '5%', maxWidth:'50%'}}/>

        </View>

        <View style={{flex:4, width: WIDTH, alignItems:'center'}}>

          {todo.map((t, index) =>
            <View key={t.id} style={{flexDirection:'row', width:WIDTH, justifyContent:'space-around'}}>
              <View style={{textAlign:'left', justifyContent:'center'}}>
                <Text key={t.id} >{t.text}</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <CheckBox
                  checked={t.completed}
                  onPress={() => handleChecked(!t.completed, t.id)}
                />
                <Button title="X" onPress={ () => delTask(t.id) } buttonStyle={{backgroundColor:'red', borderRadius: 50}} />
              </View>
            </View>

          )}
        </View>

      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  textButton: {
    justifyContent: 'center',
    textAlign:'center',
    color:'black',
    fontSize: 20,
    fontWeight: '700',
  },
  viewGrid: {
    flex:1,
    width:'100%',
    height:'100%',
  },
  buttonDel:{
    backgroundColor: 'rgba(214, 61, 57, 1)',
    padding: 10,
    width: '50%',
    marginTop:'20%',
    borderRadius: 10,
    textAlign:'center',
  },
  buttonGrid: {
    elevation: 3,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#606060',
    width: WIDTH * .4,
    height: HEIGHT * .4,
    borderRadius: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Tasks;
