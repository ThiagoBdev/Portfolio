import Titulo from "../../components/titlte";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styled";

const Sobre = () => (
        <section>
            <Titulo fontSize={16}>Sobre</Titulo>
            <Paragrafo tipo="secundario">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores corporis exercitationem rerum, quas pariatur doloribus voluptatem voluptates animi non, perspiciatis aliquam similique rem obcaecati amet facere vero repudiandae! Deserunt, quidem?
            </Paragrafo>
            <GithubSecao>
                <img src="https://github-readme-stats.vercel.app/api?username=ThiagoBdev&show_icons=true&theme=tokyonight" alt="commits" />
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ThiagoBdev&layout=compact&langs_count=7&theme=tokyonight" alt="languages"></img>
            </GithubSecao>
        </section>
)

export default Sobre