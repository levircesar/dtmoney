import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem ;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 3rem 0;

  @media screen and (max-width: 680px){
    display: flex;
    flex-direction: column-reverse;
  }
`