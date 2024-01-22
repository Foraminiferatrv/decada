import { db } from '@/lib/db/db'

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.selectFrom('user').selectAll().where('email', '=', email).execute()
    return user[0]
  } catch {
    return ''
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.selectFrom('user').selectAll().where('id', '=', id).execute()
    return user[0]
  } catch {
    return null
  }
}
