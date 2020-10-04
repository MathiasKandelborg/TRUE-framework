import { UTILITY } from 'settings/UTILITY'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface IUIModel extends Omit<UTILITY.UISettings, 'CONSTANTS'> {}

export default IUIModel
