import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInit, InitValType, ISettingsInfo } from "../type";

const initialState: IInit = {
    result: [],
    rangeSliderVal: 8,
    settingsInfo: [
        { type: "number", include: false },
        { type: "symbol", include: false },
        { type: "letter", include: false },
    ]
}
const passwordGenSlice = createSlice({
    name: 'passwordGen',
    initialState,
    reducers: {
        setPassword: (state, actions: PayloadAction<InitValType[]>) => {
            state.result = actions.payload
        },
        setSliderValue: (state, actions: PayloadAction<number>) => {
            state.rangeSliderVal = actions.payload
        },
        setSettingsInfo: (state, actions: PayloadAction<ISettingsInfo>) => {
            state.settingsInfo = state.settingsInfo.map(el => {
                if (el.type === actions.payload.type) {
                    return {
                        ...el,
                        include: !el.include
                    }
                }
                return el
            })
        }
    }
})

export const { setPassword, setSliderValue, setSettingsInfo } = passwordGenSlice.actions
export default passwordGenSlice.reducer