import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'

const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const slice = createAppSlice({
    name: 'app',
    initialState: {
        error: null as null | string,
    },
    reducers: (creators) => {
        return {
            setError: creators.reducer((state, action: PayloadAction<{ error: string | null }>) => {
                state.error = action.payload.error
            }),
        }
    },
    selectors: {
        selectError: (sliceState) => sliceState.error,
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
export const appSelectors = slice.selectors
