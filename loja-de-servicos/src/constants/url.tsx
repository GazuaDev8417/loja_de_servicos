export const BASE_URL = 'https://loja-de-servicos-server.vercel.app'
export const headers = {
    headers: { Authorization: localStorage.getItem('token') }
}