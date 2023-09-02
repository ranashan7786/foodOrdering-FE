export class Foods{
    quantity!: number;
    static filter(arg0: (food: { tags: string | string[]; }) => boolean) {
        throw new Error('Method not implemented.');
    }
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    star:number = 0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];


}
