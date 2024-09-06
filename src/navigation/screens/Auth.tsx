import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  KeyboardToolbar,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-controller';
import AuthForm from '../../components/AuthForm';
import {StackParamList} from '../StackParamlist';
import {useNavigation} from '@react-navigation/native';

const Auth = () => {
  const navigation = useNavigation<StackParamList>();

  const handleConfirm = (values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log(values);
    navigation.replace('Tab');
  };

  return (
    <>
      <KeyboardAwareScrollView
        bottomOffset={65}
        showsVerticalScrollIndicator={false}
        extraKeyboardSpace={65}
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
        style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.AuthText}>Sign Up</Text>
          <Text style={styles.lightText}>Create a new account</Text>
        </View>
        <AuthForm onConfirm={handleConfirm} />
      </KeyboardAwareScrollView>
      <KeyboardToolbar />
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: wp('55%'),
    height: hp('20%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
  textContainer: {
    marginTop: hp('5%'),
    marginLeft: wp('6%'),
  },
  AuthText: {
    fontSize: wp('6%'),
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  lightText: {
    color: 'black',
    fontSize: wp('4%'),
    fontFamily: 'Poppins-Regular',
    width: wp('80%'),
    marginTop: hp('1%'),
  },
});
