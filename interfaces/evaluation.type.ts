import type { StatusCards } from "./status.cards.type";

export interface evaluation {
    _id: number, 
    date: string,
    name: string,
    phone: string,
    progress: progressType,
    status: StatusCards,
    icon: string
} 

export interface progressType {
    category: string,
    progress: number
}