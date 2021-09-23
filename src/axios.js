import axios from "axios";
import config from './config/config'

const instance = axios.create({})

instance.defaults.baseURL = config.apiURL

instance.interceptors.request.use(config => {
    console.log('Interceptando Requisição: ', config)
    config.data = {
        ...config.data,
        curso: 'Vue JS'
    }

    config.headers.common['Authorization'] = `Bearer token_jwt`
    // config.headers.put['Meu-Cabeçalho'] = 'Curso VueJS'

    return config

    // return new Promise((resolve, reject) => {
    //     console.log('Fazendo Requisição aguardar...');
    //     setTimeout(() => {
    //         console.log('Enviando Requisição');
    //         resolve(config)
    //     }, 2000)
    // })
}, error => {
    console.log('Erro ao fazer requisição: ', error)
    return Promise.reject(error)
})

//-------------------- Interceptando Requisições ------------------ //
// instance.interceptors.response.use(response => {
//     console.log('Interceptando Resposta... ', response)
//     if(Array.isArray(response.data)) {
//         response.data = response.data.slice(1, 3)
//     }
//     return response
// }, error => {
//     console.log('Erro Capturado no interceptador de respostas: ', error)
//     return Promise.reject(error)
// })
//-------------------- ------------------------- ------------------ //
export default instance



// export default axios.create({
//     baseURL: config.apiURL
// })
