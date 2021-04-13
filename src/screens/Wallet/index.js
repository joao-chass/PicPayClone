import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import { Switch } from 'react-native';

import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    CardBody,
    AddButton,
    AddLable,
    UseTicketButton,
    UseTicketLabel,
} from './styled';

import creditCard from '../../../images/credit-card.png'

export default function Wallet() {
        const [isVisible, setIseVisible] = useState(true);
        const [useBalance, setuseBalance] = useState(true);

        function visualizarSaldo() {
            setIseVisible((prevState) => !prevState);
        }

        function utilizarSaldoPafamento() {
            setuseBalance((prevState) => !prevState)
        } 

        return (
            <Wrapper>
               <Header colors={
                   useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']
               }>
                    <HeaderContainer >
                        <Title> Saldo PicPay </Title>

                        <BalanceContainer>
                            <Value>
                                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                            </Value>

                            <EyeButton onPress={visualizarSaldo}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                            </EyeButton>
                        </BalanceContainer>

                        <Info>
                            Seu saldo está rendendo 100% do CDI
                        </Info>

                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash" size={30} color="#fff" />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>

                            <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
               </Header>

               <UseBalance>
                   <UseBalanceTitle>
                       Usar saldo ao pagar
                   </UseBalanceTitle>

                   <Switch
                    value={useBalance}
                    onValueChange={utilizarSaldoPafamento}
                   />
               </UseBalance>

               <PaymentMethods>
                   <PaymentMethodsTitle>
                       Formar de pagamento
                   </PaymentMethodsTitle>

                   <Card>
                    <CardBody>
                    <CardDetails>
                        <CardTitle>
                           Cadastre seu cartão de credito 
                        </CardTitle>

                        <CardInfo>
                            Cadastre seu cartão de crédito para poder fazer pagamentos mesmos quando não tiver saldo no seu picpay.
                        </CardInfo>
                    </CardDetails>
                   <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddButton>
                     <AntDesign name="pluscircleo" size={30} color="#0db060" />
                     <AddLable>
                         Adicionar cartão de crédito
                     </AddLable>
                    </AddButton>
                   </Card>

                   <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color="#0db060" />
                    <UseTicketLabel>
                        Usar código promocional
                    </UseTicketLabel>
                   </UseTicketButton>

               </PaymentMethods>
            </Wrapper>
        )

}

