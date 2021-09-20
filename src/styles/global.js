import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
    margin-left: 20px;
    background: #7159c145;
  }
  body{
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothig: antialiased !important;
  }
   ul{
    list-style: none;
  }
/*
  li{
    width: 200px;
    height: 60px;
    background: #7159c1b5;
    border: solid 1px #7159c1;
    border-radius: 4px;
    margin-bottom: 12px;
    align-items: center;
    display: flex;
  } */
`;