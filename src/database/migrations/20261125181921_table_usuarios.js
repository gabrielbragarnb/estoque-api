export function up(knex) {
    return knex.schema.createTable('usuariosd', function (table) {
        table.increments();
        table.string('nome', 50);
        table.string('login', 50);
        table.string('senha', 20);
        table.string('email', 100);


        table.float('preco', 5, 2);
        table.timestamps();
    });
};

export function down(knex) {
    return knex.schema.dropTable('usuarios');
};
