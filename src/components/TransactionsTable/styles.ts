import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child{
        color: var(--text-title);
      }

      &.deposit{
        color: var(--green);
      }

      &.withdraw{
        color: var(--red);
      }
    }
  }

  @media screen and (max-width: 680px){
    overflow-y: auto;
  }

`
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
   color: var(--text-body);
  }
  button{
    background: var(--shape);
    padding: 1rem 2.5rem;
    border: 0;
    color: var(--text-title);
    margin: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const DeleteButton = styled.button`
  background: none;
  border: 0;
  color: var(--text-title);
  svg{
    font-size: 1.2rem;
  }
`