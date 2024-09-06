import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface AddToCartButtonProps {
  isAddedToCart: boolean;
  onPress: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  isAddedToCart,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#000000',
    width: wp('54%'),
    height: hp('7%'),
    borderRadius: wp('60%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
});

export default AddToCartButton;
