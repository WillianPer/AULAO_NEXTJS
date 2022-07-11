export default function Jsx() {
    const a = 4
    const b = 3
    console.log(a * b)
    
    const obj = {nome: "João", idade: 30}

    const titulo = <h1>JSX é um conceito Central</h1>

    function subTitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <div>

            {titulo}

            <h2>{a * b}</h2>
            <h2>{Math.random()}</h2>
            
            {subTitulo()}

            <p>
                {JSON.stringify({nome: "João", idade: 30})}
            </p>
        </div>
    )
}