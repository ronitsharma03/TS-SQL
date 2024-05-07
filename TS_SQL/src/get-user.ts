import { getClient } from "./utils";

async function getuser(){
    const client = await getClient();

    const selectUsers = `
        SELECT * FROM users
    `;
    const userRes = await client.query(selectUsers);

    console.log("Users: ");
    for (let user of userRes.rows) {
        console.log(`User ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getUserWithEmail(email: string){
    const client = await getClient();
    const selectUsersFromEmail = `
        SELECT * FROM users WHERE email = $1
    `;
    const userRes = await client.query(selectUsersFromEmail, [email]);
    console.log("User details for given E-mail: ");
    for (const user of userRes.rows) {
        console.log(`Email: ${user.email}, ID: ${user.id}`);
    }
}

async function getTodosForUser(userid: number){
    const client = await getClient();
    const selectUser = `
        SELECT * FROM todos WHERE user_id = $1
    `;
    const userRes = await client.query(selectUser, [userid]);

    console.log("Todos of User: ");
    for (const todo of userRes.rows) {
        console.log(`ID: ${todo.id}, title:${todo.title}, description: ${todo.description}, Done: ${todo.done}`);
    }
}


getuser();
getUserWithEmail("user1@gmail.com");
getTodosForUser(3);