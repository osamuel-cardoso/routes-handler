import { NotionPage } from '@/@types/notion'
import { ClassesRow } from './ClassesRow'

async function getNotionDatabasesData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`)
    return res.json()
}

export async function ClassesTable() {
    const { data } = await getNotionDatabasesData()
    const databaseResponseData: NotionPage[] = data

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
                    {databaseResponseData.map((result) => (
                        <ClassesRow
                            key={result.id}
                            title={
                                result.properties.Projeto.title[0].plain_text
                            }
                            playlist={result.created_time}
                            step={result.parent.type}
                            format={result.properties.Andamento.status.name}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}
