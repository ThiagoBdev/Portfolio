import {ThemeProvider} from "styled-components"
import { useState } from "react"
import Projetos from './containers/Projetos'
import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from "./themes/light"
import temaDark from "./themes/dark"


function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
      <>
      <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema}/>
        <main>
          <Sobre />
          <Projetos/>
        </main>
      </Container>
      </ThemeProvider>
    </>
  )
}

export default App

//5:04
