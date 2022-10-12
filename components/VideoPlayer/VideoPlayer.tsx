  

import { StyleSheet, Text, View } from 'react-native'
import React ,{useState , useRef} from 'react' 
import styles from './styles';   
import { Video  , AVPlaybackStatus } from 'expo-av';

interface VideoPlayerProps { 
    episodes: { 
        
        id: string;
        title: string;
        poster: string;
        duration: string;
        plot: string;
        video: string;
    
}
}

const VideoPlayer = ( {episodes} : VideoPlayerProps) => {  

  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episodes.video,
        }}
        useNativeControls
        posterSource={
          {
            uri: episodes.poster
          }
        }  
        posterStyle={{ resizeMode: 'cover' }}
       // usePoster ={true} 
      //  resizeMode ="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}

export default VideoPlayer

