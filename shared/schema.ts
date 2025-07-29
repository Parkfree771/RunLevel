import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const training_programs = pgTable("training_programs", {
  id: serial("id").primaryKey(),
  target_distance: text("target_distance").notNull(), // '10km', 'Half Marathon', 'Full Marathon'
  target_grade: text("target_grade").notNull(),       // 'A+', 'S' 등 목표 등급
  duration_weeks: integer("duration_weeks").notNull(), // 프로그램 기간 (주 단위)
  name_ko: text("name_ko").notNull(),                 // 프로그램 이름 (한국어)
  name_en: text("name_en").notNull(),                 // 프로그램 이름 (영어)
  description_ko: text("description_ko"),             // 프로그램 개요 (한국어)
  description_en: text("description_en"),             // 프로그램 개요 (영어)
  program_type: text("program_type"),                 // '기록 단축', '완주 목표'
  intensity_level: text("intensity_level"),           // '초급', '중급', '고급'
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type TrainingProgram = typeof training_programs.$inferSelect;