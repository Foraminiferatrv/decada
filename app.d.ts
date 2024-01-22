/// <reference types="lucia" />
declare namespace Lucia {
  type DB = import('@/schemas/db.schema.js').DB
  type Auth = import('./lucia.js').Auth
  type DatabaseUserAttributes = DB.User
  type DatabaseSessionAttributes = DB.Session
}
