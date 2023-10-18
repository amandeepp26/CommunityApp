import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Icon, Image} from 'react-native-elements';
import {colors} from '../../../styles';
import styles from '../../navigation/styles';
import RNSTextInput from '../../../components/RNSTextInput';
import Button from '../../../components/Button';

export default function ChatBox({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const [myArray, setMyArray] = useState([]);

  const handleAddToArray = () => {
    const newObject = {id: myArray.length + 1, value: inputValue};
    setMyArray([...myArray, newObject]);
    setInputValue('');
  };
  const handleTextInputSubmit = () => {
    if (inputValue.trim() !== '') {
      handleAddToArray();
    }
  };
  return (
    <View style={style.container}>
      <View>
        <View style={style.header}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color={colors.black}
            size={25}
            style={{paddingHorizontal: 10}}
            onPress={() => navigation.goBack()}
          />
          <Image
            source={require('../images/user.jpg')}
            resizeMode="contain"
            style={{width: 30, height: 30, borderRadius: 100}}
          />
          <Text style={[styles.h3, {fontWeight: '700', paddingLeft: 10}]}>
            Kartik Sharma
          </Text>
        </View>
        
      </View>
      <ScrollView style={{backgroundColor: colors.white, marginTop: 3}}>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'flex-start',
            marginTop: 10,
            marginLeft: 10,
            borderWidth: 1,
            padding: 10,
            borderColor: '#d3d3d3',
            borderRadius: 15,
          }}>
          <Text style={[styles.p, {color: '#000', fontSize: 14}]}>Hello !</Text>
        </View>
        {myArray?.map(key => {
          return (
            <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
            <View style={style.chatBoxContainer}>
              <View>
              <View style={style.chatBox}>
                <Text style={[styles.p, {color: '#fff', fontSize: 14}]}>
                  {key.value}
                </Text>
              </View>
              <Text style={{fontSize:12,paddingTop:5,paddingLeft:5}}>10:23 PM</Text>
              </View>
            </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Type message..."
          value={inputValue}
          multiline
          onChangeText={text => setInputValue(text)}
          style={[style.textInput, {paddingRight: 40}]}
          onSubmitEditing={handleTextInputSubmit}
        />
        <Pressable
          onPress={handleAddToArray}
          style={{position: 'absolute', right: 20, top: 25}}>
          <Icon name="send" type="ionicon" color={colors.primaryColor} />
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    paddingVertical: 15,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopColor: '#d3d3d3',
    borderTopWidth: 1,
  },
  textInput: {
    margin: 10,
    paddingHorizontal: 15,
    color: colors.black,
    backgroundColor: colors.white,
    borderColor: '#d3d3d3',
    fontSize: 15,
  },
  chatBox: {
    alignItems: 'left',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginRight: 10,
    backgroundColor: colors.primaryColor,
    borderWidth: 1,
    padding: 10,
    borderColor: '#d3d3d3',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  chatBoxContainer: {
    width: 220,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  
  },
});
