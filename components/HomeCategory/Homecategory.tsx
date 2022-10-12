import styles from './styles';
import { Text, View , Image ,FlatList  ,Pressable} from 'react-native';
import { RootTabScreenProps } from '../../types'; 
import categories from '../../assets/data/categories';  
import {useNavigation} from "@react-navigation/native"

interface HomeCategoryProps {  
    category: {
        id: string;
        title: string;
        movies: {
            id: string;
            poster: string;
        }[];
    }

}

const Homecategory = ({category} : HomeCategoryProps ) => { 

  const navigation = useNavigation();  

     const onMoviePress = (movie  :string) =>{
           navigation.navigate('MovieDetailsScreen' , {id : movie})
       }
  return (
     
    <> 
              <Text style  = {styles.title} > {category.title} </Text>  
                    <FlatList  
                    data= {category.movies}  
                    renderItem = {({item}) => {
                    return (
                      <Pressable onPress={()=> onMoviePress(item.id) } > 
                        <Image source={{uri : item.poster}} style ={styles.image}/> 
                      </Pressable>
                    ) 
                    
                    } } 
                    keyExtractor = {(item) => item.id} 
                    horizontal = {true}  
                    showsHorizontalScrollIndicator = {false}
                    

                    />
    </>
              

   
  );
}

export default Homecategory;
