// import FuseImport from 'fuse.js';
import React, { useState } from 'react';
import { FlatList, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import prayers from '../assets/prayers/saintPrayers.json';
// const Fuse = FuseImport.default;
import prayers from '../assets/prayers/catholicSaintPrayers.json';

export default function HCPrayers() {

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
      <View style={styles.altContainer}>
        <FlatList
          data={prayers}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 8 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f3ef',
    padding: 10,
  },
  altContainer:{
    // padding: 10,
    // borderWidth: 5,
    // borderRadius: 30,
    borderColor: '#bcccac',
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
    marginVertical: 3,
    borderWidth: 2,
    borderColor: '#bcccac',
    borderRadius: 8,
    padding: 10,
    // backgroundColor: '#fcfbf4'
  },
  prayerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'warbler-display',
    fontFamily:'HaloHandletter',
    color: '#949464',
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
  prayerText: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 2,
    color: '#7b4b09',
  },
  instructions: {
    fontSize: 14,
    lineHeight: 22,
  },
});