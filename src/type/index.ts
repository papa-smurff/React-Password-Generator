export interface InitValType {
    type: string, 
    value: string | number,
}
export interface IInit {
    result: InitValType[],
    rangeSliderVal: number,
    settingsInfo: ISettingsInfo[]
}
export interface ISettingsInfo {
    type: string, 
    include?: boolean
}