import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
width: 40px; 
height: 40px; 
position: relative;
`


const ProfileImage = styled.Image`
width: 40px;
height: 40px;
border-radius: 20px;
`
const UserActive=styled.View`
position:absolute;
bottom:-2px;
right:-2px;
width: 15px;
height: 15px;
border-radius: 8px;
background:#10D24B;
border:2px solid #FFFFFF;
`
const Avatar =({source,online}) => { 
    return(
        <Container>
        <ProfileImage source={source} />
        {online&&<UserActive/>}
        </Container>
    ) 
    }
export default Avatar
