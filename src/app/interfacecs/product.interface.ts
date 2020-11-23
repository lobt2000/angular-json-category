import { ICategory } from './category.interface';

export interface IProduct{
    id: number | string;
    category: ICategory;
    name: string;
    urlName: string;
    description: string;
    weight: string;
    prise: number;
    image:string;
    count:number;
    calories?: Array<any>; 
}