import React from 'react'
import styled from 'styled-components'
import singer from "../../assets/008_316x316cc.webp"
import singer1 from "../../assets/009_316x316cc.webp"
import singer2 from "../../assets/010_316x316cc.webp"
import singer3 from "../../assets/011_316x316cc.webp"


const props = [
    {pict: singer, text1: "Olamide: Oshe Naija",  text2: "Apple Music African" },
    {pict: singer1, text1: "Reminisce: Oshe Naija",  text2: "Apple Music African" },
    {pict: singer2, text1: "BOJ: Oshe Naija",  text2: "Apple Music African" },
    {pict: singer3, text1: "Flavour: Oshe Naija",  text2: "Apple Music African" },
]
const Playlist = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>Oshe Naija Guest Playlist</Text>
                <Holder>
                    {
                        props.map((props)=>(
                            <Card>
                        <ImageHolder>
                            <Image src={props.pict}/>
                            <Text1>{props.text1} </Text1>
                            <Text2>{props.text2} </Text2>
                        </ImageHolder>
                    </Card>
                        ))
                    }
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Playlist
const Text2 = styled.div`
font-weight: 300;
font-size: 13px;


`
const Text1 = styled.div`
font-weight: 400;
font-size: 14px;
`
const Image = styled.img`
width: 100%;
object-fit: cover;
border-radius: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const ImageHolder = styled.div`
width: 200px;
height:200px;

`
const Card = styled.div`
margin: 30px 10px;
`
const Holder = styled.div`
width: 43%;
display: flex;
flex-wrap: wrap;

`
const Text = styled.div`
font-weight: 500;
`
const Main = styled.div`
width: 90%;

`
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`