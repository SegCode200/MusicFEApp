import React from 'react'
import styled from 'styled-components'
import sing from "../../assets/Crayon.webp"
import sing1 from "../../assets/002_530x304sr.webp"


const props = [
    {text1: "FEATURED PLAYLIST", text2: "Africa Now", text3: "Apple Music  African", picture: sing, text4: 'Crayon and Ayra star bless us with the love-struck duet "Ngozi"'},
    {text1: "APPLE MUSIC HOME SESSION", text2: "Apple Music Home Session: Lokay- Single ", text3: "Lokay", picture: sing1, text4: 'Lokay reflects with stripped-back version of his biggest hits '}
]

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>
                    Browse
                </Text>
                
                <Holder>
                {
                    props.map((props, index)=>(
                        <Card >
                <SubText>
                    {props.text1}
                </SubText>
                    <Text1>{props.text2}</Text1>
                    <Text2>{props.text3}</Text2>
                    <ImageHolder>
                        
                        <Image src={props.picture}/>
                    </ImageHolder>
                    <LastText>{props.text4}</LastText>
                </Card>
                    ))
                }
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Hero

const Holder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const LastText = styled.div`
font-size: 11px;
color: white;
font-weight: 500;
margin: 0 10px;
`
const Image = styled.img`
width: 100%;
object-fit: cover;
border-radius: 10px;
`
const ImageHolder = styled.div`
width: 400px;
height: 200px;
margin: 10px 0;

`
const Text2 = styled.div`
font-weight: 300;

`
const Text1 = styled.div`
font-weight: 400;
font-size: 16px;
`
const Card = styled.div`
position: relative;
`
const SubText = styled.div`
font-size: 13px;
font-weight: 200;
margin-top: 5px;
`
const Text = styled.div`
border-bottom: 1px solid silver;
padding: 10px 0;
font-size: 40px;
font-weight: 500;
`
const Main = styled.div`
width:90%;
height:100%;
align-items:center;
justify-content: space-between;
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
width:100%;
margin: 30px 0;

`