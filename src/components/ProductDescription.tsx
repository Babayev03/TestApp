import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ProductDescription = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.titleText}>Description:</Text>
      <Text style={styles.text}>
        Get a little lift from these Sam Edelman sandals featuring ruched straps
        and leather lace-up ties, while a braided jute sole makes a fresh
        statement for summer.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginBottom: wp('5%'),
  },
  titleText: {
    fontSize: wp('5%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    marginVertical: wp('3%'),
  },
  text: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
});

export default ProductDescription;
