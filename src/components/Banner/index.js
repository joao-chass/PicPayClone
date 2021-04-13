import React from 'react'

import { Container, Details, Img, Title, Description } from './styles'

import img13 from '../../../images/13.png';

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title> Cobre um amigo </Title>

                <Description>
                    matenha suas parceria em dis, uise o picpau par afazer sua cobranças
                </Description>
            </Details>
            <Img source={img13}/>
        </Container>
    )
}
