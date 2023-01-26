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
export const EmployeeForm = styled.form`
  margin-top: 50px;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: larger;
    margin-bottom: -5px;
    text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
      -1px -1px #000, 1px -1px #000, -1px 1px #000;
    margin-bottom: 3px;
  }

  input {
    height: 45px;
    border: 1px solid #000000;
    border-radius: 15px;
    font-size: larger;
    text-align: center;
    margin-bottom: 22px;
  }

  button {
    height: 45px;
    border-radius: 15px;
    background-color: var(--button-footer);
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-weight: 900;
    border: none;
    cursor: pointer;

    &:hover {
      filter: saturate(0.6);
    }
  }
`
