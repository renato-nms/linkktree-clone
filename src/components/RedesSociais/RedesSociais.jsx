import './RedesSociais.css'
function RedesSociais() {

    const ListaRedes = [
            { id: 1, urlNome: 'Instagram', url: 'https://www.instagram.com/renatonms11/'},
            { id: 2, urlNome: 'Linkedin', url: 'https://www.linkedin.com/in/renato-marques-36a524319/'},
            { id: 3, urlNome: 'Projeto', url: 'https://superbrasiltelessaude.com.br/'},
        ]

        const LinksRedes = ListaRedes.map((props) =>
        <div key={props.id} className="conteudo_links">
            <a href={props.url}>{props.urlNome}</a>
        </div>)
    return (
        <>
        {LinksRedes}
        </>
    )
}

export default RedesSociais