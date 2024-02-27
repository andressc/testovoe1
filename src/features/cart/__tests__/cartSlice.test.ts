import { cartReducer, cartActions, CartInitialState, cartSelectors } from 'features/cart/model/cartSlice'
import { CartFormData, CartItem } from 'features/cart/types/cartTypes'

// Тесты для reducers
describe('cartReducer', () => {
    let initialState: { cartItems: CartItem[]; cartAmount: number }
    let dispatch: jest.Mock<void, [action: any]>
    let getState: jest.Mock<{ cart: { cartItems: CartItem[] } }>

    beforeEach(() => {
        initialState = {
            cartItems: [],
            cartAmount: 0,
        }
        dispatch = jest.fn()
        getState = jest.fn().mockReturnValue({ cart: { cartItems: [{ id: 1, quantity: 2 }] } })
    })

    it('should add a cart item', () => {
        const action = cartActions.addCartItem({
            product: { id: '1', name: 'Product 1', cost: 10, description: '', fullDescription: '', image: '' },
        })
        const state = cartReducer(initialState, action)
        expect(state.cartItems.length).toBe(1)
        expect(state.cartItems[0].quantity).toBe(1)
        expect(state.cartAmount).toBe(10)
    })

    it('should add twice a cart item', () => {
        const product = {
            product: { id: '1', name: 'Product 1', cost: 10, description: '', fullDescription: '', image: '' },
        }

        const initialState = {
            cartItems: [{ ...product.product, quantity: 3 }],
            cartAmount: 0,
        }

        const state = cartReducer(initialState, cartActions.addCartItem(product))
        expect(state.cartItems.length).toBe(1)
        expect(state.cartItems[0].quantity).toBe(4)
        expect(state.cartAmount).toBe(10)
    })

    it('should remove a cart item', () => {
        initialState = {
            cartItems: [
                { id: '1', name: 'Product 1', cost: 10, quantity: 1, description: '', fullDescription: '', image: '' },
            ],
            cartAmount: 10,
        }
        const action = cartActions.removeCartItem({
            product: { id: '1', name: 'Product 1', cost: 10, description: '', fullDescription: '', image: '' },
        })
        const state = cartReducer(initialState, action)
        expect(state.cartItems.length).toBe(0)
        expect(state.cartAmount).toBe(0)
    })

    it('should remove twice a cart item', () => {
        const product = {
            product: { id: '1', name: 'Product 1', cost: 10, description: '', fullDescription: '', image: '' },
        }

        initialState = {
            cartItems: [{ ...product.product, quantity: 2 }],
            cartAmount: 20,
        }
        const state = cartReducer(initialState, cartActions.removeCartItem(product))
        expect(state.cartItems[0].quantity).toBe(1)
        expect(state.cartAmount).toBe(10)
    })

    it('should set the amount', () => {
        const state = cartReducer(initialState, cartActions.setAmount({ amount: 50 }))
        expect(state.cartAmount).toBe(50)
    })

    it('should clear the cart', () => {
        initialState = {
            cartItems: [
                { id: '1', name: 'Product 1', cost: 10, quantity: 1, description: '', fullDescription: '', image: '' },
            ],
            cartAmount: 10,
        }
        const state = cartReducer(initialState, cartActions.clearCart())
        expect(state.cartItems.length).toBe(0)
        expect(state.cartAmount).toBe(0)
    })
})

// Тесты для selectors
describe('cartSelectors', () => {
    let initialState: { cart: CartInitialState }

    beforeEach(() => {
        initialState = {
            cart: {
                cartItems: [
                    {
                        id: '1',
                        name: 'name',
                        description: 'description',
                        fullDescription: 'fullDescription',
                        cost: 500,
                        image: 'image',
                        quantity: 5,
                    },
                ],
                cartAmount: 10,
            },
        }
    })

    it('should select cart amount', () => {
        const selectCartAmount = cartSelectors.selectCartAmount(initialState)
        expect(selectCartAmount).toBe(10)
    })

    it('should select cart items', () => {
        const selectCartItems = cartSelectors.selectCartItems(initialState)
        expect(selectCartItems).toEqual(initialState.cart.cartItems)
    })
})

// Тесты для асинхронного thunk
describe('purchase thunk', () => {
    let dispatch: jest.Mock<void, [action: any]>
    let getState: jest.Mock<{}>

    let formData: CartFormData
    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn().mockReturnValue({})
        formData = {
            firstName: 'firstName',
            lastName: 'lastName',
            address: 'string',
            phone: 'string',
        }
    })

    it('should dispatch purchase action', async () => {
        await cartActions.purchase({ formData })(dispatch, getState, undefined)

        expect(dispatch).toHaveBeenCalled()
    })

    /*it('should reject with null value if there is an error', async () => {
        await expect(cartActions.purchase({ formData })(dispatch, getState, undefined)).rejects.toBeNull()
    })*/
})
