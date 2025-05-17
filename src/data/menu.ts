export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'espetos' | 'porcoes' | 'jantinhas' | 'bebidas' | 'sobremesas'
}

export const menuItems: MenuItem[] = [
  {
    id: 'esp1',
    name: 'Espeto de Picanha',
    description: 'Suculento espeto de picanha premium, temperado com sal grosso',
    price: 15.90,
    image: '/images/picanha.jpg',
    category: 'espetos'
  },
  {
    id: 'esp2',
    name: 'Espeto de Frango',
    description: 'Espeto de peito de frango marinado em ervas finas',
    price: 12.90,
    image: '/images/frango.jpg',
    category: 'espetos'
  },
  {
    id: 'por1',
    name: 'Batata Frita',
    description: 'Porção de batatas fritas crocantes',
    price: 24.90,
    image: '/images/batata.jpg',
    category: 'porcoes'
  },
  {
    id: 'por2',
    name: 'Pão de Alho',
    description: 'Pão francês com manteiga e alho',
    price: 8.90,
    image: '/images/pao-alho.jpg',
    category: 'porcoes'
  },
  {
    id: 'jan1',
    name: 'Jantinha Completa',
    description: 'Arroz, feijão, farofa, vinagrete e 2 espetos à sua escolha',
    price: 39.90,
    image: '/images/jantinha.jpg',
    category: 'jantinhas'
  },
  {
    id: 'beb1',
    name: 'Refrigerante 350ml',
    description: 'Coca-Cola, Guaraná ou Sprite',
    price: 6.90,
    image: '/images/refrigerante.jpg',
    category: 'bebidas'
  },
  {
    id: 'beb2',
    name: 'Cerveja 600ml',
    description: 'Brahma, Skol ou Antarctica',
    price: 12.90,
    image: '/images/cerveja.jpg',
    category: 'bebidas'
  },
  {
    id: 'sob1',
    name: 'Pudim',
    description: 'Pudim de leite condensado caseiro',
    price: 10.90,
    image: '/images/pudim.jpg',
    category: 'sobremesas'
  }
] 