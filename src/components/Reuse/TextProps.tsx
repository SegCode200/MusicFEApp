import React from 'react'
import styled from 'styled-components'
import {IoIosArrowForward} from "react-icons/io"


interface iData {
    text: string
}

const TextProps:React.FC<iData> = ({text}) => {
  return (
    <div>
        <Container>
            <Main>
                {text}
                <Icon/>
            </Main>
        </Container>

    </div>
  )
}

export default TextProps
const Icon = styled(IoIosArrowForward)`
font-size: 20px;
color: silver;
`
const Main = styled.div`
font-weight: 500;
margin-right: 5px;
display: flex;
align-items: center;
`
const Container = styled.div`

`