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
    discount: null
    orderNum: null | number
}
export type GoodCategory = {
    id: string
    name: string
    picture: string
    children: GoodCategory[]
    goods: Good[]
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