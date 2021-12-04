const recomendados = [
  {
    imagem: "arquivos/badvibesmemes 1.png",
    usuario: "bad.vibes.memes",
    status: "Segue você"
  },
  {
    imagem: "arquivos/chibirdart 1.png",
    usuario: "chibirdart",
    status: "Segue você"
  },
  {
    imagem: "arquivos/razoesparaacreditar 1.png",
    usuario: "razoesparaacreditar",
    status: "Novo no Instagram"
  },
  {
    imagem: "arquivos/adorableanimals 1.png",
    usuario: "adorable_animals",
    status: "Segue você"
  },
  {
    imagem: "arquivos/smallcutecats 1.png",
    usuario: "smallcutecats",
    status: "Segue você"
  }
]

function Usuario(props) {
  return(
    <section className="UsuarioRecomendado">
      <img src={props.imagem}/>
      <div className="texto">
        <p>{props.texto}</p>
        <span>{props.subtexto}</span>
      </div>
    </section>
  );
}

function Sugestões() {
  return(
    <section className="sugestoes">
      <span>Sugestões para você</span>
      <p>Ver tudo</p>
    </section>
  );
}

function Recomendados({usuario, imagem, status}) {
  return (
    <article className="recomendados">
      <div className="recomendado">  
        <img src={imagem}/>
        <div className="texto">
          <p>{usuario}</p>
          <span>{status}</span>
        </div>
      </div>
      <p className="seguir">Seguir</p>
    </article>
  )
}

function Footer() {
  return(
    <footer>
      <a href="@">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
          Termos • Localizações • Contas mais relevantes • Hashtags • 
          Idioma
      </a>
      <a href="@">
          © 2021 INSTAGRAM DO FACEBOOK
      </a>
    </footer>
  )
}

export default function Sidebar(){
  return (
  <aside>
    <Usuario imagem="arquivos/catanacomics 1.png" texto="catanacomics" subtexto="Catana"/>
    <Sugestões/>
    {recomendados.map( (r) => (
    <Recomendados usuario={r.usuario} imagem={r.imagem} status={r.status}/>))
    }
    <Footer/>
  </aside>
  );
}