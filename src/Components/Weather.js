import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsFillCloudLightningRainFill, BsFillCloudLightningFill, BsMoonStars, BsCloudSunFill } from 'react-icons/bs'
import {FaCloudSunRain, FaCloudMoonRain, FaCloudMoon } from 'react-icons/fa'
import {WiDaySnow, WiNightAltSnowWind } from 'react-icons/wi'
import {MdOutlineWbSunny } from 'react-icons/md'
import {TiWeatherCloudy } from 'react-icons/ti'


const Weather = () => {

  const weather = useSelector(state=>state.weather)
  const jam = weather.data.weather.code
  const jam1 = weather.data.pod


    // sun + small cloud = IoPartlySunnyOutline
  // moon + small cloud = FaCloudMoon
  // sun + rain = FaCloudSunRain +
  //lighting  = BsFillCloudLightningRainFill +
  // moon + rain = FaCloudMoonRain +
  // moon + no cloud = BsMoonStars +
  // sunny + no cloud = MdOutlineWbSunny +
  // heavy snow = BsCloudSnowFill
  // snow + sun = WiDaySnow
  // snow + moon = WiNightAltSnowWind
  //fog = BsCloudFogFill

  if(jam >= 200 && jam<=233){
    if(jam=== '233') {
      return <BsFillCloudLightningRainFill className='w-8 h-8 2xl:w-14 2xl:h-14' />
    } else {
      return <BsFillCloudLightningFill className='w-8 h-8 2xl:w-14 2xl:h-14' />

    }
  } else if (jam>= 300 && jam<=522) {
    if(jam1 === 'd') {
      return <FaCloudSunRain className='w-8 h-8 2xl:w-14 2xl:h-14' />
    } else {
      return <FaCloudMoonRain className='w-8 h-8 2xl:w-14 2xl:h-14' />
    }
  } else if(jam>=600 && jam<= 610) {
    if(jam1 === 'd') {

      return <WiDaySnow className='w-8 h-8 2xl:w-14 2xl:h-14' />
    } else {
      return <WiNightAltSnowWind className='w-8 h-8 2xl:w-14 2xl:h-14' />
    }
  } else if (jam === 800) {
    if(jam1 === 'd') {

      return <MdOutlineWbSunny className='w-8 h-8 2xl:w-14 2xl:h-14' />
    } else {
      return <BsMoonStars className='w-8 h-8 2xl:w-14 2xl:h-14' />
    }
  } else if (jam >= 801 && jam <= 803 ) {
    if(jam1 === 'd') {

      return <BsCloudSunFill className='w-8 h-8 2xl:w-14 2xl:h-14' />
    } else {
      return <FaCloudMoon className='w-8 h-8 2xl:w-14 2xl:h-14' />
    }
  } else {
    return <TiWeatherCloudy className='w-8 h-8 2xl:w-14 2xl:h-14' />
  }

}

export default Weather