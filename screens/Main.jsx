import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Main = () => {
  const navigation = useNavigation();

  const data = [
    {
      id:1,
      title:"Learn UseState",
      screen:"UseState"
    },
    {
      id:2,
      title:"Learn UseEffect",
      screen:"UseEffect"
    },
    
   
    {
      id:3,
      title:"Learn UseEffect Advanced [ Animation] ",
      screen:"UseEffectAdvanced"
    },
    {
      id:4,
      title:"Basic Search implementation",
      screen:"BasicSearch"
    },
    {
      id:5,
      title:"Learn UseState",
      screen:"UseState"
    },
    {
      id:6,
      title:"Learn UseEffect",
      screen:"UseEffect"
    },
    {
      id:7,
      title:"Learn UseState",
      screen:"UseState"
    },
    {
      id:8,
      title:"Learn UseEffect",
      screen:"UseEffect"
    },
  ]


  const renderItem = ({item})=>{

    return(
      <View style={styles.cards}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{
          navigation.navigate(item.screen)
        }}>
          <Text style={styles.buttonText}>
            Learn {item.screen}
          </Text>
        </TouchableOpacity>
      </View>
    )


  }
  return (
    <View style={styles.container} >

      

      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      
      />

      

    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },
  cards:{

    margin:20,
    borderWidth:1,
    borderColor:"white",
    borderRadius:20,
    padding:"3%"

  },

  button:{
    padding:"2%",
    borderWidth:2,
    borderColor:"#7BDDD0",
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:"30%",
    marginVertical:"7%",
    
    borderRadius:10


  },

  title:{
    fontWeight:"bold",
    fontSize:20,
    marginHorizontal:"25%"
    
  },
  buttonText:{
    fontSize:16,
    fontWeight:"bold"
  }

})