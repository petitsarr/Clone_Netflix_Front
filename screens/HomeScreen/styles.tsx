import {StyleSheet} from "react-native" 
import React from "react" 


const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding  : 20 , 
    
        
    } ,
    image :  {
        width: 100, 
        height: 170, 
        resizeMode: "cover", 
        borderRadius:5 , 
        margin: 5,
    } ,
    title : { 
        fontSize: 16, 
        fontWeight: "bold", 
        color : "white" ,
    }

})  

export default styles