import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={onDecrease}>
        <Text style={styles.quantityText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={onIncrease}>
        <Text style={styles.quantityText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DEDEDE',
    justifyContent: 'space-between',
    width: hp('10%'),
    height: hp('4%'),
    paddingHorizontal: wp('2%'),
    borderRadius: wp('5%'),
  },
  quantityText: {
    fontSize: hp('2.5%'),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
});

export default QuantitySelector;
