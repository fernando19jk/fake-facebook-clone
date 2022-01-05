import React, {Component} from 'react';
import { StyleSheet, View,Text,Image, ViewBase } from 'react-native';


export default class ListChat extends Component{

    render() {
        
        return(
            <View style = {styles.listItemContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{uri:this.props.image}}
                    />
                </View>
                <View style = {styles.chatDetailContainer}>
                  <View style = {styles.chatDetailContainerWrap}>
                     <View style = {styles.nameContainer}>
                         <Text style={styles.nameText}>{this.props.first_name}</Text>
                     </View>
                     <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{this.props.date} {this.props.time}
         </Text>
             </View>
        </View>
                <View style={styles.chatDetailContainerWrap}>
                <View style={styles.msgContainer}>  
                <Text style={styles.msgText}>{this.props.message}</Text>
            </View>
            
        </View>
    </View>
    
 </View>
        );
        
    }
}

const styles=StyleSheet.create({
    listItemContainer:{
        flex:1,
        flexDirection:"row",
        padding:10
    },   
    avatarContainer:{
        flex:1,
        alignItems:"flex-start"
    },
    chatDetailContainer:{
        flex:4,
        // borderBottonColor:"rgba(92,94,94,0.5)",
        // borderBottonWidth:0.25
    },      
    chatDetailContainerWrap:{
        flex:1,
        flexDirection:"row",
        padding:5
    },
    nameContainer:{
        alignItems:"flex-start",
        flex:1
    },
    dateContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"flex-end"
    },
    msgContainer:{
        flex:1
    },
    nameText:{
        fontWeight:"bold",
        color:"#000"
    },
    dateText:{
        fontSize:12
    },
    avatar:{
        borderRadius:30,
        width:60,
        height:60
    }

});