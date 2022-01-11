import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Category, 
  CategoryList, 
  Product, 
  ProductList, 
  Pagination, 
  ProductPaginationItem 
} from './styles';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

import ReactTooltip from 'react-tooltip';

let searchTimer;

function Home() {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const [activePagination, setActivePagination] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSearch, setActiveSearch] = useState('');

  const getProducts = async () => {
    const products = await api.getProducts(activeCategory, setActivePagination, activeSearch);
    if(products.error === '') {
      setProducts(products.result.data);
      setTotalPages(products.result.pages);
      setActivePagination(products.result.page);
    }
  }

  useEffect(() => {
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
      //console.log(headerSearch);
    }, 2000);
    return () => { clearTimeout(searchTimer) };
  }, [headerSearch]);

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories();
      // Verifica se há um erro
      if(cat.error === '') {
        setCategories(cat.result);
      }
      ReactTooltip.rebuild();
    }
    getCategories();
  }, []);

  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [activeCategory, setActivePagination, activeSearch]);

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  }

  return (
    <Container>

      <Header 
      search={ headerSearch } 
      onSearch={ setHeaderSearch } 
      />

      {categories.length > 0 && 
        <>
          <Category>
            Selecione uma categoria: 
            <CategoryList>
              <CategoryItem 
              data={{
                id: 0,
                name: 'Todas as categorias',
                image: '/assets/food-and-restaurant.png'
              }}
              activeCategory={ activeCategory }
              setActiveCategory={ setActiveCategory }
              />
              {categories.map((item, index) => (
                <CategoryItem 
                key={ index } 
                data={ item } 
                activeCategory={ activeCategory } 
                setActiveCategory={ setActiveCategory }
                />
              ))}
            </CategoryList>
          </Category>
        </>
      }

      {products.length > 0 &&       
        <Product>
          <ProductList>
            {products.map((item, index) => (
              <ProductItem 
                key={ index }
                data={ item }
                onClick={ handleProductClick }
              />
            ))}
          </ProductList>
        </Product>
      }

      {totalPages > 0 && 
        <Pagination>
          {Array(totalPages).fill(0).map((item, index) => (
            <ProductPaginationItem 
            key={ index } 
            active={ activePagination }
            current={ index + 1 }
            onClick={ () => setActivePagination(index + 1) }
            >
              { index + 1 }
            </ProductPaginationItem>
          ))}
        </Pagination>
      }

      <Modal 
      status={ modalStatus } 
      setStatus= { setModalStatus }
      >
        <ModalProduct 
        data={ modalData } 
        setStatus= { setModalStatus }
        />
      </Modal>

    </Container>
  )
}

export default Home;
