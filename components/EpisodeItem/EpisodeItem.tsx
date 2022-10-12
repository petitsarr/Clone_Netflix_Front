import { StyleSheet, Text, View ,Image } from 'react-native'
import React ,{useState} from 'react' 
import styles  from './styles'  
import { AntDesign } from '@expo/vector-icons';   


import {Picker} from "@react-native-picker/picker"

interface EpisodeItemProps { 
    episodes: { 
        
            id: string;
            title: string;
            poster: string;
            duration: string;
            plot: string;
            video: string;
        
    }
}

const EpisodeItem = ({episodes} : EpisodeItemProps) => {    

   
  return (   
    
    
    <View style ={{marginVertical :12 }}> 
                            
            <View style ={styles.row}>   
                <Image source = {{uri : episodes.poster}} style = {styles.image} /> 
                 
                 <View style ={styles.coltitle}> 
                            <Text style = {styles.title} > {episodes.title} </Text> 
                            <Text style = {styles.duration} > {episodes.duration} </Text>

                 </View> 
              <AntDesign  name="download" size={20} color ="white" style ={{marginTop :5 , marginLeft :85}} />

            </View> 
        <Text style ={styles.plot}> {episodes.plot} </Text> 


    
     </View> 
    
  )
}

export default EpisodeItem

