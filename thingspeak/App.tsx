import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from './src/components/Dashboard';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Container } from './styles';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: 'white'}}>
         <View style={styles.container}>    
          <Text style={styles.text} >Projeto 4º DSM IOT</Text> 
          <Dashboard />
        </View>
      </ScrollView>
    </SafeAreaView> 
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
