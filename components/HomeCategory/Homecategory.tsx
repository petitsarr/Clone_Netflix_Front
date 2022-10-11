import styles from './styles';
import { Text, View , Image ,FlatList } from 'react-native';
import { RootTabScreenProps } from '../../types'; 
import categories from '../../assets/data/categories'; 

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

  
  return (
     
    <> 
              <Text style  = {styles.title} > {category.title} </Text>  
                    <FlatList  
                    data= {category.movies}  
                    renderItem = {({item}) => {
                    return <Image source={{uri : item.poster}} style ={styles.image}/>  
                    
                    } } 
                    keyExtractor = {(item) => item.id} 
                    horizontal = {true}  
                    showsHorizontalScrollIndicator = {false}
                    

                    />
    </>
              

   
  );
}

export default Homecategory;
