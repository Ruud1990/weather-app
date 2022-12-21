import React from 'react'
import Image from 'next/image'

const Weather = ({data}) => {
    console.log(data.weather[0].icon)
  return (
    <div className='relative flex flex-col space-around max-w-[500px] w-full h-[90vh] m-auto p-3 text-gray-100 z-10'>
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image 
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                alt='/'
                width='100'
                height='100'
                />
                <p className='text-2xl'>{data.weather[0].main}</p>
            </div>
                <p className='text-8xl'>{((data.main.temp - 32) / 1.8).toFixed(0)}&#176;</p>
        </div>
        <div className='bg-black/50 relative p-8 mt-10 rounded-xl'>
          <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
          <div className='flex justify-between text-center'>
            <div>
              <p className='font-bold text-2xl'>{((data.main.feels_like -32) / 1.8).toFixed(0)}&#176;</p>
              <p className='text-1xl'>feels like</p>
            </div>
            <div>
              <p className='font-bold text-2xl'>{data.main.humidity}%</p>
              <p className='text-1xl'>Humidity</p>
            </div>
            <div>
              <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
              <p className='text-1xl'>Winds</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather