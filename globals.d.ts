/* tslint:disable */

declare const __DEV__

declare module '*.json' {
    const value: any
    export default value
}

interface IGlobal extends NodeJS.Global {
    reactotron: Reactotron
}
declare var global: IGlobal

type NodeEnvType = 'production' | 'development' | 'test'
interface IProcess extends NodeJS.Process {
    env: NodeJS.ProcessEnv & { NODE_ENV: NodeEnvType }
}
declare var process: IProcess
