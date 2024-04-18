interface ResponseBase {
    code: string
    msg: string
}
type Spec = {
    name: string
    id: string
    values: {
        name: string
        picture: string | null
        desc: string
    }[]
}
type Sku = {
    id: string
    skuCode: string
    price: string
    oldPrice: string
    inventory: number
    specs: {
        name: string
        valueName: string
    }[]
}
type Category = {
    id: string
    name: string
    layer: string
    parent: Category | null
}
type Detail = {
    pictures: string[]
    properties: Properties[]
}
type Comment = {
    id: string
    orderInfo: null
    member: null
    score: number
    tags: null
    content: string
    pictures: null
    officialReply: null
    praiseCount: number
    createTime: string
    praisePercent: number
}
export type Good = {
    id: string
    name: string
    desc: string
    price: string
    picture?: string
    discount?: null | number
    orderNum?: null | number
    spuCode?: string
    oldPrice?: string
    inventory?: number
    brand?: Brand
    salesCount?: number
    commentCount?: number
    collectCount?: number
    mainVideos?: string[]
    videoScale?: number
    mainPictures?: string[]
    specs?: Spec[]
    skus?: Sku[]
    categories?: Category[]
    details?: Detail
    isPreSale?: boolean
    isCollect?: null
    recommends?: null
    userAddresses?: null
    similarProducts?: Good[]
    hotByDay?: Good[]
    evaluationinfo?: Comment
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
    desc: string | null
    id: string
    logo: string
    name: string
    nameEn: string
    picture: string
    place: string | null
    type: null
}
export type Properties = {
    name: string
    id?: string
    value?:string
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
export type Account = {
    account: string
    avatar: string
    birthday: string
    cityCode: string
    gender: string
    id: string
    mobile: string
    nickname: string
    profession: string
    provinceCode: string
    token: string
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
export interface GoodDetailResponse extends ResponseBase {
    result: Good
}
export interface DetailHotResponse extends ResponseBase {
    result: Good[]
}
export interface LoginResponse extends ResponseBase {
    result: Account
}