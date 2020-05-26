module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'bb4fxl4igze9dgknq7kb-mysql.services.clever-cloud.com',
        user: process.env.MYSQL_USER || 'uu5zailymg7iafa8',
        password: process.env.MYSQL_PASS || 'nyhQUtewNxD4SJOX9G9X',
        database: process.env.MYSQL_DB || 'bb4fxl4igze9dgknq7kb',
    }
}