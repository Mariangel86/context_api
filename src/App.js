import React, {useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicio from './componentes/PaginaInicio';
import Blog from './componentes/Blog';
import Acerca from './componentes/Acercade';
import Header from './componentes/Header';
import styled from 'styled-components';
import Post from './componentes/Posts';
import Error404 from './componentes/Error404';
import { ContextoTema } from './contextos/contextoTema';

const App = () => {
  const {tema} = useContext(ContextoTema);
  console.log(tema.fuente);

  return (
    <BrowserRouter>
        <ContenedorPrincipal>
          <Header/>
          <Main tema={tema}>
            <Routes>
            <Route path="*" element={<Error404/>}/>
            <Route path="/" element={<PaginaInicio/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/post/:id" element={<Post/>}/>
            <Route path="/Acerca" element={<Acerca/>}/>
            </Routes>
          </Main>
        </ContenedorPrincipal>
    </BrowserRouter>
  );
  
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width:90%;
  max-width: 700px;
`;

const Main = styled.main`
font size: ${props=> props.tema ? props.tema.fuente + 'px' : '16px'}  
text-align: ${props=> props.tema ? props.tema.alineado : 'right'}  
background: #fff;
  padding:40px;
  border-radius:10px;
  box-shadow: 0px 0px 5px rgba (129, 129, 129 0.1);
`;

export default App;