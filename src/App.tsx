import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import NewsCard from './components/NewsCard';
import Scroll from './components/Scroll';
import news_data from '../src/news_data.json';

function App(): JSX.Element {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyExtract = (item, index) => item.u_id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text>News</Text>

      <FlatList
      ListHeaderComponent={Scroll}
        keyExtractor={keyExtract}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});

export default App;
