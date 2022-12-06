export type Person = {
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  gender: string
}

export type Post = {
  id: number,
  slug: string,
  title: string,
  excerpt: string,
  imageUrl: string,
  //eslint-disable-next-line
  categories: number[],
}

export type Categories = {
  id: number,
  name: string,
  slug: string,
}