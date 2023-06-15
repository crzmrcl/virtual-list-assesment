'use client';
import { styled } from '@mui/material';

export const HeaderComponent = styled('div')({
    width: '100vw',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

export const LogoName = styled('div')({
    color: '#FFF',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 25,
    letterSpacing: 2
})

export const TabComponent = styled('div')({
    color: '#FFF',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 15,
    letterSpacing: 2,
    margin: 10,
    padding: 10
})