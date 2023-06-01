export interface IDeliverySchema {
    user_id: string
    firstName: string
    deliveryMethods: deliveryMethods
    lastName: string
    email: string
    address: any
    phone: string
    country?: string
    zipcode?: string
}

type deliveryMethods = 'Почта России' | 'СДЕК' | 'Самовывоз'
