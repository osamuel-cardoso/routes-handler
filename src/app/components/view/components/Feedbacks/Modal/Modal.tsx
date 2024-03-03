import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useEffect } from 'react'

export function Modal({
    name,
    profile,
    username,
    content,
    onDismount,
}: {
    name?: string
    username: string
    profile: string | StaticImport
    content?: string
    onDismount: () => void
}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.removeAttribute('style')
        }
    }, [])

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onDismount()
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
        }
    }, [onDismount])

    return (
        <div
            onClick={onDismount}
            className="w-screen h-screen bg-brand__gray-100 fixed left-0 top-0 bottom-0 right-0 z-10 bg-opacity-80 backdrop-blur-md"
        >
            <div className="flex items-center justify-center h-full w-full p-4">
                <div className="p-8 overflow-y-auto max-h-[64vh] bg-brand__gray-100 max-w-[37.75rem] flex flex-col gap-4 rounded-lg z-10">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full overflow-hidden h-[3rem] w-[3rem]">
                            <Image
                                className="w-full h-full"
                                src={profile}
                                alt="Foto do aluno"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="uppercase">{name}</h4>
                            <p className="text-brand__gray-600 text-[.8125rem]">
                                {username}
                            </p>
                        </div>
                    </div>
                    <p className="font-regular text-[.9375rem] text-brand__gray-600 leading-snug">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
