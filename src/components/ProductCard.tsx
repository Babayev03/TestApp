import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SvgUnLike from '../assets/icons/UnLike';
import SvgLike from '../assets/icons/Like';
import {ProductData} from '../constants/productData';
import {StackParamList} from '../navigation/StackParamlist';

interface ProductCardProps {
  navigation: StackParamList;
  data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({navigation, data}) => {
  const [liked, setLiked] = useState(false);
  const {title, text, price, image} = data;

  const navigateToDetailScreen = () => {
    navigation.navigate('Detail', {data});
  };

  const handleLikePress = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={navigateToDetailScreen} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <TouchableOpacity onPress={handleLikePress} style={styles.likeButton}>
        {liked ? (
          <SvgUnLike width={10} height={10} color={'#fff'} />
        ) : (
          <SvgLike width={10} height={10} color={'#fff'} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('40%'),
    height: hp('30%'),
    borderRadius: wp('5%'),
    backgroundColor: '#FFFFFF',
    margin: 10,
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    marginBottom: wp('1%'),
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: wp('5%'),
  },
  textContainer: {
    marginBottom: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: wp('4%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  price: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  text: {
    fontSize: wp('3%'),
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  likeButton: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('6%') / 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: wp('3%'),
    right: wp('3%'),
  },
});

export default ProductCard;
