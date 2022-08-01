import React, { useState, useEffect } from 'react'
import cloud from '../Assets/airballoon1.jpeg'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoPartlySunnyOutline } from 'react-icons/io';
import { currentWeather, currentWeatherCity } from '../Store/slices/weatherSlice';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Weather from './Weather';
import WeatherImage from './WeatherImage';


const Home = () => {

  const [active, setActive] = useState('London')
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather)
  console.log(weather)
  const [loader, setLoader] = useState(true)



  let longitude = 0
  let latitude = 0

  const getLocation = async () => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((item) => {
        // latitude = item.coords.latitude
        // longitude = item.coords.longitude
        console.log(item.coords.latitude)
        dispatch(currentWeather({ lat: item.coords.latitude, lon: item.coords.longitude })).unwrap()
          .then((response) => {
            setLoader(false)
            // console.log(response)
          })
          .catch((err) => {
            setLoader(false)
            console.log(err)
          })

      });
    } else {
      console.log('unavailable')
    }

  }

  useEffect(() => {
    getLocation()

  }, [])

  const fastCheck = (values) => {
    dispatch(currentWeatherCity({ city: values.search })).unwrap()
    .then((response) => {
      setLoader(false)
      // console.log(response)
    })
    .catch((err) => {
      setLoader(false)
      console.log(err)
    })
  }





  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const currentTime = today.getHours() + ':' + today.getMinutes() + ' - ' + today.toDateString();





  return (
    <div className="bg-[url('/Users/test/Desktop/Frontend/Weather Website/weather-app/src/Assets/thunder.jpeg')]  h-screen">
      {loader ? <img src={cloud} alt='image of a cloudy sky' className='  object-cover h-full w-full' /> : <WeatherImage />}



      <div className='hidden sm:flex items-end gap-5 2xl:gap-8  text-white  my-5 absolute bottom-16 left-[2%] lg:left-[5%]'>
        <h1 className='text-[80px] leading-[80px] 2xl:text-[130px] 2xl:leading-[130px] font-medium'>{loader ? <Skeleton /> : <span>{weather.data.app_temp}<span>˚</span></span>}</h1>

        <div>
          <div className='flex pb-1'>
            <h1 className='text-5xl 2xl:text-8xl font-medium'>{loader ? <Skeleton /> : weather.data.city_name}</h1>
            <div className='lg:hidden'>{loader ? <Skeleton /> : <Weather />}</div>
          </div>
          <p className='text-lg 2xl:text-2xl'>{loader ? <Skeleton /> : <span>{weather.data.datetime}</span>}</p>
        </div>

        <div className='hidden lg:flex flex-col items-center'>
          {loader ? <Skeleton /> : <Weather />}
          <p className='2xl:text-2xl'>{loader ? <Skeleton /> : weather.data.weather.description}</p>
        </div>

      </div>

      <div className='absolute bg-gray-400/50 top-0 right-0 min-w-full sm:min-w-[35%] h-full overflow-y-scroll sm:pl-12 pl-10 sm:pt-0 p-5 pr-0  sm:m-0'>

        <div className='flex items-end gap-3 sm:hidden text-white relative my-5'>
          <h1 className='text-[50px] leading-[50px] font-medium'>{loader ? <Skeleton /> : <span>{weather.data.app_temp}<span>˚</span></span>}</h1>

          <div>
            <div className='flex '>
              <h1 className='text-2xl font-medium'>{loader ? <Skeleton /> : weather.data.city_name}</h1>
              {loader ? <Skeleton /> : <Weather />}
            </div>
            <p className='text-sm'>{loader ? <Skeleton /> : <span>{weather.data.datetime}</span>}</p>
          </div>

        </div>

        <div className='mb-10'>
          <Formik
            initialValues={
              {
                search: ''
              }
            }
            // validationSchema={validation}
            onSubmit={fastCheck}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form>
                <div className='flex items-end gap-[30px] pr-10 sm:pr-0 relative'>

                  <Field
                    name='search' type='text' className={` ${errors.storeName && touched.storeName && "border-red-700"
                      } border-b-white/80 border-b-[1px] w-full bg-transparent text-lg 2xl:text-4xl font-medium text-white outline-none py-2 2xl:py-5  placeholder:text-white/80`} placeholder='Another Location'
                  />

                  <button className='min-w-[48px] rounded-sm h-12 hidden   sm:min-w-[80px] sm:h-[80px] 2xl:min-w-[120px] 2xl:h-[120px] sm:flex items-center justify-center border-0 bg-white/80'>
                    <BsSearch alt='search-icon' className=' w-5 h-5 2xl:w-10 2xl:h-10' />
                  </button>

                  <button className='min-w-[48px] rounded-sm h-12  sm:min-w-[80px] sm:h-[80px] 2xl:min-w-[120px] 2xl:h-[120px] sm:hidden flex items-center justify-center border-0 bg-transparent text-white absolute right-10'>
                    <BsSearch alt='search-icon' className=' w-5 h-5 2xl:w-10 2xl:h-10' />
                  </button>
                </div>

                <p className="text-red-700 text-sm mt-1">
                  <ErrorMessage name="search" />
                </p>

                {/* quick search location */}
                <div className='flex flex-col gap-6 2xl:gap-14 my-6 2xl:my-16 sm:mt-10 sm:mb-12 mr-[40px]'>

                  <h1 onClick={() => {
                    setFieldValue('search', 'Lagos')
                    setActive("Lagos")
                    fastCheck({search:'Lagos'})
                  }} className={`font-medium cursor-pointer text-lg sm:text-lg 2xl:text-4xl  ${active === "Lagos" ? "text-white" : "text-white/60"}`}>Lagos</h1>
                  <h1 onClick={() => {
                    setFieldValue('search', 'London')
                    setActive("London")
                    fastCheck({search:'London'})

                  }} className={`font-medium cursor-pointer text-lg sm:text-lg 2xl:text-4xl  ${active === "London" ? "text-white" : "text-white/60"}`}>London</h1>
                  <h1 onClick={() => {
                    setFieldValue('search', 'New York')
                    setActive("New York")
                    fastCheck({search:'New York'})
                  }} className={`font-medium cursor-pointer text-lg sm:text-lg 2xl:text-4xl  ${active === "New York" ? "text-white" : "text-white/60"}`}>New York</h1>
                  <h1 onClick={() => {
                    setFieldValue('search', 'Monaco')
                    setActive("Monaco")
                    fastCheck({search:'Monaco'})
                  }} className={`font-medium cursor-pointer text-lg sm:text-lg 2xl:text-4xl  ${active === "Monaco" ? "text-white" : "text-white/60"}`}>Monaco</h1>
                </div>

                <hr className='bg-white/80 mr-[40px]' />
              </Form>
            )}
          </Formik>
        </div>

        <div className='my-6 sm:mt-10 sm:mb-12 mr-[40px] 2xl:my-16 2xl:text-4xl '>

          <h1 className='mb-10 text-white font-medium'>Weather Details</h1>

          <div className='flex flex-col gap-6  2xl:gap-14'>
            <div className='flex items-center justify-between'>
              <h1 className='text-white/60'>Wind</h1>
              <h1 className='text-white'>{loader ? <Skeleton /> : <span>{weather.data.wind_spd}<span>m/s</span></span>}</h1>
            </div>
            <div className='flex items-center justify-between'>
              <h1 className='text-white/60'>Humidity</h1>
              <h1 className='text-white'>{loader ? <Skeleton /> : <span>{weather.data.rh}<span>%</span></span>}</h1>
            </div>
            <div className='flex items-center justify-between'>
              <h1 className='text-white/60'>Pressure</h1>
              <h1 className='text-white'>{loader ? <Skeleton /> : <span>{weather.data.pres}<span>mb</span></span>}</h1>
            </div>
            <div className='flex items-center justify-between'>
              <h1 className='text-white/60'>Visibility</h1>
              <h1 className='text-white'>{loader ? <Skeleton /> : <span>{weather.data.vis}<span>Km</span></span>}</h1>
            </div>
            {/* <div className='flex items-center justify-between'>
              <h1 className='text-white/60'>Rain</h1>
              <h1 className='text-white'>0mm</h1>
            </div> */}
          </div>

        </div>

        <hr className='bg-white/80 mr-[40px]' />

      </div>


    </div>
  )
}

export default Home