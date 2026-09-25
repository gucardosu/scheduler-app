import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    try {
        await knex.schema.createTable('users', (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.timestamps(true, true);
        });
    }
    catch (error) {
        console.error("Error creating users table:", error);
        throw error;
    }
}


export async function down(knex: Knex): Promise<void> {
    try {
        await knex.schema.dropTableIfExists('users');
    }
    catch (error) {
        console.error("Error dropping users table:", error);
    }
}

