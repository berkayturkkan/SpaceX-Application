import React from 'react'
import { Text, View,Button,TouchableOpacity,Image, FlatList, TouchableHighlight} from 'react-native'
import {gql,useQuery } from '@apollo/client';

const GET_LAUNCHES = gql`
{
  launchesPast(limit: 20) {
    mission_name
    id
    links {
      video_link
      flickr_images
    }
    launch_date_utc
    
  }
}
`;

export default function Launches({navigation}) {

    const {data, loading, error} = useQuery(GET_LAUNCHES);
    
    if (loading || error) return null;
    const launch = data.launchesPast
    console.log(launch[1].links.flickr_images[0])
    return (
        <View style={{flex:1}}>
        <FlatList
        data={launch.filter(item => item.links.flickr_images[0] && item.links.flickr_images[0])} 
        numColumns={3}
        renderItem={({ item }) => (
            <View style={{flex:1/3,margin: 5, backgroundColor: '#ddd'}} >
              <TouchableHighlight onPress={()=> navigation.navigate('Details', {details : item} )}>
              <Image 
                  style={{ height: 200}}
                  source={{uri: item.links.flickr_images[0]}}
                />
              </TouchableHighlight>
            </View>
          
        )}

        />

        </View>
    )
    
}