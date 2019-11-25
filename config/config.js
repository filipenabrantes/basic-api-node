const env = process.env.NODE_ENV || 'dev';

//String de conexão para conceito. Em ambiente real, as databases são separadas (dev, homol, prod)
//Arquivo disponível para a forma didática do curso

const config = () => {
    switch (env) {
        case 'dev':
        return {
            db_string: 'mongodb+srv://admin:admin@clusterapi-fdyzz.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'fna',
            jwt_expire_in: '7d'
        }

        case 'hml':
        return {
            db_string: 'mongodb+srv://admin:admin@clusterapi-fdyzz.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'fna',
            jwt_expire_in: '7d'

        }
        case 'prod':
        return {
            db_string: 'mongodb+srv://admin:admin@clusterapi-fdyzz.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'fna',
            jwt_expire_in: '7d'
        }
    }
}
console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();