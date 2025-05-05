export interface UserInterface {
  user_id: number | string
  post_type: null | string
  user_login: string
  user_pass: null | string
  tags: { text: string }[]
  raw_tags: string
}
