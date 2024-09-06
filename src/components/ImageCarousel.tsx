import React, {useState} from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  ImageRequireSource,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Pagination from './Pagination';

interface ImageCarouselProps {
  images: {id: number; image: ImageRequireSource}[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {
  const [paginationIndex, setPaginationIndex] = useState(0);

  const handleScroll = (e: any) => {
    const index = Math.round(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
    );
    setPaginationIndex(index);
  };

  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        )}
        onScroll={handleScroll}
      />
      <View style={styles.paginationContainer}>
        <Pagination paginationIndex={paginationIndex} data={images} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.55,
  },
  image: {
    width: wp(100),
    height: hp(55),
  },
  paginationContainer: {
    position: 'absolute',
    bottom: hp(5),
    width: '100%',
  },
});

export default ImageCarousel;
