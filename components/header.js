import Link from "next/link";

export default function () {
return (
    <header className="header-navbar">
        <nav>
            <div id="container-routes">
                <div id="container-grid">
                    <div className="col-12 row ms-1">
                        <div className="col-auto m-1 p-1 display-flex-center" >
                            <Link href="/" >Raiz</Link>
                        </div>
                        <div className="col-auto m-1 p-1 display-flex-center">
                            <Link href="/agentes">Lista de Agentes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)}
