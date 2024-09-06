import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  index: number;
  paginationIndex: number;
};

const Dot = ({index, paginationIndex}: Props) => {
  return (
    <View
      style={[
        styles.dotContainer,
        {
          borderColor: index === paginationIndex ? 'white' : 'transparent',
        },
      ]}>
      <View style={styles.dot} />
    </View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'white',
    height: 6,
    width: 6,
    marginHorizontal: 2,
    borderRadius: 8,
  },
  dotContainer: {
    width: 14,
    height: 14,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    borderWidth: 0.8,
  },
  dotOpacity: {
    backgroundColor: 'white',
    height: 7,
    width: 7,
    marginHorizontal: 2,
    borderRadius: 8,
    opacity: 0.5,
  },
});
