/* eslint-disable import/extensions */
import { ErrorType } from './types'

// {...}

export default (exception: ErrorType) => {
  // freeze system

  console.log(exception.error)
};
