import playIcon from '@/app/images/▶️.png'
import Image from 'next/image'

export function ClassesRow({
    title,
    playlist,
    step,
    format,
}: {
    title: string
    playlist?: string
    step: string
    format: string
}) {
    return (
        <tr className="flex flex-col md:flex-row md:items-center w-full gap-4 pb-[.875rem] border-b border-solid border-brand__gray-300">
            <td className="md:w-[33.33%]">
                <div className="flex flex-col gap-4 md:flex-row md:gap-1 md:items-center">
                    <span>
                        <Image
                            src={playIcon}
                            alt="Ícone de Play"
                        />
                    </span>
                    <span>{title}</span>
                </div>
            </td>

            <td className="md:w-[25%]">
                <div className="flex gap-1 items-center">
                    <span className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                        {playlist}
                    </span>
                </div>
            </td>

            <td className="md:w-[25%]">
                <div className="flex gap-1 items-center">
                    <span className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                        {step}
                    </span>
                </div>
            </td>

            <td className="md:w-[16.67%]">
                <div className="flex gap-1 items-center">
                    <span className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                        {format}
                    </span>
                </div>
            </td>
        </tr>
    )
}
