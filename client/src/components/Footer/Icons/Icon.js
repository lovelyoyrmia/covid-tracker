import styled from 'styled-components'

const Icon = styled.i`
    font-size: 18px;
    margin-right: 10px;
`
export default function Icons({className}) {
    return <Icon className={className} />
  }
