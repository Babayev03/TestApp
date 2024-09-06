import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {productData, ProductData} from '../../constants/productData';
import ProductCard from '../../components/ProductCard';
import SvgArrowLeft from '../../assets/icons/ArrowLeft';
import SearchBar from '../../components/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../StackParamlist';

const ProductList = () => {
  const navigation = useNavigation<StackParamList>();

  const [selectedCategory, setSelectedCategory] = useState('Dresses');

  useEffect(() => {
    setSelectedCategory('Dresses');
  }, []);

  const renderProductItem = ({
    item,
    index,
  }: {
    item: ProductData;
    index: number;
  }) => {
    const marginTop = index % 2 === 0 ? 0 : 35;
    return (
      <View style={[styles.itemContainer, {marginTop}]}>
        <ProductCard navigation={navigation} data={item} />
      </View>
    );
  };

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = ['Dresses', 'Jackets', 'Jeans', 'Shoes'];

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.menuIconCircle}>
            <SvgArrowLeft />
          </View>
        </TouchableOpacity>
        <View style={styles.profileImgCircle}>
          <Image
            source={require('../../assets/images/profile-image.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <SearchBar />
      <View style={styles.categoryButtonsContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress(category)}>
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category &&
                  styles.selectedCategoryButtonText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={productData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={styles.campaignFlatListContent}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  campaignFlatListContent: {
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    alignItems: 'center',
  },
  itemContainer: {
    paddingHorizontal: wp('2%'),
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('6.6%'),
  },
  menuIconCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImgCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: '#DDDDDD',
    marginLeft: wp('5%'),
  },
  categoryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('2%'),
    marginHorizontal: wp('6%'),
    marginBottom: hp('1%'),
    gap: wp('1%'),
  },
  categoryButton: {
    width: hp('10%'),
    height: hp('5%'),
    borderRadius: wp('15%') / 2,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D2D2D2',
  },
  categoryButtonText: {
    fontSize: hp('1.6%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  selectedCategoryButton: {
    backgroundColor: 'black',
  },
  selectedCategoryButtonText: {
    color: '#FFFFFF',
  },
});

export default ProductList;
