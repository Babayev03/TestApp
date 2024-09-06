import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StackParamList} from '../StackParamlist';

const Profile = () => {
  const navigation = useNavigation<StackParamList>();
  const handleLogout = () => {
    navigation.replace('Auth');
    console.log('Logged out');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#000000',
    paddingHorizontal: hp('4%'),
    paddingVertical: hp('1.5%'),
    borderRadius: hp('5%'),
  },
  buttonText: {
    fontSize: hp('2.5%'),
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Profile;
