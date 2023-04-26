/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import MainPage from './src';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MainPage />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
