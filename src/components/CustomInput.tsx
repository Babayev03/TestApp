import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SvgShow from '../assets/icons/Show';
import SvgHide from '../assets/icons/Hide';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  touched?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  touched,
}) => {
  const [visible, setVisible] = useState(secureTextEntry);
  return (
    <>
      <TextInput
        right={
          secureTextEntry ? (
            <TextInput.Icon
              style={{marginRight: wp('2%')}}
              icon={() => (visible ? <SvgShow /> : <SvgHide />)}
              onPress={() => setVisible(!visible)}
            />
          ) : null
        }
        label={label}
        textColor="black"
        placeholderTextColor={'black'}
        contentStyle={{color: 'black'}}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        underlineColor={'#3d3d3d'}
        underlineStyle={styles.underline}
        secureTextEntry={visible}
        activeUnderlineColor={'black'}
      />
      <Text style={styles.errorText}>{error && touched ? error : ''}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    fontSize: 14,
    paddingHorizontal: wp('6%'),
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginLeft: wp('6%'),
  },
  underline: {
    marginHorizontal: wp('6%'),
  },
});

export default InputField;
