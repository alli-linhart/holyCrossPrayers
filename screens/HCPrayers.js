// import FuseImport from 'fuse.js';
import React, { useState } from 'react';
import { FlatList, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import prayers from '../assets/prayers/holyCrossPrayers.json';
// const Fuse = FuseImport.default;



export default function HCPrayers() {

  // const [expandedPrayerIndex, setExpandedPrayerIndex] = useState(null);
  // const [searchQuery, setSearchQuery] = useState ('');
  
  // // const fuse = useMemo(() => new Fuse (holyCrossPrayers, {
  // // keys: ['title'],
  // // threshold: 0.3,
  // // }), []);

  // // const filteredPrayers = useMemo(() => {
  // //   if (!searchQuery) return holyCrossPrayers;
  // //   const result = fuse.search(searchQuery);
  // //   return result.map(r => r.item);
  // // }, [searchQuery]);

  // // const filteredPrayers = prayersData.filter(prayer =>
  // //   prayer.title.toLowerCase().includes(search.toLowerCase())
  // // );

  // const toggleExpand = index => {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   setExpandedPrayerIndex(expandedPrayerIndex === index ? null : index);
  // };

  // const renderItem = ({ item, index }) => {
  //   const isExpanded = index === expandedPrayerIndex;

  //   return (
  //     <View style={styles.prayerContainer}>

  //     </View>
  //   );
  // };

  // return (
  //   <ScrollView style={styles.container}>
  //     {/* <TextInput
  //       style={styles.searchBar}
  //       placeholder="Search Prayers..."
  //       value={searchQuery}
  //       onChangeText={setSearchQuery}
  //     />
  //     <FlatList
  //       data={filteredPrayers}
  //       renderItem={renderItem}
  //       keyExtractor={(item, index) => index.toString()}
  //       scrollEnabled={false} // since we are inside ScrollView
  //     /> */}
  //   </ScrollView>
  // );

  const [expandedIndex, setExpandedIndex] = useState(null);

  const togglePrayer = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderItem = ({ item, index }) => {
    const isExpanded = index === expandedIndex;

    return (
      <View style={styles.prayerContainer}>
        <TouchableOpacity onPress={() => togglePrayer(index)}>
          <Text style={styles.prayerTitle}>{item.title}</Text>
        </TouchableOpacity>

        {isExpanded && (
          <Text style={styles.prayerText}>
            {item.prayer}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={prayers}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  prayerContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 10,
  },
  prayerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  detailsContainer: {
    marginTop: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  ingredient: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 2,
  },
  instructions: {
    fontSize: 14,
    lineHeight: 22,
  },
});