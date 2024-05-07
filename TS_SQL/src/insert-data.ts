import { getClient } from "./utils";

async function insertData(){
    const client = await getClient();
    const userText = `
        INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id
    `;
    const userValues = ["user1@gmail.com", "myPassword"];
    let response = await client.query(userText, userValues);
    

    const todoText = `
        INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4)
    `;
    const todoValues = ["Study", "Study DSA and Typescript", response.rows[0].id, false];
    await client.query(todoText, todoValues);
    console.log("Entries created successfully!");
}

insertData();