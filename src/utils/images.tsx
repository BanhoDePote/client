import Garcom from '../assets/LoginImage/garcom.svg'
import Dish from '../assets/LoginImage/dish.svg'
import Payment from '../assets/LoginImage/payment.svg'

interface EmployeeInfo {
  type: string
  icon: any
}

export const typesEmployee: Array<EmployeeInfo> = [
  { type: 'Garcom', icon: Garcom },
  { type: 'Cozinha', icon: Dish },
  { type: 'Caixa', icon: Payment },
]
