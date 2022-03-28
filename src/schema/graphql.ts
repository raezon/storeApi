
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

export abstract class IQuery {
    abstract getName(id?: Nullable<string>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract getType(id?: Nullable<string>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract getColors(id?: Nullable<string>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract getPhoto(id?: Nullable<string>): Nullable<Category> | Promise<Nullable<Category>>;
}

type Nullable<T> = T | null;
