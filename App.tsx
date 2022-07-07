import {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState(0)
  const [etanol, setEtanol] = useState(0)
  const [combustivel, setCombustivel] = useState("")
  
  function calculaMelhorCombustivel(){
    const resultado = etanol/gasolina
    if (resultado <= 0.70){
      setCombustivel("Etanol")
    }else{
      setCombustivel("Gasolina")
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require("./check.png")}/>
      <Text style={styles.Text}>{combustivel}</Text>
      <View style={styles.View}>
        <TextInput onChangeText={(text)=> setGasolina(parseFloat(text))} keyboardType='number-pad' autoFocus style={styles.TextInput} placeholderTextColor="white" placeholder='R$ Gasolina'/>
        <View style={styles.barra} />
        <TextInput onChangeText={(text)=> setEtanol(parseFloat(text))} keyboardType='number-pad' style={styles.TextInput} placeholderTextColor="white" placeholder='R$ Etanol'/>
      </View>
      <TouchableOpacity onPress={calculaMelhorCombustivel} style={styles.Touch}>
        <Text style={styles.TextoButao}>
          Calcular
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152731',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
    paddingHorizontal: 24,
  },
  Image:{
    width: 70,
    height: 70,
  },
  Text:{
    fontSize: 24,
    color: "#ffff",
    marginTop: 70,
  },
  View:{
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor: "#233543",
    width: "100%",
    marginTop: 15,
    borderRadius: 15,
  },
  TextInput:{
    color: "white",
    flex: 1,
    textAlign: "center",

  },
  Touch:{
    backgroundColor: "#2BB29B",
    width: "50%",
    height: 40,
    borderRadius: 15,
    justifyContent:"center",
    alignItems: "center",
    marginTop: 14,
  },
  TextoButao:{
    fontSize: 18,
    color: "white",
  },
  barra:{
    width: 1,
    backgroundColor: "white",
  }

});
