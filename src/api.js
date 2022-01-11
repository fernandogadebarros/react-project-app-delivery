let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
  // Todos os métodos da aplicação

  // Carregar as categorias | GET /categories
  getCategories: async () => {
    const res = await fetch(BASE + '/categories');
    const json = await res.json();
    return json;
  },

  // Carregar os produtos da api | GET products ([category, page, search])
  getProducts: async (category, page, search) => {

    let fields = {};

    if(category !== 0) {
      fields.category = category;
    }

    if(page > 0) {
      fields.page = page;
    }

    if(search !== '') {
      fields.search = search;
    }

    //{category: 1, page: 1, search: 'teste'}
    //category=1&page=1&search=teste

    let queryString = new URLSearchParams(fields).toString();

    const res = await fetch(BASE + `/products?${queryString}`);
    const json = await res.json();
    return json;
  }

  
};