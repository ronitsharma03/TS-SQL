import { getClient } from "./utils";

async function deleteTodo(todoId: number) {
    const client = await getClient();
    const query = `
        DELETE FROM todos WHERE id = $1
    `;
    await client.query(query, [todoId]);
    console.log(`Todo with ID: ${todoId} deleted successfully`);
}

deleteTodo(1);