import { Link, Stack, useNavigation } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import { ThemedText } from '@/components/ThemedText';

export default function MojiScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'フォント',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#9e9d24' },
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: '800',
        fontSize: '24',
      },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ThemedText type="title">Aあ愛</ThemedText>
      <ThemedText type="subtitle">Aあ愛</ThemedText>
      <ThemedText type="defaultSemiBold">ABCDEFG abcdefg</ThemedText>
      <ThemedText type="default">ABCDEFG abcdefg</ThemedText>
      <ThemedText type="link">ABCDEFG abcdefg</ThemedText>
      <ThemedText style={{ fontFamily: 'SpaceMono' }}>ABCDEFG abcdefg</ThemedText>
      <ThemedText style={{ fontFamily: 'NotoSansJP-VariableFont_wght' }}>ABC あいう 小市</ThemedText>
      <ThemedText type="title" style={{ fontFamily: 'NotoSansJP-VariableFont_wght' }}>
        Aあ愛
      </ThemedText>
      <ThemedText type="subtitle" style={{ fontFamily: 'NotoSansJP-VariableFont_wght' }}>
        Aあ愛
      </ThemedText>
      <ThemedText type="defaultSemiBold" style={{ fontFamily: 'NotoSansJP-VariableFont_wght' }}>
        Aあ愛
      </ThemedText>
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
