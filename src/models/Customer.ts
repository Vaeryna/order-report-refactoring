import { Currency, Level, ShippingZoneType } from "./customers.enums";

export interface Customer {
    id: string,
    name: string,
    level: Level,
    shipping_zone: ShippingZoneType,
    currency: Currency
}
