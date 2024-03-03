import { Footer } from './components/Footer/Footer'
import { Carousel } from './components/view/components/Carousel/Carousel'
import { Classes } from './components/view/components/Classes/Classes'
import { Delivery } from './components/view/components/Delivery/Delivery'
import { Feedbacks } from './components/view/components/Feedbacks/Feedbacks'
import { Header } from './components/view/components/Header/Header'
import { Hero } from './components/view/components/Hero/Hero'
import { Inside } from './components/view/components/Inside/Inside'
import { Pricing } from './components/view/components/Pricing/Pricing'
import { Questions } from './components/view/components/Questions/Questions'

export default function Initial() {
    return (
        <>
            <Header />
            <Hero />
            <Inside />
            <Classes />
            <Carousel />
            <Delivery />
            <Pricing />
            <Feedbacks />
            <Questions />
            <Footer />
        </>
    )
}
