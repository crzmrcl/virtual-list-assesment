import * as commonStyle from "../styles/commonStyle";
import Header from "@/component/Header";
import { FixedSizeList as List } from 'react-window';
import { useSession } from 'next-auth/react';

const Row = () => (
    <commonStyle.ListItem>
      <commonStyle.Span> Sample Data </commonStyle.Span>
      <commonStyle.Span> Name </commonStyle.Span>
      <commonStyle.Span> Age </commonStyle.Span>
      <commonStyle.Span> Address </commonStyle.Span>
      <commonStyle.Span> Profession </commonStyle.Span>
      <commonStyle.Span> Birthday </commonStyle.Span>
      <commonStyle.Span> Additonal Info </commonStyle.Span>     
    </commonStyle.ListItem>
);

export default function ListTwo() {
    const { status } = useSession();

    return (
        <>
            <Header />
            {
                status === 'authenticated' ?
                <>
                    <commonStyle.SubTitle> List of Fake Data with React Window - 1000 Data </commonStyle.SubTitle>
                        <commonStyle.RowContainer>
                            <commonStyle.ListContainer>
                                <List
                                    className="List"
                                    height={900}
                                    itemCount={1000}
                                    itemSize={10}
                                    width={1800}
                                >
                                    {Row}
                                </List>
                        </commonStyle.ListContainer>
                    </commonStyle.RowContainer>
                </>
                :
                <commonStyle.ColumnDiv>
                    <commonStyle.Title> Click SIGN IN button to proceed ... </commonStyle.Title>
                </commonStyle.ColumnDiv>
            }
        </>
    )
}