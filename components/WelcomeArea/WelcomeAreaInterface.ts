export interface WelcomeAreaInterface{
    subTitle:string,
    title:string,
    content: string,
    points: Array<string>
    button: WelcomeAreaButtonInterface
}

export interface WelcomeAreaButtonInterface{
    title:string,
    path:string
}