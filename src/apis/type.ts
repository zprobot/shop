interface ResponseBase {
    code: string
    msg: string
}

export type Good = {
    id: string
    name: string
    desc: string
    price: string
    picture: string
    discount?: null
    orderNum?: null | number
}
export type GoodCategory = {
    id: string
    name: string
    picture: string
    children: GoodCategory[] | OneCategory[]
    goods?: Good[]
}
export type OneCategory = {
    id: string
    name: string
    picture: string
    parentId: null
    parentName: null
    goods: Good[]
    categories: null
    brands: null
    salePropertis: null
}
    
export type Banner = {
    id: string
    imgUrl: string
    hrefUrl: string
    type: string
}
export type HotGood = {
    id: string
    picture: string
    title: string
    alt: string
}

export type SecondCategory = {
    id: string
    layer: number
    name: string
    parent: null
}
export type Brand = {
    desc: string
    id: string
    logo: string
    name: string
    nameEn: string
    picture: string
    place: string
    type: null
}
export type Properties = {
    id: string
    name: string
}
export type SalePropertis = {
    id: string
    name: string
    properties: Properties[]
}
export type FilterCategory = {
    id: string
    name: string
    parentId: string
    parentName: string
    picture: string | null
    brands: Brand[]
    categories: SecondCategory[]
    goods: Good[]
    saleProperties: SalePropertis[]
}
export type ReqSubData = {
    categoryId: string
    page: number
    pageSize: number
    sortField: string
}
export type SubData = {
    counts: number
    items: Good[]
    page: number
    pageSize: number
    pages: number
}
export interface GoodCategoryResponse extends ResponseBase {
    result: GoodCategory[]
}

export interface BannerResponse extends ResponseBase {
    result: Banner[]
}

export interface NewGoodResponse extends ResponseBase {
    result: Good[]
}

export interface HotGoodResponse extends ResponseBase {
    result: HotGood[]
}
export interface OneCategoryResponse extends ResponseBase {
    result: GoodCategory
}
export interface SecondCategoryResponse extends ResponseBase {
    result: FilterCategory
}
export interface SubDataResponse extends ResponseBase {
    result: SubData
}