import Header from '../component/Header';
import Image from 'next/image';
import One from '../assets/about/img-one.jpg';
import Two from '../assets/about/img-two.jpg';
import Three from '../assets/about/img-three.jpg';
import Four from '../assets/about/img-four.jpg';
import Five from '../assets/about/img-five.jpg';
import Six from '../assets/about/img-six.jpg';
import * as commonStyle from '../styles/commonStyle';
import { decrement, increment, selectValue } from '@/slices/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';

export default function Home() {
    const count = useSelector(selectValue);
    const dispatch = useDispatch();
    const { status } = useSession();

    return (
        <>
            <Header />
            {
                status === 'authenticated' ?
                <commonStyle.ContentContainer>
                    <commonStyle.Title> All About Virtual List </commonStyle.Title>
                    <commonStyle.RowDiv>      
                        <commonStyle.Text onClick={() => dispatch(increment())}> + </commonStyle.Text>
                        <commonStyle.Title> {count} </commonStyle.Title>
                        <commonStyle.Text onClick={() => dispatch(decrement())}> - </commonStyle.Text>
                    </commonStyle.RowDiv>
                    <commonStyle.ColumnDiv>
                        <commonStyle.RowDiv>
                            <Image src={One} alt='' style={{ height: 180 , width: 180, borderRadius: 10, margin: 20 }}/>
                            <commonStyle.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer feugiat scelerisque varius morbi.
                            </commonStyle.Description>
                            <Image src={Two} alt='' style={{ height: 180 , width: 180, borderRadius: 10, margin: 20 }}/>
                            <commonStyle.Description>
                                Sed tempus urna et pharetra pharetra massa massa ultricies mi. Egestas fringilla phasellus faucibus scelerisque eleifend donec. At tempor commodo ullamcorper a lacus.
                            </commonStyle.Description>
                        </commonStyle.RowDiv>
                        <commonStyle.RowDiv>
                            <Image src={Three} alt='' style={{ height: 180 , width: 180, borderRadius: 10, margin: 20 }}/>
                            <commonStyle.Description>
                                At in tellus integer feugiat. Nulla at volutpat diam ut venenatis. Semper feugiat nibh sed pulvinar proin gravida. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. 
                            </commonStyle.Description>
                            <Image src={Four} alt='' style={{ height: 180 , width: 180, borderRadius: 10, margin: 20 }}/>
                            <commonStyle.Description>
                                Purus gravida quis blandit turpis cursus in hac habitasse. Ornare quam viverra orci sagittis eu. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. 
                            </commonStyle.Description>
                        </commonStyle.RowDiv>
                        <commonStyle.RowDiv>
                            <Image src={Five} alt='' style={{ height: 180 , width: 180, borderRadius: 10, margin: 20 }}/>
                            <commonStyle.Description>
                                Odio eu feugiat pretium nibh ipsum. Convallis posuere morbi leo urna molestie at. Urna molestie at elementum eu facilisis sed. Tortor consequat id porta nibh venenatis cras sed.
                            </commonStyle.Description>
                            <Image src={Six} alt='' style={{ height: 180 , width: 180, borderRadius: 10, margin: 20 }}/>
                            <commonStyle.Description>
                                Odio eu feugiat pretium nibh ipsum. Convallis posuere morbi leo urna molestie at. Urna molestie at elementum eu facilisis sed. Tortor consequat id porta nibh venenatis cras sed. 
                            </commonStyle.Description>
                        </commonStyle.RowDiv>
                    </commonStyle.ColumnDiv>
                </commonStyle.ContentContainer>
                : 
                <commonStyle.ColumnDiv>
                <commonStyle.Title> Click SIGN IN button to proceed ... </commonStyle.Title>
                </commonStyle.ColumnDiv>
            }
        </>
    )
}