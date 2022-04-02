import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Renê Pádua';
    let idade = '37 anos';
    let formacao = 'Bacharel em Direito e Cursando Tecnólogo em Sistemas para Internet';
    let xp = 'Área Jurídica, Design, Desenho Industrial e Front-End';
    let img = 'https://avatars.githubusercontent.com/u/81319888?v=4';
 
    return(
      <View style={{backgroundColor: '#222734'}}> 
        
        <Text style={{color: '#fff', fontSize: 25, marginHorizontal: 120, margin: 20}}>
          Meu Perfil
        </Text>
 
        <Image
          source={{ uri: img }}
          style={{borderRadius: 100, width: 200, height: 200, marginHorizontal: 100 }}
        />
 
        <Text style={{color: '#fff', fontSize: 25, marginVertical: 15}}>Dados pessoais:</Text>
        <Text style={{color: '#ddd', fontSize: 18 }}>{nome}</Text>
        <Text style={{color: '#ddd', fontSize: 18 }}>{idade}</Text>

        <Text style={{color: '#fff', fontSize: 25, marginVertical: 15}}>Formação:</Text>
        <Text style={{color: '#ddd', fontSize: 18 }}>{formacao}</Text>

        <Text style={{color: '#fff', fontSize: 25, marginVertical: 15}}>Experiência: </Text>
        <Text style={{color: '#ddd', fontSize: 18 }}>{xp}</Text>
      </View>
    )
  }
}
 

export default App;