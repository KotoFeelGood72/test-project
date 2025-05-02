import type { SelectInterface } from './SelectInterface'
export interface UserInterface {
  user_id: number | string
  post_type: null | SelectInterface
  user_login: string
  user_pass: null | string
}
