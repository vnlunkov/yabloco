import {Sequelize} from 'sequelize'

export default new Sequelize(
    process.env.db_name, // база данных
    process.env.db_user, // пользователь
    process.env.db_pass, // пароль
    {
        dialect: 'mysql',
        host: process.env.db_host,
        port: process.env.db_port,
        define: {
            underscored: true, // использовать snake_case вместо camelCase для полей таблиц БД
            timestamps: false, // не добавлять поля created_at и updated_at при создании таблиц
        }
    }
)