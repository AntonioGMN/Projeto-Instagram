function LayoutDesktop(){
  return(
    <section class="layout-desktop">
      <div class="divisão1">
        <ion-icon name="logo-instagram"></ion-icon>
        <hr></hr>
        <img src="arquivos/logo.png"></img>
      </div>
      <div class="divisão2"><p>Pesquisar</p></div>
      <div class="divisão3">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </section>   
  );  
}

function LayoutMobile() {
  return(
  <section class="layout-mobile">
    <ion-icon name="logo-instagram"></ion-icon>
    <img src="arquivos/logo.png"></img>
    <ion-icon name="paper-plane-outline"></ion-icon>
  </section>
  );
}

export default function Header(){
  return (
  <header>
    <LayoutDesktop/>
    <LayoutMobile/>
  </header>
  );
}