import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/titlte"

import { Descricao, BotaoTema, SidebarContainer } from "./styled"

type Props = {
    trocaTema: () => void;
}

const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Thiago Batista</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>ThiagoBdev</Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
            <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar