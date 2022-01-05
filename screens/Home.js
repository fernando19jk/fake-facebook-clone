import React from 'react' 
import styled from 'styled-components/native'
import {Text} from 'react-native'
import ToolBar from '../components/ToolBar'
import MainSeparator from '../components/MainSepartor'
import Users from '../components/Users'
import Story from '../components/Story'
import Post from '../components/Post'
import { ScrollView } from 'react-native-gesture-handler'
const View = styled.View`
flex:1;
`
const Home = () => { 
    return (
    <View>
        <ScrollView>

        <ToolBar/>
        <MainSeparator/>
        <Users></Users>
        <MainSeparator/>
        <Story/>
        <MainSeparator/>
        <Post/>
        </ScrollView>

    </View>
    )
}
export default Home;
