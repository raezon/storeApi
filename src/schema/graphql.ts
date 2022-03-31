
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CategoryInput {
    id?: Nullable<number>;
    name?: Nullable<string>;
    type?: Nullable<string>;
    colors?: Nullable<string>;
    photo?: Nullable<string>;
}

export class Category {
    id?: Nullable<number>;
    name?: Nullable<string>;
    type?: Nullable<string>;
    colors?: Nullable<string>;
    photo?: Nullable<string>;
}

export class Product {
    id?: Nullable<number>;
    name?: Nullable<string>;
    slug?: Nullable<string>;
    price?: Nullable<string>;
    quantity?: Nullable<string>;
    photo?: Nullable<string>;
    category?: Nullable<Category>;
}

export abstract class IQuery {
    abstract getPropertiesCategory(id?: Nullable<string>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract getPropertiesProduct(id?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
