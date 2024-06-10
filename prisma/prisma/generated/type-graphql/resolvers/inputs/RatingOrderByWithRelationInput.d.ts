import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
export declare class RatingOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    rate?: "asc" | "desc" | undefined;
    count?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    product?: ProductOrderByWithRelationInput | undefined;
}