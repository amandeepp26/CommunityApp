import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import styles from '../../navigation/styles';
import {colors} from '../../../styles';

export default function ChatCard({navigation}) {
  return (
    <Pressable
      style={style.container}
      onPress={() => navigation.navigate('ChatBox')}>
      <Image
        source={require('../images/user.jpg')}
        resizeMode="contain"
        style={{width: 50, height: 50, borderRadius: 100}}
      />
      <View style={style.userInfoContainer}>
        <Text style={[styles.h4, {fontWeight: '600'}]}>Kartik Sharma</Text>
        <Text style={[styles.p, {color: '#000', fontSize: 15}]}>
          Hello, what are you doing..?
        </Text>
      </View>
      <View style={style.messageInfo}>
        <Text style={[styles.p]}>23mins</Text>
        <View style={style.messageCount}>
          <Text style={[styles.p, {color: '#fff'}]}>3</Text>
        </View>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 18,
    marginBottom: 18,
    borderBottomColor: '#d3d3d3',
  },
  userInfoContainer: {
    paddingLeft: 10,
  },
  messageInfo: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  messageCount: {
    backgroundColor: colors.primaryColor,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: 22,
    right: 0,
  },
});
