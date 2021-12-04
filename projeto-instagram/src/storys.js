const story = [
  {
    usuario: "9gag",
    img: "arquivos/9gag 1.png"
  },
  {
    usuario: "meowed",
    img: "arquivos/meowed 1.png"
  },
  {
    usuario: "barked",
    img: "arquivos/barked 1.png"
  },
  {
    usuario: "nathanwpyle...",
    img: "arquivos/nathanwpylestrangeplanet 1.png"
  },
  {
    usuario: "wawawiwac...",
    img: "arquivos/wawawiwacomicsa 1.png"
  },
  {
    usuario: "respondeai",
    img: "arquivos/respondeai 1.png"
  },
  {
    usuario: "filomoderna",
    img: "arquivos/filomoderna 1 (1).png"
  },
  {
    usuario: "memeriago.",
    img: "arquivos/memeriagourmet 1.png"
  },
]

function Story({img,usuario}) {
  return (
  <article className="storie">
    <div className="imagens">
      <img className="borda" src="arquivos/stories_background.jpg"></img>
      <img className="imagem" src={img}></img>
    </div>
    <div className="texto">
      <p>{usuario}</p>
    </div>
  </article>
  );
}

export default function Storys(){
  return (
    <section className="stories">
      {story.map( (s) => (
        <Story img={s.img} usuario={s.usuario}/>))
      }
      <div className="seta">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div> 
    </section>
  );
}