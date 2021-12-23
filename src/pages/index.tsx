import type { NextPage } from 'next'
import { useState } from 'react';
import styled from 'styled-components'
const Home: NextPage = () => {
  const END_POINT = "https://wine-likelion-com-gjkmogijw-jae04099.vercel.app/";
  const [isWineClicked, setWineClick] = useState(false);
  const [isBeerClicked, setBeerClick] = useState(false);

  const handleWineClick = () => {
    setWineClick(!isWineClicked)
  }
  const handleBeerClick = () => {
    setBeerClick(!isBeerClicked)
  }
  return (
    <Container>
      <InnerContainer>
      <WineContainer>
      <a onClick={handleWineClick}>Wine🍷</a>
      {isWineClicked ? (<ul>
        <li><a href={`${END_POINT}wines/Dessert`}>Dessert</a></li>
        <li><a href={`${END_POINT}wines/Port`}>Port</a></li>
        <li><a href={`${END_POINT}wines/Reds`}>Reds</a></li>
        <li><a href={`${END_POINT}wines/Rose`}>Rose</a></li>
        <li><a href={`${END_POINT}wines/Sparkling`}>Sparkling</a></li>
        <li><a href={`${END_POINT}wines/Whites`}>Whites</a></li>
      </ul>) : ''}
      </WineContainer>
      <BeerContainer>
      <a onClick={handleBeerClick}>Beer🍺</a>
      {isBeerClicked ? (<ul>
        <li><a href={`${END_POINT}beers/ale`}>Ale</a></li>
        <li><a href={`${END_POINT}beers/stouts`}>Stouts</a></li>
      </ul>) : ''}
      </BeerContainer>
      </InnerContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #222;
  a {
    color: #fff;
    font-size: 32px;
    padding: 10px;
    background: #4800d9;
    border-radius: 20px;
    margin-right: 30px;
    cursor: pointer;
  }
  a:hover {
    transform: translateY(-20px);
  }
  ul {
    padding: 0;
    
  }
  li {
    list-style: none;
    margin-top: 30px;
  }
`

const WineContainer = styled.div`
li > a {
   font-size: 20px;
   background: transparent;
   border: 3px solid #4800d9;
 }
`
const BeerContainer = styled.div`
li > a {
  font-size: 20px;
   background: transparent;
   border: 3px solid #4800d9;
 }
`

const InnerContainer = styled.div`
  display: flex;
`