const post = [
  {
    imgUsuario: "arquivos/meowed 1.png",
    nomeUsuario: "meowed",
    foto: "arquivos/gato-telefone 1.png",
    imgComentario: "arquivos/barked 1.png",
    curtiu: "respondeai",
    nCurtidas: "outras 101.523 pessoas"
  },
  {
    imgUsuario: "arquivos/barked 1.png",
    nomeUsuario: "barked",
    foto: "arquivos/dog 1.png",
    imgComentario: "arquivos/adorableanimals 1.png",
    curtiu: "adorable_animals", 
    nCurtidas: "outras 99.159 pessoas"
  }
]

function PostTop({imgUsuario, nomeUsuario, foto}) {
  return (
    <section className="post-topo">
      <div>
        <img src={imgUsuario}/>
        <p>{nomeUsuario}</p>
      </div>
      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
    </section>
  )
}

function PostBottom({imgComentario, curtiu, nCurtidas}) {
  return (
    <section className="post-bottom">
      <img src={imgComentario}/>
      <p>Curtido por</p>
      <strong> {curtiu} </strong>
      <p>e</p>
      <strong> {nCurtidas} </strong>
    </section>
  );
}

function PostIcons() {
  return (
  <div className="post-icons">
    <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    <ion-icon name="bookmark-outline"></ion-icon>
  </div>
  );
}

function Post({imgUsuario, nomeUsuario, foto, imgComentario, curtiu, nCurtidas}) {
  return (
    <section className="post">
      <PostTop imgUsuario={imgUsuario}  nomeUsuario={nomeUsuario} foto={foto}/>
      <img src={foto}/>
      <PostIcons />
      <PostBottom imgComentario={imgComentario} curtiu={curtiu} nCurtidas={nCurtidas}/>
    </section>
  );
}

export default function Posts() {
  return (
    <section class="posts"> 
      {post.map((p) => 
        <Post imgUsuario={p.imgUsuario} nomeUsuario={p.nomeUsuario} 
        foto={p.foto} imgComentario={p.imgComentario} curtiu={p.curtiu} nCurtidas={p.nCurtidas}/>
      )}
    </section>
  );
}