import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--red-color);
  height: 100vh;
  padding: 20px;
`
export const EmployeeDiv = styled.div`
  margin-top: 50px;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;

  .image {
    width: 55px;
  }
`
export const EmployeeItem = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  border-radius: 20px;
  font-size: x-large;
  font-weight: 500;
  font-family: var(--font-default);

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`
