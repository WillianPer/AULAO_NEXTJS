import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
    // return "<h1>Titulo</h1>"
    // return <h1>Título</h1>
    return (
        <div style={{
            display: 'flex',
            // flexDirection: 'column'
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
            }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
            <Navegador texto="Jsx" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao/" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/ms-5.0/123" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="yellow"/>
        </div>
    )
}