
export interface cardcomponents{

  title: string,
  image: string,
  desc: string
}

export interface productcards{

  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
  rating:{
    rate:number
    
  }
}

