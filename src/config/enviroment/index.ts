import envDev from '../../../__env__/development.json'
import envProd from '../../../__env__/production.json'
import envTest from '../../../__env__/test.json'

import { IEnv } from './types'

let config: IEnv = null

switch (process.env.NODE_ENV) {
    case 'development':
        config = envDev
        break
    case 'test':
        config = envTest
        break
    case 'production':
        config = envProd
        break
    default:
        throw new Error('NODE_ENV not found.')
}

export default config
