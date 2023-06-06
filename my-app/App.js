import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const [foto, setFoto] = useState()

  const teste = (imagem) =>{
    console.log(imagem)
    Axios.post("http://192.168.1.42:3003/upload", {imagem : imagem})
  }

  useEffect(()=>{
    Axios.get("http://192.168.1.42:3003/foto-usuario", {
      params:{
        ID: 440272,
      }
    })
    .then(
      
      (response)=>{
        console.log(response["data"][0]["CONVERT(`fotoPerfil` USING utf8)"])
        setFoto(response["data"][0]["CONVERT(`fotoPerfil` USING utf8)"])
      }
    )
  }, [foto])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <Button title='Upar imagem' onPress={() => teste(image)}></Button>
    
      {foto && <Image source={{ uri: foto }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}