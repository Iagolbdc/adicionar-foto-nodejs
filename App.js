import { Button, StyleSheet, Text, View } from 'react-native';
import { getDocumentAsync } from 'expo-document-picker';
import React from 'react';
import { uploadFiles, DocumentDirectoryPath } from "react-native-fs";


export default function App() {

  const showPicker = React.useCallback(async () => {
    const file = await getDocumentAsync({
      copyToCacheDirectory: false
    });
  
    console.log(file);
    
  }, []);

  
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='
      sadajsd'
      onPress={showPicker}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
