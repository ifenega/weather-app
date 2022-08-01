import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cloud from '../Assets/cloudy.jpeg'
import rain from '../Assets/rainonwindow.jpeg'
import clear1 from '../Assets/eagleinclearsky.jpeg'
import clear2 from '../Assets/hotsun1.jpeg'
import clear3 from '../Assets/eagleinclearsky.jpeg'
import clear4 from '../Assets/Sunny-clearsky.jpeg'
import clear5 from '../Assets/sunny-clearsky2.jpeg'
import clear6 from '../Assets/airballoon1.jpeg'
import thunder from '../Assets/thunder.jpeg'

const WeatherImage = () => {
    const weather = useSelector(state=>state.weather)
    const jam = weather.data.weather.code

    const rand = Math.floor(Math.random()*7)
    if(jam >= 200 && jam<=233){
        return <img src={thunder} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
      } else if (jam>= 300 && jam<=522) {
        
          return <img src={rain} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
        
      } else if(jam>=600 && jam<= 610) {
       return <img src={cloud} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
      } else if (jam === 800) {
        if(rand === 1) {
            return <img src={clear1} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
        } else if (rand === 2) {
            return <img src={clear2} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
        
        } else if (rand === 3) {
            return <img src={clear3} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
        }
         else if (rand === 4) {
            return <img src={clear4} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
        
        }else if (rand === 5) {
            return <img src={clear5} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
        }
         else {
            return <img src={clear6} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
        }

      } else if (jam >= 801 && jam <= 803 ) {
       return <img src={cloud} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
      } else {
        return <img src={cloud} alt='image of a cloudy sky' className='  object-cover h-full w-full' />
      }
}

export default WeatherImage