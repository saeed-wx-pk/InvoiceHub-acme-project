import { db } from '@vercel/postgres';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
  client.sql`
        UPDATE users
        SET email = 'user@example.com'
        WHERE id = '410544b2-4001-4271-9855-fec4b6a6442a';

  `;
  client.sql`
        DELETE FROM users
      WHERE email = 'saeedpk781@gmail.com';


  `;
  

}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    
    await seedUsers();
    
    

    return Response.json({ message: 'User added In Database successfully' });
  } catch (error) {
    
    return Response.json({ error }, { status: 500 });
  }
}
