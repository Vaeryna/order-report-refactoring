export interface Order {
    id: number,
    customer_id: string,
    product_id: string,
    qty: number,
    unit_price: number,
    date: string,
    promo_code?: number,
    time?: string
}


