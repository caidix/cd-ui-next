import { isNumber } from './utils'

export const isValidWidthUnit = (val: string | number): boolean => {
  if (isNumber(val)) {
    return true
  } else {
    return ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some((unit) =>
      (val as string).endsWith(unit),
    )
  }
}

export const isValidComponentSize = (val: string): boolean =>
  ['', 'large', 'medium', 'small', 'mini'].includes(val)

export const isValidDatePickType = (val: string): boolean =>
  [
    'year',
    'month',
    'date',
    'dates',
    'week',
    'datetime',
    'datetimerange',
    'daterange',
    'monthrange',
  ].includes(val)
