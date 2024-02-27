import { appReducer, appActions, appSelectors } from './appSlice' // Путь к вашему редюсеру

// Тесты для reducers
describe('appReducer', () => {
    it('should set error', () => {
        const initialState = { error: null }
        const error = 'Test error message'
        const state = appReducer(initialState, appActions.setError({ error }))
        expect(state.error).toBe(error)
    })

    it('should clear error', () => {
        const initialState = { error: 'Previous error message' }
        const state = appReducer(initialState, appActions.setError({ error: null }))
        expect(state.error).toBeNull()
    })
})

// Тесты для selectors
describe('appSelectors', () => {
    it('should select error', () => {
        const state = { app: { error: 'Test error message' } }
        const selectedError = appSelectors.selectError(state)
        expect(selectedError).toBe('Test error message')
    })
})
