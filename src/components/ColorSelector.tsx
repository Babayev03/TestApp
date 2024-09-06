import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ColorOption from './ColorOption';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <View style={styles.colorContainer}>
      {colors.map(color => (
        <ColorOption
          key={color}
          color={color}
          selected={selectedColor === color}
          onPress={() => onSelectColor(color)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    width: hp('5%'),
    height: hp('14%'),
    borderRadius: wp('15%') / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ColorSelector;
