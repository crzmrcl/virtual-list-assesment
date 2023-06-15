import Header from "../component/Header";
import * as commonStyle from "../styles/commonStyle";
import { useSession } from 'next-auth/react';

export const getStaticProps = async() => {
    const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();

    return {
        props: {
            products: data.products
        }
    }
}

export default function List({products}: any) {
    const { status } = useSession();

    return (
        <>
            <Header />
            {
                status === 'authenticated' ?
                <>
                    <commonStyle.SubTitle> List of Data from Dummy JSON without React Window </commonStyle.SubTitle>
                    <commonStyle.ListContainerListOne>
                    <commonStyle.TableHeader>
                        <commonStyle.SpanListOne> ID</commonStyle.SpanListOne>
                        <commonStyle.SpanListOne> CATEGORY </commonStyle.SpanListOne>
                        <commonStyle.SpanListOne> BRAND </commonStyle.SpanListOne>
                        <commonStyle.SpanListOne> RATING </commonStyle.SpanListOne>
                        <commonStyle.SpanListOne> TITLE </commonStyle.SpanListOne>
                        <commonStyle.SpanListOne> STOCK </commonStyle.SpanListOne>
                        <commonStyle.SpanListOne> PRICE </commonStyle.SpanListOne>
                    </commonStyle.TableHeader>
                        {
                            products?.map((item:any) => {
                                return (
                                    <>
                                        <commonStyle.RowContainerListOne key={item.id}>
                                            <commonStyle.SpanListOne> { item.id } </commonStyle.SpanListOne>
                                            <commonStyle.SpanListOne> { item.category } </commonStyle.SpanListOne>
                                            <commonStyle.SpanListOne> { item.brand } </commonStyle.SpanListOne>
                                            <commonStyle.SpanListOne> { item.rating } </commonStyle.SpanListOne>
                                            <commonStyle.SpanListOne> { item.title } </commonStyle.SpanListOne>
                                            <commonStyle.SpanListOne> { item.stock } </commonStyle.SpanListOne>
                                            <commonStyle.SpanListOne> { item.price } </commonStyle.SpanListOne>
                                        </commonStyle.RowContainerListOne>
                                    </>
                                )
                            })
                        }
                    </commonStyle.ListContainerListOne>
                </>
                :
                <commonStyle.ColumnDiv>
                    <commonStyle.Title> Click SIGN IN button to proceed ... </commonStyle.Title>
                </commonStyle.ColumnDiv>
            }
        </>
    )
}