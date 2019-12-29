export interface StaticSlideInterface{
    title:string,
    content:string,
    img:string,
    button: StaticSlideButtonInterface
}

export interface StaticSlideButtonInterface{
    title:string,
    path:string
}