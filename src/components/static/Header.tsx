import React from 'react'
import styled from 'styled-components'
import {PiShuffleBold} from "react-icons/pi"
import {IoIosRepeat} from "react-icons/io"
import {HiMusicalNote} from "react-icons/hi2"
import {BsPlayFill, BsFastForwardFill} from "react-icons/bs"
import pic from "../../assets/204_apple-music-note.svg"


const Header = () => {
  return (
    <div>
        <Container>
            <Main>

                {/* Music player icon */}
                <IconHolder>
                    <Icon/>
                    <Icon1/>
                    <Icon3/>
                    <Icon2/>
                    <Icon4/>

                </IconHolder>

                {/* Input Holder */}
                <InputHolder>
                <MusicShape>
                    <MusicIcon />
                </MusicShape>
            

                </InputHolder>

                {/* Login and Volume Space  */}

                <LoginHolder>
                    <VolumeHold>
                        <VolumeIcon/>
                    </VolumeHold>

                    <LoginHold>
                        <MenuIcon/>
                        <SignIn>
                            <ContactIcon/>
                            Sign In
                        </SignIn>
                    </LoginHold>
                </LoginHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Header


const ContactIcon = styled.div``
const SignIn = styled.div``
const MenuIcon = styled.div``
const LoginHold = styled.div``
const VolumeIcon = styled.div``
const VolumeHold = styled.div``
const LoginHolder = styled.div``
const MusicIcon = styled(HiMusicalNote)`
color: silver;
font-size: 30px;
`
const MusicShape = styled.div`
height:95%;
width: 40px;
background-color: rgba(225,225,225,0.7);
border: 1px solid rgba(225,225,225,0.7);
align-items: center;
justify-content: center;
display: flex;

`
const InputHolder = styled.div`
border: 1px solid silver;
width: 400px;
height: 70%;
`
const Icon4 = styled(IoIosRepeat)`
color:silver;
font-size: 22px;
margin: 0 5px;
`
const Icon3 = styled(BsPlayFill)`
color:silver;
font-size: 24px;
margin: 0 5px;
`
const Icon2 = styled(BsFastForwardFill)`
color:silver;
font-size: 20px;
rotate: calc(-180deg);
margin: 0 5px;

`
const Icon1 = styled(BsFastForwardFill)`
color:silver;
font-size: 20px;
margin: 0 5px;
`
const Icon = styled(PiShuffleBold)`
color:silver;
font-size: 20px;
margin: 0 5px;

`
const IconHolder = styled.div`
display: flex;
align-items: center;
`
const Main = styled.div`
width:90%;
height:100%;
align-items:center;
justify-content: space-between;
display:flex;
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
width:100%;
height:60px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

`