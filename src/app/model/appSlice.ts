import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'

type MyErrorAction = {
    error: Error
} & PayloadAction<string>

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
    extraReducers: (builder) => {
        builder.addMatcher(
            (action): action is MyErrorAction => action.type.endsWith('rejected'),
            (state, action) => {
                state.error = action.error.message
            }
        )
    },
    selectors: {
        selectError: (sliceState) => sliceState.error,
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
export const appSelectors = slice.selectors
