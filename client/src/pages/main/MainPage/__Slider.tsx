import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import Slider from 'react-slick'

import { changeActiveSlide } from '../mainPageSlice'

import './__slider.sass'

const MainPage__Slider = () => {
    // const sliderList = useSelector( state => state.mainPage.slider )
    // const activeSlider = useSelector( state => state.mainPage.activeSlider )
    // const dispatch = useDispatch()
    // const mainSlider = useRef(null)

    // const [isAnimtaing, setIsAnimating] = useState(false)

    // const render = ( array ) => {
    //     const items = array.map( (slide, indexSlide) => {
            
    //     } )

    //     const settings = {
    //         dots: false,
    //         arrows: false,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         fade: true,
    //         autoplay: true,
    //         autoplaySpeed: 10000,
    //         initialSlide: activeSlide,
    //         beforeChange( oldIndex, newIndex ){
    //             dispatch( changeActiveSlide( newIndex ) )
    //         }
    //     }
    //     return (
    //         <Slider ref={ mainSlider } {...settings} className="a-carousel">
    //             { items }
    //         </Slider>
    //     )
    // }


    // const createNavigation = array => {
        
    // }

    // const sliderNavigation = createNavigation( sliderList )
    // const sliders = render( sliderList )
    return (
        <section className="a-slider">
            
        </section>
    )
}

export default MainPage__Slider