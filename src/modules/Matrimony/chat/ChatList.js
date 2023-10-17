import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { colors } from '../../../styles'
import styles from '../../navigation/styles'
import ChatCard from '../components/ChatCard'

export default function ChatList({navigation}) {
  return (
    <View style={style.container}>
        <View>
        <View style={style.header}>
          {/* <Icon
            name="chatbubble-ellipses-outline"
            type="ionicon"
            color={colors.black}
            size={25}
          /> */}
          <Text style={[styles.h3,{fontWeight:"700"}]}>Inbox</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
      <ChatCard navigation={navigation}/>
      <ChatCard navigation={navigation}/>
      <ChatCard navigation={navigation}/>
      <ChatCard navigation={navigation}/>
      <ChatCard navigation={navigation}/>

    
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    paddingVertical: 15,
  },
  chatContainer:{
    flexDirection:"column",
    paddingHorizontal:20,
  }
})