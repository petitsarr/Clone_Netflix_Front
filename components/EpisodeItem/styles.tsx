import {StyleSheet} from "react-native"  


const styles = StyleSheet.create({  
    row : {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems :"center" , 
    } ,
    image :{
        width: 80, 
        height: 75
        , 
        resizeMode: "cover", 
        borderRadius:5 , 
        margin: 5, 

    } ,
    coltitle :{
        flexDirection: "column", 
        marginLeft : 25 , 
        paddingTop : 20,
    } ,
    title : {
        fontSize: 16, 
        fontWeight: "bold", 
        color : "white" , 
     //  marginRight : 60,
    }  ,
    duration :{
        color: "darkgrey", 
        fontSize: 12, 
        fontWeight: "bold", 
    } , 
    plot : { 
        color: "grey",
    }
   

}) 

export default styles ;