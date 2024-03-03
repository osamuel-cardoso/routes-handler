import { Container } from '@/app/components/Container'
import { Slider } from './Slider'

export function Feedbacks() {
    return (
        <section
            className="py-20 md:py-28 bg-brand__gray-100 overflow-hidden"
            id="feedbacks"
        >
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-2 items-center md:text-center">
                        <h2 className="text-[1.4375rem] md:text-[2rem] font-bold text-brand__gray-1000 uppercase">
                            O que dizem os membros do Marcados
                        </h2>
                        <p className="text-brand__gray-600 max-w-[29.5rem] text-[.9375rem] md:text-[1.0625rem]">
                            Se você está em dúvida, veja como o Marcados foi
                            ponto de virada para centenas de profissionais
                            criativos:
                        </p>
                    </div>

                    <Slider />
                </div>
            </Container>
        </section>
    )
}
