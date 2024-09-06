import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Formik} from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import CheckBoxContainer from './CheckBoxContainer';
import InputField from './CustomInput';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

interface IAuthFormProps {
  onConfirm: (values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({onConfirm}) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        onConfirm(values);
      }}>
      {({handleChange, handleSubmit, values, errors, touched}) => (
        <View style={styles.inputConainer}>
          <InputField
            label="Username"
            value={values.username}
            error={errors.username}
            onChangeText={handleChange('username')}
            touched={touched.username}
          />
          <InputField
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            error={errors.email}
            touched={touched.email}
          />
          <InputField
            label="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry
            error={errors.password}
            touched={touched.password}
          />
          <InputField
            label="Confirm Password"
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            error={errors.confirmPassword}
            secureTextEntry
            touched={touched.confirmPassword}
          />
          <CheckBoxContainer
            isChecked={isChecked}
            onToggle={() => setChecked(!isChecked)}
          />
          <TouchableOpacity
            style={[
              styles.loginButton,
              {backgroundColor: isChecked ? 'black' : '#9B9B9B'},
            ]}
            onPress={() => handleSubmit()}
            disabled={!isChecked}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: hp('3%'),
  },
  inputAddress: {
    backgroundColor: 'white',
    fontSize: 14,
    paddingHorizontal: wp('6%'),
  },
  textContainer: {
    marginTop: hp('5%'),
    marginLeft: wp('6%'),
  },
  inputConainer: {
    marginTop: hp('3%'),
  },
  AuthText: {
    fontSize: wp('6%'),
    color: 'black',
  },
  lightText: {
    color: 'black',
    fontSize: wp('4%'),
    width: wp('80%'),
    marginTop: hp('1%'),
  },
  loginButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('7%'),
    width: wp('88%'),
    marginHorizontal: wp('6%'),
    marginVertical: hp('2%'),
    borderRadius: wp('88%') / 2,
    marginTop: hp('5%'),
  },
  buttonText: {
    color: 'white',
    fontSize: wp('5%'),
    fontFamily: 'Poppins-Bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: wp('5.5%'),
    marginVertical: wp('2%'),
    gap: wp('2%'),
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginLeft: wp('6%'),
  },
});

export default AuthForm;
