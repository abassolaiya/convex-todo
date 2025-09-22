import { query, mutation } from "./_generated/server";

// A query to fetch all messages
export const list = query(async ({ db }) => {
  return await db.query("messages").collect();
});

// A mutation to insert a new message
export const send = mutation(async ({ db }, body) => {
  const message = { body, createdAt: Date.now() };
  await db.insert("messages", message);
  return message;
});
