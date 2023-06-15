import Image from 'next/image';
import Logo from '../assets/common/v-logo.jpg';
import Button from '@mui/material/Button';
import { RowDiv } from '@/styles/commonStyle';
import * as headerStyles from '@/styles/headerStyles';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
    const { status } = useSession();

    return (
        <headerStyles.HeaderComponent>
            <RowDiv>
                <Image src={Logo} alt='' style={{ width: '70px', height: '70px', margin: '15px 0px 15px 15px' }} />
                <headerStyles.LogoName> Virtual  List </headerStyles.LogoName>
            </RowDiv>
            <RowDiv>
                {
                    status === 'authenticated' ?
                    <>
                        <a href='/'>
                            <headerStyles.TabComponent> HOME </headerStyles.TabComponent>
                        </a>
                        <a href='/about'>
                            <headerStyles.TabComponent> ABOUT </headerStyles.TabComponent>
                        </a>
                        <a href='/list-one'>
                            <headerStyles.TabComponent> LIST ONE </headerStyles.TabComponent>
                        </a>
                        <a href='/list-two'>
                            <headerStyles.TabComponent> LIST TWO </headerStyles.TabComponent>
                        </a>
                        <a onClick={e => {
                            e.preventDefault();
                            signOut();
                        }}> 
                            <Button variant='contained' style={{background: '#FFF', color: '#000', fontFamily: 'Segoe UI', fontWeight: 500, margin: 20 }}> Sign Out </Button>
                        </a>
                    </>
                    :
                    <a onClick={e => {
                        e.preventDefault();
                        signIn();
                    }}> 
                        <Button variant='contained' style={{background: '#FFF', color: '#000', fontFamily: 'Segoe UI', fontWeight: 500, margin: 20 }}> Sign In </Button>
                    </a>
                }
            </RowDiv>
        </headerStyles.HeaderComponent>
    )
}