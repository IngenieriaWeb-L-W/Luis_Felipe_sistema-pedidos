import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class SessionOrderByWithRelationInput {
    sessionToken?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
}
