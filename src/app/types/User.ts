interface User {
  id: number;
  name: string;
  photo: string;
  sub: string;
  email: string;
  exp: string | null
  des: string
  age: number
  views: number
}

export type { User };