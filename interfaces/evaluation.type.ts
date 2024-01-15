import type { StatusCards } from "./status.cards.type";

export interface evaluation {
    _id: number, 
    date: string,
    name: string,
    phone: string,
    progress: number,
    status: StatusCards,
    icon: string
} 