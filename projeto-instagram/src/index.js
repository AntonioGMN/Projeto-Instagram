import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';


function Tudo() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

ReactDOM.render(<Tudo />, document.querySelector(".root"));