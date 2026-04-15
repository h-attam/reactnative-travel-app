import './src/global.css'; // NativeWind global CSS
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BookmarkProvider } from './src/context/BookmarkContext';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <BookmarkProvider>
        <AppNavigator />
      </BookmarkProvider>
    </SafeAreaProvider>
  );
}

export default App;
