import { motion } from 'framer-motion'

import MainPage__Slider from './MainPage/__Slider'

import './mainPage.sass'


const MainPage = () => {

    const transition = {
        duration: 1,
        ease: [0.87, 0, 0.13, 1]
    }

    const variants = {
        initial: {
            height: '100vh'
        },
        animate: {
            height: '0',
            transition
        },
        exit: {
            height: '100vh',
            transition
        }
    }

    return (
        <>
            <motion.div
                className='loader'
                initial="initial"
                animate="animate"
                variants={ variants }
            ></motion.div>
            <MainPage__Slider/>
        </>
    )
}

export default MainPage