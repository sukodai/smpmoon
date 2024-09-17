import { Link, Stack, useNavigation } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';
import { useEffect } from 'react';

export default function IndexScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'My home',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#ef6c00' },
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: '800',
        fontSize: '24',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
