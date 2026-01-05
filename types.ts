
export interface Gift {
  id: number;
  name: string;
  category: string;
  image: string;
  purchased: boolean;
  buyerName?: string;
}

export type Category = 'Todos' | 'Cozinha' | 'Quarto' | 'Decoração' | 'Banheiro' | 'Jantar';
