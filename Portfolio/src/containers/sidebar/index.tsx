import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/titlte"

import { Descricao, BotaoTema, SidebarContainer } from "./styled"

const Sidebar = () => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Thiago Batista</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>ThiagoBdev</Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar