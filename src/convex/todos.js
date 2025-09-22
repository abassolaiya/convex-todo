import { query, mutation } from "./_generated/server";

// Query: list todos
export const list = query(async ({ db }) => {
  return await db.query("todos").collect();
});

// Mutation: add a todo
export const add = mutation(async ({ db }, text) => {
  return await db.insert("todos", {
    text,
    done: false,
    createdAt: Date.now(),
  });
});

// Mutation: toggle todo done/undone
export const toggle = mutation(async ({ db }, id) => {
  const todo = await db.get(id);
  await db.patch(id, { done: !todo.done });
});
