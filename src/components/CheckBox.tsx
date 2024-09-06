import {TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import SvgCheckBoxChecked from '../assets/icons/CheckBoxChecked';
import SvgCheckBoxNotChecked from '../assets/icons/CheckBoxNotChecked';

interface IProps {
  isChecked: boolean;
  onPress: () => void;
}

const CheckBox = ({isChecked, onPress}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isChecked ? <SvgCheckBoxChecked /> : <SvgCheckBoxNotChecked />}
    </TouchableOpacity>
  );
};

export default memo(CheckBox);
