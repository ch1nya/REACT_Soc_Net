
export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLengthCreator = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLengthCreator = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
