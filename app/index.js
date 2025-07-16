import { Button, Text, View } from 'react-native';
export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.DrawerNavigator()} />
    </View>
  );
}