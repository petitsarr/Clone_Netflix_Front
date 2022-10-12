import {StyleSheet} from 'react-native'; 


const styles = StyleSheet.create({  
    image :{
        width: '100%', 
        aspectRatio: 16/9, 
        resizeMode: 'cover', 

    }  ,
    title: { 
        fontSize: 18, 
        fontWeight: 'bold',  
        color : 'white',
        
    } ,
    match: { 
        color: '#00aa00',  
        fontWeight: 'bold', 
        marginRight : 5
    } ,
    year :{
        fontSize :14  ,
        color : "#757575"
    } ,
    ageContainer :{ 
        backgroundColor :"yellow" ,
        alignItems :"center" ,
        justifyContent :"center"  ,
        borderRadius : 5 ,
        paddingHorizontal :2 ,
       marginLeft :10, 
       
    } ,
    age :{

    } ,
    season :{ 
        color :"white" ,
        marginHorizontal :5

    } ,
    playbutton :{
        backgroundColor :"white"  ,
        justifyContent :"center" , 
        alignItems :"center" , 
        borderRadius : 4 , 
        marginTop : 25 , 
        padding : 5 ,
    } , 
    playbuttonText :{
        color :"black" , 
        fontWeight : "bold" , 
        fontSize : 16 ,
    } ,
    downloadbutton :{
        backgroundColor :"#2b2b2b"  ,
        justifyContent :"center" , 
        alignItems :"center" , 
        borderRadius : 4 , 
        marginTop : 25 , 
        padding : 5 ,
    } ,
    downloadText :{
        color : "white" , 
        fontWeight :"bold" , 
        fontSize : 16 ,
    } ,
    plot :{
        color :"white" , 
        marginTop : 30,
    } ,
    cast :{ 
        color :"white" , 
        marginTop : 10 ,
     } ,
     creator :{ 
        color :"white" , 
        marginTop : 10 ,
     } ,
     buttonContainer :{
            flexDirection :"row" , 
            justifyContent :'space-around'  ,
            marginTop : 25 ,
     } ,
     
    
});  


export default styles;