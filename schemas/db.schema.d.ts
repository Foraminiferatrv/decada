import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Condition {
  condition_name: string;
  created_at: Generated<Timestamp>;
  goal_id: string;
  id: Generated<string>;
  index: number;
  is_complete: Generated<boolean>;
  updated_at: Generated<Timestamp>;
}

export interface Goal {
  created_at: Generated<Timestamp>;
  due_time: number | null;
  goal_name: string;
  id: Generated<string>;
  is_complete: Generated<boolean>;
  is_favorite: Generated<boolean>;
  plan_id: string;
  priority: number | null;
  updated_at: Generated<Timestamp>;
}

export interface Key {
  created_at: Generated<Timestamp>;
  hashed_password: string | null;
  id: string;
  updated_at: Generated<Timestamp>;
  user_id: string;
}

export interface Obstacle {
  created_at: Generated<Timestamp>;
  goal_id: string;
  id: Generated<string>;
  index: number;
  is_complete: Generated<boolean>;
  obstacle_name: string;
  updated_at: Generated<Timestamp>;
}

export interface Plan {
  created_at: Generated<Timestamp>;
  first_name: string;
  gender: string;
  id: Generated<string>;
  is_complete: Generated<boolean>;
  last_name: string | null;
  plan_name: string;
  updated_at: Generated<Timestamp>;
  user_id: string;
}

export interface Session {
  active_expires: Int8;
  created_at: Generated<Timestamp>;
  id: string;
  idle_expires: Int8;
  updated_at: Generated<Timestamp>;
  user_id: string;
}

export interface Solution {
  created_at: Generated<Timestamp>;
  goal_id: string;
  id: Generated<string>;
  index: number;
  is_complete: Generated<boolean>;
  solution_name: string;
  updated_at: Generated<Timestamp>;
}

export interface User {
  created_at: Generated<Timestamp>;
  email: string;
  email_verified: Timestamp | null;
  id: string;
  image: string | null;
  updated_at: Generated<Timestamp>;
  username: string;
}

export interface VerificationToken {
  created_at: Generated<Timestamp>;
  expires: Timestamp;
  identifier: string;
  token: string;
  updated_at: Generated<Timestamp>;
}

export interface DB {
  condition: Condition;
  goal: Goal;
  key: Key;
  obstacle: Obstacle;
  plan: Plan;
  session: Session;
  solution: Solution;
  user: User;
  verification_token: VerificationToken;
}
