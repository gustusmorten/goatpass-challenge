import { Stack } from 'expo-router';
import React from 'react';

const PetsLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: '' }} />
    </Stack>
  );
};

export default PetsLayout;