import { Image, StyleSheet } from 'react-native';

import Dashboard from '@/components/Dashboard';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const HomePets = () => {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner.jpg')}
          style={styles.banner}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Your registered pets</ThemedText>
        <HelloWave />
      </ThemedView>
     
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <Dashboard />
    </ParallaxScrollView>
  );
}

export default HomePets;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  banner: {
    width: '100%',
    height: "100%",

  },
});
