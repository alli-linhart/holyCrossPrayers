import React from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the Home Screen</Text>
      <Button title="Prayers"/>
    </View>
  );
};

export default Home;