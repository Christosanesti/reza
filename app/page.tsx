"use client";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import SectionLayout from "./Components/Header/SectionLayout";
import Card from "./Components/Header/Card";
import { cards } from "./utils/cards";
import FullPage from "./Components/Header/FullPage";
import TextSection from "./Components/Header/TextSection";
import HorizontalWrapper from "./Components/Header/HorizontalWrapper"
import Footer from "./Components/Header/Footer";



export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper
            height="40rem"
            direction="-1400"
          >
            <div className="cards">
              {cards.map((card, index) => {
                return <Card key={index} title={card.title} description={card.description} image={card.image} />;
              })}
              
            </div>
          </HorizontalWrapper>
            
        </SectionLayout>

        <FullPage />

        <SectionLayout>
          <HorizontalWrapper
            height="40rem"
            direction="1400"
          >
            <div className="cards" style={{right:0}}>
              {cards.map((card, index) => {
                return <Card key={index} title={card.title} description={card.description} image={card.image} />;
              })}
              
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </MainStyled>
      
    </>
  )
}

const MainStyled = styled.main`

  min-height: 100vh;
  width: 100%;

  .cards{
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
    position: absolute;
    
  }

`;