import { Client } from 'pg';


export async function getClient(){
    const client = new Client("postgresql://ronitkhajuria03:TgA1zXUu0Myl@ep-old-tree-a5v313e2.us-east-2.aws.neon.tech/Practice-sql?sslmode=require");
    await client.connect();
    return client;
}