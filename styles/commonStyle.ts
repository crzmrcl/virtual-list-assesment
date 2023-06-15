'use client';
import { styled } from '@mui/material';

export const Title = styled('div')({
    fontSize: 30,
    fontWeight: 700,
    fontFamily: 'Segoe UI',
    padding: "0 15px"
})

export const ContentContainer = styled('div')({
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})
  
export const Body =  styled('div')({
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Segoe UI',
    padding: 5
})

export const RowDiv = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
})

export const ColumnDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

export const Description = styled('div')({
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Segoe UI',
    padding: 10,
    margin: 10,
    width: 400
})

export const Text = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 900,
    fontFamily: 'Segoe UI',
    background: '#FFF',
    color: "#000",
    width: 30,
    height: 30,
    padding: "0 5px",
    margin: '10px 0',
    borderRadius: 40
})

// List Table Styles

export const ListContainerListOne = styled('div')({
    display: 'flex',
    flexDirection: 'column',
})

export const ListContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh'
})

export const RowContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    padding: 10,   
})

export const ListItem = styled('div')({
    fontSize: 20,
    fontWeight: 500,
    fontFamily: 'Segoe UI',
    padding: 15,
    margin: 10 ,
    background: '#696969',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between'
})

export const SubTitle = styled('div')({
    fontSize: 30,
    fontWeight: 500,
    fontFamily: 'Segoe UI',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const Span = styled('div')({
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Segoe UI',
    margin: '0px 10px',
    width: 150
})

export const RowContainerListOne = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 20,
    fontWeight: 500,
    fontFamily: 'Segoe UI',
    padding: 15,
    margin: '10px 30px 0px 30px',
    background: '#696969',
    borderRadius: 10,
})

export const TableHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 20,
    fontWeight: 900,
    fontFamily: 'Segoe UI',
    padding: 15,
    margin: '15px 30px 5px 30px',
    background: '#708090',
    borderRadius: 10,
})

export const SpanListOne = styled('div')({
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Segoe UI',
    margin: '0px 10px',
    width: 100,
    textTransform: 'capitalize'
})