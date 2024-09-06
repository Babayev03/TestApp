import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CampaignData} from '../constants/campingData';

interface Props {
  data: CampaignData;
}

const CampaignCard: React.FC<Props> = ({data}) => {
  const {backgroundImage, discount, title, promo} = data;

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.discountText}>{discount}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.promoText}>{promo}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('69%'),
    height: hp('20%'),
    borderRadius: wp('5%'),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: wp('3%'),
    paddingLeft: wp('4%'),
  },
  discountText: {
    fontSize: wp('5.5%'),
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  titleText: {
    fontSize: wp('4%'),
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  promoText: {
    fontSize: wp('3.5%'),
    color: '#000',
    fontFamily: 'Poppins-Light',
    paddingTop: wp('1.5%'),
  },
  button: {
    position: 'absolute',
    bottom: wp('4%'),
    left: wp('4%'),
    backgroundColor: '#000',
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('10%'),
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: wp('3%'),
    alignSelf: 'center',
  },
});

export default CampaignCard;
