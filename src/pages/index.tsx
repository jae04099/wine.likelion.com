import type { NextPage } from 'next'
import styled from 'styled-components'
const Home: NextPage = () => {
  const END_POINT = "https://wine-likelion-com-gjkmogijw-jae04099.vercel.app/";
  return (
    <Container>
      <a href={`${END_POINT}wines/Port`}>Wine🍷</a>
      <a href={`${END_POINT}beers/ale`}>Beer🍺</a>
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
    padding: 15px;
    background: #4800d9;
    border-radius: 20px;
    margin-right: 30px;
    cursor: pointer;
  }
  a:hover {
    transform: translateY(-20px);
  }
`