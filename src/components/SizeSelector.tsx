import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
}) => {
  return (
    <View style={styles.sizeContainer}>
      {sizes.map(size => (
        <TouchableOpacity
          key={size}
          style={[
            styles.sizeButton,
            selectedSize === size && styles.selectedSizeButton,
          ]}
          onPress={() => onSelectSize(size)}>
          <Text
            style={[
              styles.sizeText,
              selectedSize === size && styles.selectedSizeText,
            ]}>
            {size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sizeContainer: {
    flexDirection: 'row',
  },
  sizeButton: {
    marginRight: wp('3%'),
    width: wp('10%'),
    height: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: wp('10%') / 2,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  selectedSizeButton: {
    backgroundColor: '#000000',
  },
  sizeText: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#888888',
  },
  selectedSizeText: {
    color: '#FFFFFF',
  },
});

export default SizeSelector;
