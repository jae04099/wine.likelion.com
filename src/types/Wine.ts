export interface Wine {
    winery: string,
    wine: string,
    rating: {
        average: string,
        reviews: string
    },
    location: string,
    image: string,
    id:number
}

export interface Beer {
    price: string,
    name: string, 
    rating: {
        average: string, 
        reviews: string
    },
    image: string,
    id: number
}