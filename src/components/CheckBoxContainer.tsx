import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CheckBox from './CheckBox';

interface CheckBoxContainerProps {
  isChecked: boolean;
  onToggle: () => void;
}

const CheckBoxContainer: React.FC<CheckBoxContainerProps> = ({
  isChecked,
  onToggle,
}) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox isChecked={isChecked} onPress={onToggle} />
      <Text style={[styles.lightText, {opacity: isChecked ? 1 : 0.5}]}>
        By creating an account you have to agree with our terms & conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: wp('5.5%'),
    marginVertical: wp('2%'),
    gap: wp('2%'),
    alignItems: 'center',
  },
  lightText: {
    color: 'black',
    fontSize: wp('4%'),
  },
});

export default CheckBoxContainer;
