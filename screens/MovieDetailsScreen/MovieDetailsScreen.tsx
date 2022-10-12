import {  Text, View  ,Image ,Pressable ,FlatList} from 'react-native'
import React ,{useState} from 'react'  
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './styles'  
import movie from "../../assets/data/movie"    
import { Entypo } from '@expo/vector-icons';    
import {Picker} from "@react-native-picker/picker"
import EpisodeItem from '../../components/EpisodeItem/EpisodeItem';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';


const MovieDetailsScreen = () => {    
  

  const [selectedLanguage, setSelectedLanguage] = useState(0);   
  const [currentEpisode, setCurrentEpisode] = useState(movie.seasons.items[0].episodes.items[0]);
    const firstsason = movie.seasons.items[selectedLanguage]
    const firstEpisode = movie.seasons.items[0].episodes.items[0]  

const seasonName = movie.seasons.items.map(season => season.name) 
//console.log(seasonName) 
//console.log(selectedLanguage)

//console.log(selectedLanguage)

  return (
    <View>
      
      <VideoPlayer episodes={currentEpisode} /> 
      
     <FlatList   
        data = {firstsason.episodes.items} 
        renderItem = {({item}) => <EpisodeItem episodes = {item} /> }  
         style ={{marginBottom :250 }}
        ListHeaderComponent ={() =>{
          return(
          
        <View style ={{padding :12 }}>  

              <Text style ={styles.title} > {firstEpisode.title} </Text> 
              <View style={{flexDirection :"row"}}>
                      <Text style ={styles.match} >98% Match</Text> 
                      <Text style ={styles.year} > {movie.year}</Text> 
                      <View style ={styles.ageContainer}>
                          <Text  style ={styles.age} >12 +</Text> 
              
                      </View> 
                      <Text style ={styles.season}> {movie.numberOfSeasons} seasons</Text> 
                      <MaterialIcons name="hd" size={24} color="white" />
              </View> 
              <Pressable style ={styles.playbutton} onPress ={()=> console.warn("play")}>  
                    <Text style ={styles.playbuttonText}  > <Entypo name="controller-play" size={20} color="black" /> 
                    {"  "}
                    Play
                    </Text>
              </Pressable> 

              <Pressable style ={styles.downloadbutton} onPress ={()=> console.warn("Download")}>  
                    <Text style ={styles.downloadText}> <AntDesign name="download" size={18} /> 
                    {"  "}
                      Download
                      </Text>
              </Pressable> 
                <Text style ={styles.plot} > {movie.plot} </Text> 
                  <Text  style ={styles.cast} > Cast: {movie.cast} </Text> 
                  <Text style ={styles.creator} > Creator: {movie.creator} </Text> 

                  {/* Row with icon buttons */}  
                  <View style ={styles.buttonContainer}>  
                          <View style ={{alignItems :"center" ,marginHorizontal:3}}>  
                              <AntDesign name="plus" size={24} color="white" /> 
                              <Text style ={{color :"white"}}> My list </Text>
                          </View> 
                          <View style ={{alignItems :"center" ,marginHorizontal:3}} >  
                              <AntDesign name="hearto" size={24} color="white" /> 
                              <Text style ={{color :"white"}}> Rate </Text>
                          </View> 
                          <View style ={{alignItems :"center" ,marginHorizontal:3}}>   
                              <MaterialIcons name="share" size={24} color="white" /> 
                              <Text style ={{color :"white"}}> Share </Text>
                          </View>
                  </View>   
                  
                  <View  
                   
                   > 
                  
                  <Picker 
                      
                      selectedValue={selectedLanguage}
                      onValueChange={(itemValue, itemIndex) =>  {
                      //  console.log(itemIndex) 
                        
                        setSelectedLanguage(itemValue)
                      } 
                       
                      } 
                      dropdownIconColor = "white"   
                      style = {{color :"white" ,width : 200 ,height :150 } }
                   //   mode = "dropdown"
                      >
                      {seasonName.map((season ,index)=>{
                        return (
                          <Picker.Item label= {season} value= {index} color='white' />
                        )
                      })}
                </Picker> 
                </View>
    </View> 
          )
        }}
     />
    </View>
  )
}

export default MovieDetailsScreen
