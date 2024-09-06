import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackParamList, RouteParamList} from '../StackParamlist';
import ImageCarousel from '../../components/ImageCarousel';
import QuantitySelector from '../../components/QuantitySelector';
import SizeSelector from '../../components/SizeSelector';
import ColorSelector from '../../components/ColorSelector';
import ProductDescription from '../../components/ProductDescription';
import AddToCartButton from '../../components/AddToCartButton';
import Rating from '../../components/Rating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DetailHeader from '../../components/DetailHeader';

const Detail = () => {
  const navigation = useNavigation<StackParamList>();
  const route = useRoute<RouteParamList>();
  const {data} = route.params;

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = () => setIsAddedToCart(prev => !prev);
  const handleFavoriteToggle = () => setIsFavorited(prev => !prev);
  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  const handleDecreaseQuantity = () =>
    setQuantity(prev => Math.max(prev - 1, 1));

  const imagesData = Array.from({length: 4}, (_, i) => ({
    id: i,
    image: data.image,
  }));

  return (
    <View style={{flex: 1}}>
      <ImageCarousel images={imagesData} />
      <DetailHeader
        onBackPress={() => navigation.goBack()}
        isFavorited={isFavorited}
        onFavoriteToggle={handleFavoriteToggle}
        isAddedToCart={isAddedToCart}
        onAddToCart={handleAddToCart}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <Text style={styles.productNameText}>{data.title}</Text>
            <QuantitySelector
              quantity={quantity}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          </View>
          <Text style={styles.text}>{data.text}</Text>
          <View style={styles.row}>
            <Rating />
            <Text style={styles.inStockText}>Available in stock</Text>
          </View>
          <View style={styles.productSpecification}>
            <View>
              <Text style={styles.titleText}>Size</Text>
              <SizeSelector
                sizes={['S', 'M', 'L', 'XL', 'XXL']}
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
              />
            </View>
            <ColorSelector
              colors={['#FFFFFF', '#8D8E8D', '#CADCA7', '#F79F1F']}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
            />
          </View>
          <ProductDescription />
          <View style={styles.row}>
            <View style={styles.priceView}>
              <Text style={styles.lightText}>Total Price</Text>
              <Text style={styles.price}>$ {data.price * quantity}</Text>
            </View>
            <AddToCartButton
              isAddedToCart={isAddedToCart}
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: hp('50%'),
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    bottom: 0,
    zIndex: 10,
  },
  contentContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: wp('5%'),
  },
  productNameText: {
    fontSize: hp('3.5%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  inStockText: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  productSpecification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: wp('5%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    marginVertical: wp('3%'),
  },
  priceView: {
    flexDirection: 'column',
  },
  lightText: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-Light',
    color: '#AAAAAA',
  },
  price: {
    fontSize: wp('7%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
});

export default Detail;
