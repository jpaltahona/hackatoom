

const api= 'https://limitless-beyond-13402.herokuapp.com/products?sortBy=rating&page=10';

class Api {
    async getfilter(filter, page){
        const query = await fetch(`https://limitless-beyond-13402.herokuapp.com/products?sortBy=${filter}&page=${page}`);
        const data = await query.json();
        return data
    }
    async getproduct(){
        const query = await fetch(api);
        const data = await query.json();
        return data
    }
}
export default new Api();