import styles from './styles';
import { Text, View , Image ,FlatList } from 'react-native';
import { RootTabScreenProps } from '../../types'; 
import categories from '../../assets/data/categories'; 
import Homecategory from '../../components/HomeCategory/Homecategory';

const HomeScreen = () => { 

  
  return (
   <View style ={styles.container} >  
         <FlatList  
          data= {categories.items} 
          renderItem = {({item}) => <Homecategory category = {item} /> } 
          keyExtractor = {(item) => item.id} 
          showsVerticalScrollIndicator = {false}
         />
   </View>
  );
}

export default HomeScreen;   



