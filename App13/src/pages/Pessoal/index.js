import React from 'react';
import { View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Pessoal() {
  const navigation = useNavigation();
 return (
   <View>
     <Text style={{fontSize: 25}}>Pessoal</Text>
   </View>
  );
}