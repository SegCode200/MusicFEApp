import React from 'react'
import styled from 'styled-components'
import {IoIosArrowForward} from "react-icons/io"
import singer from "../../assets/042_316x316cc.webp"
import singer1 from "../../assets/043_316x316cc.webp"
import singer2 from "../../assets/044_316x316cc.webp"
import singer3 from "../../assets/045_316x316cc.webp"
import singer4 from "../../assets/046_316x316cc.webp"



const props = [
    {picture: singer, text1: "Top 100: Global" },
    {picture: singer1, text1: "Top 100: Nigeria" },
    {picture: singer2, text1: "Top 100: UK" },
    {picture: singer3, text1: "Top 100: USA" },
    {picture: singer4, text1: "Top 100: South Africa" },
  
]
const Release = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>Daily Top 100 <Icon/></Text>
                <Holder>
                   {
                    props.map((props)=>(
                        <Card>
                        <ImageHolder>
                            <Image src={props.picture}/>
                        </ImageHolder>
                        <Div>
                        <Text1>{props.text1}</Text1>
                        <IconHold>E</IconHold>
                        </Div>
                        <Text2>Apple Music</Text2>
                    </Card>

                    ))
                   }
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Release
const Text2 = styled.div`
font-weight: 300;
font-size: 13px;

`
const IconHold = styled.div`
background-color: black;
color: white;
padding: 0 5px;
font-size: 10px;
`
const Text1 = styled.div`
font-weight: 400;
font-size: 14px;
`
const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top:5px ;
`
const Image = styled.img`
width: 100%;
object-fit: cover;
border-radius: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const ImageHolder = styled.div`
width: 220px;
height: 220px;

`
const Card = styled.div`
margin: 30px 10px;
`
const Holder = styled.div`
display: flex;
flex-wrap: wrap;
`
const Icon = styled(IoIosArrowForward)`
font-size: 20px;
color: silver;
`
const Text = styled.div`
font-weight: 500;
margin-right: 5px;
display: flex;
align-items: center;
`
const Main = styled.div`
width: 90%;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin: 40px 0;
`