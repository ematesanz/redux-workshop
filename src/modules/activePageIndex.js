const SET_ACTIVE_PAGE_INDEX = 'SET_ACTIVE_PAGE_INDEX'

export default (currentState = 0, { type, payload }) => {
  if (type === 'SET_ACTIVE_PAGE_INDEX') return payload
  return currentState
}

const setActivePageIndex = (payload) => ({
  type: SET_ACTIVE_PAGE_INDEX,
  payload,
})
