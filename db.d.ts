import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Account {
  access_token: string | null;
  expires_at: Int8 | null;
  id: Generated<string>;
  id_token: string | null;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  scope: string | null;
  session_state: string | null;
  token_type: string | null;
  type: string;
  userId: string;
}

export interface Condition {
  condition_name: string;
  created_at: Timestamp;
  goal_id: string;
  id: Generated<string>;
  index: number;
  is_complete: Generated<boolean>;
  updated_at: Timestamp;
}

export interface Goal {
  created_at: Timestamp;
  due_time: number | null;
  goal_name: string;
  id: Generated<string>;
  is_complete: Generated<boolean>;
  is_favorite: Generated<boolean>;
  plan_id: string;
  priority: number | null;
  updated_at: Timestamp;
}

export interface Obstacle {
  created_at: Timestamp;
  goal_id: string;
  id: Generated<string>;
  index: number;
  is_complete: Generated<boolean>;
  obstacle_name: string;
  updated_at: Timestamp;
}

export interface Plan {
  created_at: Timestamp;
  first_name: string;
  gender: string;
  id: Generated<string>;
  is_complete: Generated<boolean>;
  last_name: string | null;
  plan_name: string;
  updated_at: Timestamp;
  user_id: string;
}

export interface Session {
  expires: Timestamp;
  id: Generated<string>;
  sessionToken: string;
  userId: string;
}

export interface Solution {
  created_at: Timestamp;
  goal_id: string;
  id: Generated<string>;
  index: number;
  is_complete: Generated<boolean>;
  solution_name: string;
  updated_at: Timestamp;
}

export interface User {
  email: string;
  emailVerified: Timestamp | null;
  id: Generated<string>;
  image: string | null;
  name: string | null;
}

export interface VerificationToken {
  expires: Timestamp;
  identifier: string;
  token: string;
}

export interface DB {
  Account: Account;
  Condition: Condition;
  Goal: Goal;
  Obstacle: Obstacle;
  Plan: Plan;
  Session: Session;
  Solution: Solution;
  User: User;
  VerificationToken: VerificationToken;
}
