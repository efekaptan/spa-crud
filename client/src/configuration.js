export const pageSize = 10;

let apiUrl;

if (process.env.NODE_ENV === 'production') {
    apiUrl = 'https://spa-crud.herokuapp.com/api';
} else {
    apiUrl = 'http://localhost:5000/api';
}

export { apiUrl };