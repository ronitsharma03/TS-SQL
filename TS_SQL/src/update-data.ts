import { getClient } from "./utils";

async function updateTodo(todoId: number){
    const client = await getClient();
    const updateQuery = `
        UPDATE todos SET done = $1 WHERE user_id = $2
    `;
    const todoRes = await client.query(updateQuery, [true, todoId]);

    console.log(`Updated Todo with TodoID: ${todoId} to done`);

}

const todoToUpdate = 3;
updateTodo(todoToUpdate);