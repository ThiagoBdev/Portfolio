
import Paragrafo from "../Paragrafo"
import Titulo from "../titlte"

import { Card, LinkBotao } from "./styled"

const Projeto = () => (
    <Card>
        <Titulo>Projeto Lista de Tarefas</Titulo>
        <Paragrafo tipo="secundario">
            Lista de tarefas feita com VueJS
        </Paragrafo>
        <LinkBotao>Visualizar</LinkBotao>
    </Card>
)

export default Projeto