// import { createSelector } from 'reselect'
import { KEY } from '#modules/app'

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )

// Selectors
export const isLoading = state => state[KEY].status.isPending
export const isLoaded = state => state[KEY].isLoaded
