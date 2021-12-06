import Storys from "./storys";
import Posts from "./posts";
import BarraBot from "./barrabot";

export default function Conteudo() {
    return (
        <section className="conteudo">
            <Storys/>
            <Posts/>
            <BarraBot/>
        </section>
    );
}