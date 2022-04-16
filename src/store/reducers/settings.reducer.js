export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'

const SETTINGS_STORAGE = 'settings'

export const updateSettings = newSettings => (dispatch, getState) => {
  const { settings } = getState()
  const payload = { ...settings, ...newSettings }
  localStorage.setItem(SETTINGS_STORAGE, JSON.stringify(payload))
  dispatch({ type: UPDATE_SETTINGS, payload })
}

export const toggleSetting = settingKey => (dispatch, getState) => {
  const { settings } = getState()
  if (settings[settingKey] === undefined) {
    throw new Error(`Unknown setting: ${settingKey}`)
  } else {
    const oldValue = settings[settingKey]
    dispatch(updateSettings({ [settingKey]: !oldValue }))
  }
}

const savedSettings = JSON.parse(localStorage.getItem(SETTINGS_STORAGE)) || {}

const initialState = {
  theme: 'dark',
  ...savedSettings,
}

export default (state = initialState, action = {}) => {
  const { payload } = action

  switch (action.type) {
    case UPDATE_SETTINGS: {
      return { ...state, ...payload }
    }

    default:
      return state
  }
}
