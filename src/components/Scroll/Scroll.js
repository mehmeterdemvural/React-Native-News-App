import React from 'react';
import {Image, ScrollView} from 'react-native';
import new_banner_data from '../../news_banner_data.json';
import styles from "./Scroll.style";

function Scroll() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {new_banner_data.map((bannerNews, key) => (
        <Image key={key} style={styles.image} source={{uri: bannerNews.imageUrl}} />
      ))}
    </ScrollView>
  );
}

export default Scroll;
