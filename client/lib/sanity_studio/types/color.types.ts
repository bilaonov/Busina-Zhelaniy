export interface IColors {
    hex: string
    name: string
}

interface IColorCode {
    alpha: number
    hex: string
    hs1: IHs1[]
    hsv: IHsv[]
    rgb: IRgb[]
    _type: string
}

interface IHs1 {
    a: number
    h: number
    l: number
    s: number
    _type: string
}

interface IHsv {
    a: number
    h: number
    s: number
    v: number
    _type: string
}

interface IRgb {
    a: number
    b: number
    g: number
    r: number
    _type: string
}
