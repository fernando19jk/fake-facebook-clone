import React,{ Component } from 'react';
import {View,Text,FlatList,ActivityIndicator,StyleSheet,Image} from 'react-native';
import axios from 'axios';
import ListChat from './ListChat';
export default class Chat extends Component{
    constructor(props) {
        super(props)
        this.state = {
            chatList : [],
            loaded: false,
            spinner: true,
            onlineUsers:[]
        }
    }
    componentDidMount()
    {
    axios.get('https://my-daw2-app-server-production.herokuapp.com/')
    .then((response) =>{
        //spinner de espera mientras carga 
        this.setState({ spinner: true });
        //
        this.setState({
            chatList:response.data.users,
            loaded: true
        })
        this.setState({ spinner: false });
        //console.log(this.state.chatList)
      
         // this.setState({ chatList2: response.data.users });
         const a=[]
          this.state.chatList.forEach(element => {
            //console.log(element)
            if(element.role==false){
              a.push(element)
               this.setState({ onlineUsers: a});
            }
          });
        console.log(this.state.onlineUsers)
        
    })
    .catch(function(error){
        console.log(error)
    });
    }

    //post axios 
    


    render() {
        if (this.state.spinner) {
            return (
              <View style={styles.container}>
                  {/* <ActivityIndicator size="large" color="#ff0000"  /> */}
                  <Image
        style={styles.logo}
        source={require('../assets/icon.png')}
      />
              </View>
            );
          }

 
            return(                           
                <FlatList 
                data={this.state.onlineUsers}
                renderItem={({item}) =>(
                    
                    <ListChat
                    first_name={item.name}
                    message={"1 mutual friend"}
                    image={item.image}
                    date={item.state==true ? "🟢":"🔴"}
                    //time={item.time}
                    />
                )}
                // <Text>{item.first_name}</Text>}
                keyExtractor={item => item._id} 
                />
            )
        
    }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        imageStyle: {
          width: 200,
          height: 300,
          resizeMode: 'contain',
        },
        button: {
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          padding: 10,
          width: 300,
          marginTop: 30,
        },
        logo: {
          width: 75,
          height: 75,
        },
      
      });