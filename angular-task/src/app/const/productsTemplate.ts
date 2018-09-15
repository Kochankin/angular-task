export class ProductsTemplate {
    men: Array<Product>;
    women: Array<Product>;
    children: Array<Product>;
}
  
class Product {
    id: number;
    type: 'men' | 'women' | 'children';
    size: string[];
    colors: string[];
    imgUrlMax: string;
    imgUrlMin: string;
    name: string;
    price: number;
}
