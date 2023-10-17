import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../navigation/styles';
import Button from '../../components/Button';
import {colors} from '../../styles';

export default function ProfileDetail() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          source={require('../Matrimony/images/user.jpg')}
          resizeMode="contain"
          style={style.image}
        />
        <Image
          source={require('../../../assets/images/shadow.png')}
          resizeMode="contain"
          style={style.shadowImage}
        />
        <Text style={style.name}>Kartik Sharma</Text>
        <Text style={style.age}>27y | 5'8H</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={[styles.h6]}>Hobbies :</Text>
        <View style={{flexDirection:"row"}}>
        <View style={style.chip}>
          <Text style={[styles.p,{color:'#5a35b8'}]}>Gym</Text>
        </View>
        <View style={style.chip}>
          <Text style={[styles.p,{color:'#5a35b8'}]}>Travelling</Text>
        </View>
        </View>
        <Text style={[styles.h6]}>Basic Details :</Text>
     
        <Text style={[styles.p]}>
          Date of Birth :{'            '} 26-09-2000
        </Text>
        <Text style={[styles.p]}>
          Caste :{'                        '} Brahmin
        </Text>
        <Text style={[styles.p]}>Manglik :{'                    '} no</Text>
        <View style={{paddingVertical: 20}}>
          <Text style={[styles.h6]}>Religion Details : </Text>
          <Text style={[styles.p]}>
            Gotra :{'                         '} Brahmin
          </Text>
          <Text style={[styles.p]}>
            Dosh :{'                          '} Brahmin
          </Text>
        </View>
        <Text style={[styles.h6]}>Personal Details :</Text>
        <Text style={[styles.p]}>Complexion :{'               '} Fair</Text>
        <Text style={[styles.p]}>Blood Group :{'              '} B+</Text>
        <Text style={[styles.p]}>Spectacles :{'                '} Yes</Text>
        <View style={style.button}>
          <Button
            text={'Send Interest'}
            backgroundColor={colors.primaryColor}
            color={false}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 320,
    borderRadius: 15,
  },
  shadowImage: {
    width: '100%',
    position: 'absolute',
    top: -80,
  },
  name: {
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    position: 'absolute',
    bottom: 30,
    left: 25,
  },
  imageContainer: {
    position: 'relative',
    width:"100%",
    left:0,
    right:0
  },
  age: {
    fontSize: 13,
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 25,
  },
  infoContainer: {
    backgroundColor: '#ffff',
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
    padding: 20,
    flex: 1,
  },
  button: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 0,
    right: 0,
    marginHorizontal: 20,
  },
  chip:{
    alignSelf: 'flex-start',
    backgroundColor:"#dfd5f7",
    paddingHorizontal:10,
    paddingVertical:3,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:10,
    marginRight:10
  }
});
