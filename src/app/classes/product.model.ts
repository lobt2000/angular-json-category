import { ICategory } from '../interfacecs/category.interface';
import { IProduct } from '../interfacecs/product.interface';

export class Product implements IProduct {
    constructor(
        public id: number | string,
        public category: ICategory,
        public name: string,
        public urlName: string,
        public description: string,
        public weight: string,
        public prise: number,
        public image:string,
        public count:number = 1,
        public calories?: Array<any>, 
    ){}
}