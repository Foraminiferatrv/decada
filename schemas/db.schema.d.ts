import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Conditions {
  condition_id: string;
  condition_name: string;
  created_at: Generated<Timestamp>;
  goal_id: string | null;
  index: number;
  is_complete: Generated<boolean>;
  updated_at: Generated<Timestamp>;
}

export interface Goals {
  created_at: Generated<Timestamp>;
  due_time: number | null;
  goal_id: string;
  goal_name: string;
  is_complete: Generated<boolean>;
  is_favorite: Generated<boolean>;
  plan_id: string | null;
  priority: number | null;
  updated_at: Generated<Timestamp>;
}

export interface KnexMigrations {
  batch: number | null;
  id: Generated<number>;
  migration_time: Timestamp | null;
  name: string | null;
}

export interface KnexMigrationsLock {
  index: Generated<number>;
  is_locked: number | null;
}

export interface Obstacles {
  created_at: Generated<Timestamp>;
  goal_id: string | null;
  index: number;
  is_complete: Generated<boolean>;
  obstacle_id: string;
  obstacle_name: string;
  updated_at: Generated<Timestamp>;
}

export interface Plans {
  created_at: Generated<Timestamp>;
  is_complete: Generated<boolean>;
  plan_id: string;
  plan_name: string;
  updated_at: Generated<Timestamp>;
  user_id: string | null;
}

export interface Solutions {
  created_at: Generated<Timestamp>;
  goal_id: string | null;
  index: number;
  is_complete: Generated<boolean>;
  solution_id: string;
  solution_name: string;
  updated_at: Generated<Timestamp>;
}

export interface Users {
  created_at: Generated<Timestamp>;
  email: string;
  image: Generated<string | null>;
  name: string;
  password: string;
  updated_at: Generated<Timestamp>;
  user_id: string;
}

export interface DB {
  conditions: Conditions;
  goals: Goals;
  knex_migrations: KnexMigrations;
  knex_migrations_lock: KnexMigrationsLock;
  obstacles: Obstacles;
  plans: Plans;
  solutions: Solutions;
  users: Users;
}
