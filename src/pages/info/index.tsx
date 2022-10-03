import styled from "@emotion/styled"
import { useState } from "react";
import Header from "../../component/layout/header";

//interface
import { newsInfo } from "../../types/news";
import { categoryList } from "../../types/news";

export default function Info () {
const [seleted, setSelected] = useState(false)
const [seletId, setSelectId] =useState('')
const  news:newsInfo[]= [
    {
        id: 1,
        from: '서울 시청',
        text: '코로나 19 확산 방지',
        updatedDate : '08월 20 12시 32분'
    }
]
const Category:categoryList[] = [
    {
        id: 1,
        title: '기상'
    },
    {
        id: 2,
        title: '안전'
    },
    {
        id: 3,
        title: '질병'
    },
    {
        id: 4,
        title: '교통'
    },
]
const selectCategory = (e:any) => {
    setSelectId(e.target.id)
}

    return(
        <Container>
            <Header />
            <InfoWrap>
                <InfoTxtWrap>
                    {news ? 
                        <div>
                            {news?.map((item) => {
                                return(
                                    <div key={item.id}>
                                    <NewsWrap>
                                        <NewDate>{item.updatedDate}</NewDate>
                                        <NewsInfoWrap>
                                            <NewsImg src='/images/icons/newsAlert.png'></NewsImg>
                                            <NewsOrigin>[{item.from}]</NewsOrigin>
                                            <NewsTit>{item.text}</NewsTit>
                                        </NewsInfoWrap>
                                    </NewsWrap>
                                    </div>
                                )})
                            }
                        </div>
                        :
                        <NewsWrap>
                            <NewDate></NewDate>
                            <NewsInfoWrap>
                                <NewsImg src='/images/icons/noNews.png'></NewsImg>
                                <NoNewsTit>최근 알람이 없습니다.</NoNewsTit>
                            </NewsInfoWrap>
                        </NewsWrap>
                    }
                <MoreBtn>더보기</MoreBtn>
                </InfoTxtWrap>
                <InfoCategory>
                    <CategoryWrap>
                    {Category?.map((item) => {
                    return(
                        <div key={item.id}>
                            <CategoryItem onClick={selectCategory} id={item.id} selected={seletId === `${item.id}`}>{item.title}</CategoryItem>
                        </div>
                    )})}
                    </CategoryWrap>
                </InfoCategory>
            </InfoWrap>
        </Container>
    )
}
const Container = styled.section`
    background: ${({ theme }) => theme.color.primary};
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const InfoWrap  = styled.section`
    display: flex;
    justify-content:center;
    margin: 120px 0;
    width: 653px;
    height: 636px;
`;
const InfoTxtWrap = styled.div`
    position:relative;
    width: 494px;
    height: 636px;
    padding: 60px 21px;
    box-sizing:border-box;
    border-radius:10px;
    background: #fff;
    box-shadow: 4px 2px 4px 0px rgba(0, 0, 0, 0.25);
    z-index:10;
`;
const NewsWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const NewDate = styled.p`
    align-self:flex-end;
    margin-right:
`;
const NewsInfoWrap = styled.div`
    width: 452px;
    height: 58px;
    display: flex;
    gap: 10px;
    align-items:center;
    border-bottom: 1px solid #CFCFCF;
`;
const NewsImg = styled.img`
    width: 35.65px;
    height: 40px;
`;
const NewsOrigin = styled.p`
    ${({ theme }) => theme.font.h2};
    font-weight: 700;
`;
const NewsTit = styled.h2`
    ${({ theme }) => theme.font.h2};
`;
const NoNewsTit = styled.h2`
    ${({ theme }) => theme.font.h2};
    font-weight: 700;
    color: ${({ theme }) => theme.color.grey};
`;
const MoreBtn = styled.button`
    position:  absolute;
    bottom: 23px;
    left: 170px;
    width: 160px;
    height: 63px;
    border:1px solid #CFCFCF;
    background: #fff;
    border-radius: 5px;
    ${({ theme }) => theme.font.h2};
    color: ${({ theme }) => theme.color.grey};
`;
const InfoCategory = styled.div`

`;
const CategoryWrap = styled.ul`

`;
const CategoryItem = styled.li`
    position:relative;
    right: 10px;
    width: 185px;
    height: 78px;
    display: flex;
    align-items:center;
    justify-content:center;
    background: ${(props) =>props.selected ? '#fff' : '#EFEFEF'};
    border:${(props) =>props.selected ? 'none' : '3px solid #CFCFCF'};
    box-sizing: ${(props) =>props.selected ? 'none' : 'border-box'};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    ${({ theme }) => theme.font.h2};
`;