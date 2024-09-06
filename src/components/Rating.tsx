import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SvgStar from '../assets/icons/Star';

const Rating = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {Array(5)
          .fill(0)
          .map(index => (
            <SvgStar key={index + Math.random()} />
          ))}
      </View>
      <Text style={styles.text}>{' (320 Review)'}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp('1%'),
    paddingBottom: 3,
  },
  text: {
    fontSize: hp('1.8%'),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
});
