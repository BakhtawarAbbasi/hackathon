export interface Product {
    _id: string;
    productName: string;
    _type: "product";
    image? : {
        assest : {
            _ref : string;
            _type: "image";
        }
    };
 price: number;
 colors: string;
 description? : string;
 inventory: number;
 category: string;
 slug : {
    _type : "slug"
    current : string;
 };
}