export interface ShoesProps {
    id: number
    logo: string
    title: string
    subTitle: string
    price: number[]
    description: string
    category: number
    count: number
}
export type initialStateProps = {
    items: ShoesProps[]
    status: string
}