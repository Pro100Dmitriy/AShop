import { createSlice } from "@reduxjs/toolkit"

// Slider
import imgSlide1 from '../../resourse/MainSlide01.jpg'
import imgSlide2 from '../../resourse/MainSlide02.jpg'


const initialState = {
    slider: [
        { id: 1, title: 'Get a proven digital product team', description: 'There are many things that need to be done in order to create a successful startup. First of all, you need to understand the startup lifecycle and the market for your product. When you’re done with that, you need to know your competition.', link: './', imgUrl: imgSlide1 },
        { id: 2, title: 'Second slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: './', imgUrl: imgSlide2 },
    ],
    activeSlide: 0
}


const mainPageSlice = createSlice( {
    name: 'mainPage',
    initialState,
    reducers: {
        changeActiveSlide: ( state, action ) => {
            state.activeSlide = action.payload
        }
    }
} )


const { actions, reducer } = mainPageSlice

export default reducer
export const {
    changeActiveSlide
} = actions