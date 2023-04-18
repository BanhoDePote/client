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
  a{
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    border: 3px solid #d4d4d4;
    background-color: #ffffff;
    filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.55));
  }
`
