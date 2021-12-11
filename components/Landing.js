import React from 'react'
import { Text, View,Button,TouchableOpacity,Image} from 'react-native'

export default function Landing({navigation}) {
    return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>

        <Image
            style={{height:'35%',width:'55%',borderRadius:180,borderColor:'#476A94',borderWidth:5}}
            source={require('./images/landingphoto.jpg')}
        />

            <View style={{width:'80%',marginTop:'10%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate("Launches")} style={{borderRadius:5,alignItems:'center',paddingVertical:15,backgroundColor:'#476A94'}} >
                <Text style={{fontSize:20,color:'white'}}>DISCOVER LAUNCHES</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}