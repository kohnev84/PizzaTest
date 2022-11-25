import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()
export class ProductServies {
    constructor(private httpClient: HttpClient) {

    }

    public getProduct(): Observable<Product[]> {
        return this.httpClient.get<Product[]>("https://pet-esteban.ru/ited-api/marketplace/users/pavel/data");
    }
}

export interface Product {
    name: string;
    price: number;
    weight: number;
    components: string;
    image: string;
}