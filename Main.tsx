import React from 'react';
import RootRoutes from './src/routes/RootRoutes';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import ThemeContext from './src/contexts/ThemeContext';

function Main() {
  return (
    <ThemeContext>
      <NavigationContainer>
        <RootRoutes/>
      </NavigationContainer>
    </ThemeContext>
  )
}


export default Main;
