import { WeatherData } from '@/@types/weather'

const CITY = 'São Paulo, BR'
const API_KEY = '2c9cb9dd5a93cb5c989980c52a4ecfec'
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}&lang=pt_br`

async function getWeather() {
    const res = await fetch(`${WEATHER_URL}`)
    return res.json()
}

export async function Temp() {
    const data = await getWeather()
    const weatherResponse: WeatherData = data

    return (
        <div className="px-[.5625rem] py-[.6875rem] text-brand__gray-100 bg-brand__gray-950 font-bold uppercase text-[.8125rem] md:text-[.875rem] rounded-md transition leading-none hover:bg-brand__blue-700_base hover:text-brand__gray-1000">
            {weatherResponse.main.temp.toFixed(1)} <span>GRAUS</span>
        </div>
    )
}
