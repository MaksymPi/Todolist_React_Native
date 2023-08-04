
import React, {useState} from "react";
import { TextInput, Text, StyleSheet, Button, View } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState('');
    
    const onChange = (text) => {
        setValue(text);
    };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="write a task"
      />
      <Button color='green' title='Add a task' onPress={() => addHandler(text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical:30,
    marginHorizontal:'20%',
    width: '60%'
  }
});
