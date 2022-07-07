import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require("./check.png")}/>
      <Text style={styles.Text}>R$00</Text>
      <View style={styles.View}>
        <TextInput keyboardType='number-pad' autoFocus style={styles.TextInput} placeholderTextColor="white" placeholder='R$ Gasolina'/>
        <TextInput keyboardType='number-pad' style={styles.TextInput} placeholderTextColor="white" placeholder='R$ Etanol'/>
      </View>
      <TouchableOpacity style={styles.Touch}>
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
  }

});
