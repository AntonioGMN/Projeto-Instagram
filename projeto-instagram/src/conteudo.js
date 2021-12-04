import Storys from "./storys";
import Posts from "./posts";

export default function Conteudo() {
    return (
        <section className="conteudo">
            <Storys/>
            <Posts/>
        </section>
    );
}