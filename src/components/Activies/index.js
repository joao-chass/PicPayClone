import React from 'react'
import { Feather, MaterialCommunityIcons, AntDesign   } from '@expo/vector-icons'; 

import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Descriptoon, 
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles'

import avatar from '../../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header >
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Descriptoon>
                        <Bold>Você</Bold> pagou a <Bold>@Alguém</Bold>
                    </Descriptoon>
                </CardHeader>

                <CardBody>
                    <UserName>
                        Mateus
                    </UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                       <Value>R$: 18,00</Value> 
                        
                        <Divider />

                  
                            <Feather name="lock" color="#fff" size={14} />
                            <Date>há 2 anos</Date>
                      
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
