//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { colors } from '../../styles';
import { setAuthData } from '../auth/session';
import Toast from 'react-native-toast-message';

// create a component
function Profile({ navigation }) {
    const profile = useSelector(state => state.session.profile);
    const dispatch = useDispatch();
    console.log('profile is--->', profile)
    return (
        <View style={style.container}>
            <View>
                <Text>
                    Helllo {profile.fullname}
                </Text>
            </View>
            <View style={{ position: 'absolute', bottom: 100 }}>
                <Button onpress={() => {
                    dispatch(setAuthData(null, null));
                    Toast.show({
                        text1: 'Logout successfully',
                        type: 'success'
                    })
                }} text="Logout" backgroundColor={colors.secondaryColor} color={true} />
            </View>
        </View>
    );
}

// define your styles
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 25
    },
});

//make this component available to the app
export default Profile;
