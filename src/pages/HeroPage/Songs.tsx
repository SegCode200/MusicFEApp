import React from 'react'
import {BsThreeDots} from "react-icons/bs"
import {IoIosArrowForward} from "react-icons/io"
import { styled } from 'styled-components'
import singer from "../../assets/025_48x48bb.webp"
import singer1 from "../../assets/026_48x48bb.webp"
import singer2 from "../../assets/027_48x48bb.webp"
import singer3 from "../../assets/028_48x48bb.webp"
import singer5 from "../../assets/029_48x48bb.webp"
import singer6 from "../../assets/030_48x48bb.webp"
import singer7 from "../../assets/031_48x48bb.webp"
import singer8 from "../../assets/032_48x48bb.webp"
import singer9 from "../../assets/033_48x48bb.webp"
import singer10 from "../../assets/034_48x48bb.webp"
import singer11 from "../../assets/035_48x48bb.webp"
import singer12 from "../../assets/036_48x48bb.webp"




const props = [
    {picture: singer, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer1, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer2, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer3, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer5, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer6, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer7, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer8, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer9, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer10, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer11, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
    {picture: singer12, text: "Jaja (feat.Babyboy AV", text1: "Victony"},
]

const Songs = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>Best New Songs<Icon/></Text>
                <Holder>
                    {
                        props.map((props)=>(
                            <Card>
                        <ImageHolder>
                            <Image src={props.picture}/>
                        </ImageHolder>
                        <Div>
                            <Text1> {props.text}</Text1>
                            <Text2> {props.text1}</Text2>
                        </Div>
                        <Icon1/>
                    </Card>
                        ))
                    }
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Songs
const Icon1 = styled(BsThreeDots)`
font-size: 20px;
color: red;
`
const Text2 = styled.div`
font-size: 13px;
font-weight: 300;
`
const Text1 = styled.div`
font-size: 14px;
`
const Div = styled.div`
`
const Image = styled.img`
width: 100%;
object-fit: cover;
`
const ImageHolder = styled.div`
width: 50px;
height: 50px;
`
const Card = styled.div`
padding-top:10px ;
margin: 5px 5px;
border-top: 1px solid silver;
display: flex;
width: 300px;
justify-content: space-between;
`
const Holder = styled.div`
display: flex;
flex-wrap: wrap;
height: 300px;

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
`