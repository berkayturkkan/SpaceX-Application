import React from 'react'
import { View , Text,useState,useEffect, FlatList, TouchableOpacity,Image,Linking} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Details({ route, navigation }) {



    const { details } = route.params;
    console.log(details)


    return (
        <View style={{ flex:1}}>
          <View style={{flexDirection:'row',alignItems:'center',padding:5,width:'100%'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name='arrow-left-bold-outline' color={'#476A94'} size={45}/>
            </TouchableOpacity>
            <Text style={{fontSize:20,color:'#476A94',margin:5,fontWeight: 'bold'}} >{details.mission_name}</Text> 
          </View>
          <Text style={{fontSize:20,color:'#476A94',paddingHorizontal:'3%'}} >Date: {details.launch_date_utc}</Text>
          
          <Text style={{color: 'blue',textDecorationLine: 'underline',paddingHorizontal:'3%'}} onPress={() => Linking.openURL(details.links.video_link)}>Watch Here</Text>
          <Text style={{fontSize:15,color:'#476A94',paddingHorizontal:'3%',fontWeight: 'bold'}} >LAUNCH DETAILS</Text>
          
          
          <FlatList
        data={details.links.flickr_images} 
        numColumns={3}
        renderItem={({ item }) => (
            <View style={{flex:1/3,margin: 5, backgroundColor: '#ddd'}} >
              
              <Image 
                  style={{ height: 200}}
                  source={{uri: item}}
                />

            </View>
          
        )}

        />
        </View>
    
  )



}