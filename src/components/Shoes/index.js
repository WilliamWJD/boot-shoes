import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Shoes = ({ img, cost, children, onClick }) => {
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 18)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image source={img} style={styles.shoesImg} />
      <Text style={styles.shoesText}>{filterDesc(children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}>{cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shoesImg: {
    width: 150,
    height: 150,
  },

  shoesText: {
    fontSize: 16,
  },
});

export default Shoes;
