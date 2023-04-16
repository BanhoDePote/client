import styled from 'styled-components'

export const Container = styled.header`
  position: absolute;
  width: 100%;
  height: 92px;
  background-color: #cf2b2b;
  color: #ffffff;
  font-family: 'Righteous';
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #f4f4f4;
    background-color: #ffffff;
  }
`
