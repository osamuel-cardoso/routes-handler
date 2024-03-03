import { ClassesRow } from './ClassesRow'

const classes = [
    {
        numero: '01',
        titulo: 'Nosso Porquê Ⓜ️',
        playlist: 'Apresentação',
        fase: 'Fase 0: Introdução',
        formato: 'Aula',
    },
    {
        numero: '02',
        titulo: 'O que é Branding',
        playlist: 'Para ser um(a) Estrategista',
        fase: 'Fase 1: Fundamentos',
        formato: 'Aula',
    },
    {
        numero: '03',
        titulo: 'Posicionamento 01 - Think Different, Apple',
        playlist: 'Para ser um(a) Estrategista',
        fase: 'Fase 3: Posicionamento',
        formato: 'Estudo de Caso',
    },
    {
        numero: '04',
        titulo: 'Design Thinking - O que é e como usar no Branding',
        playlist: 'Para ser um(a) Estrategista',
        fase: 'Fase 1: Fundamentos',
        formato: 'Aula',
    },
    {
        numero: '05',
        titulo: 'Storytelling c/ Renata Monteiro',
        playlist: 'Debriefing',
        fase: 'Fase 3: Posicionamento',
        formato: 'Aula',
    },
    {
        numero: '06',
        titulo: 'Branding Primitivo - Parte 01',
        playlist: 'Para ser um(a) Estrategista',
        fase: 'Fase 1: Fundamentos',
        formato: 'Aula',
    },
    {
        numero: '07',
        titulo: 'Branding Primitivo - Parte 02',
        playlist: 'Para ser um(a) Estrategista',
        fase: 'Fase 1: Fundamentos',
        formato: 'Análise de Marca',
    },
    {
        numero: '08',
        titulo: 'Implementação 01',
        playlist: 'Diagnóstico e Pesquisa',
        fase: 'Fase 4: Identidade',
        formato: 'Aula',
    },
    {
        numero: '09',
        titulo: 'Mapeamento 01',
        playlist: 'Diagnóstico e Pesquisa',
        fase: 'Fase 2: Estratégia de Marca',
        formato: 'Aula',
    },
    {
        numero: '10',
        titulo: 'Brand Guidelines c/ Cristiano Gonçalo',
        playlist: 'Melhores práticas c/ Identidade Visual',
        fase: 'Fase 4: Identidade',
        formato: 'Aula',
    },
    {
        numero: '11',
        titulo: 'Pós-venda do Branding',
        playlist: 'Para ter Insights',
        fase: 'Fase 4: Identidade',
        formato: 'Perguntas&Respostas',
    },
    {
        numero: '12',
        titulo: 'Investigação e Pesquisa c/ André Corrêa',
        playlist: 'Diagnóstico e Pesquisa',
        fase: 'Fase 2: Estratégia de Marca',
        formato: 'Aula',
    },
]

export function ClassesTable() {
    return (
        <>
            <table className="w-full">
                <thead className="hidden md:block w-full mb-9">
                    <tr className="w-full flex gap-4">
                        <td className="w-[33.33%]">
                            <span>Aulas</span>
                        </td>

                        <td className="w-[25%]">
                            <span>Playlist</span>
                        </td>

                        <td className="w-[25%]">
                            <span>Fase</span>
                        </td>

                        <td className="w-[16.67%]">
                            <span>Formato</span>
                        </td>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-4">
                    {classes.map((database, index) => (
                        <ClassesRow
                            key={index}
                            title={`${database.numero}. ${database.titulo}`}
                            playlist={database.playlist}
                            step={database.fase}
                            format={database.formato}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}
