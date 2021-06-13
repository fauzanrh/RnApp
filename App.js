import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme();

  return (
    <SafeAreaView>
      <Text>hello world, theme: {isDarkMode}</Text>
    </SafeAreaView>
  );
};

export default App;
