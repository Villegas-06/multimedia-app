export interface Category {
  name: string;
  content: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  sinopsis: string;
  poster: string;
  videoUrl: string;
}
