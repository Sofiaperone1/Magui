import React, {useState} from 'react'
import P1 from "../../Imgs/productos/P1.jpg"
import P1a from "../../Imgs/productos/P1.1.jpg"
import P2 from "../../Imgs/productos/P2.jpg"
import P2a from "../../Imgs/productos/P2.2.jpg"
import P4 from "../../Imgs/productos/P4.jpg"
import P4a from "../../Imgs/productos/P4.1.jpg"
import P5 from "../../Imgs/productos/P5.jpg"
import P5a from "../../Imgs/productos/P5.1.jpg"
import P6 from "../../Imgs/productos/P6.jpg"
import P6a from "../../Imgs/productos/P6.1.jpg"
import P7 from "../../Imgs/productos/P7.jpg"
import P7a from "../../Imgs/productos/P7.1.jpg"
import P8 from "../../Imgs/productos/P8.jpg"
import P8a from "../../Imgs/productos/P8.1.jpg"
import P9 from "../../Imgs/productos/P9.jpg"
import P9a from "../../Imgs/productos/P9.1.jpg"
import P10 from "../../Imgs/productos/P10.jpg"
import P10a from "../../Imgs/productos/P10.1.jpg"
import P11 from "../../Imgs/productos/P11.jpg"
import P11a from "../../Imgs/productos/P11.1.jpg"
import P12 from "../../Imgs/productos/P12.jpg"
import P12a from "../../Imgs/productos/P12.1.jpg"
import P13 from "../../Imgs/productos/P13.jpg"
import P13a from "../../Imgs/productos/P13.1.jpg"
import P14 from "../../Imgs/productos/P14.jpg"
import P14a from "../../Imgs/productos/P14.1.jpg"
import P15 from "../../Imgs/productos/P15.jpg"
import P15a from "../../Imgs/productos/P15.1.jpg"
import P16 from "../../Imgs/productos/P16.jpg"
import P16a from "../../Imgs/productos/P16.1.jpg"
import P17 from "../../Imgs/productos/P17.jpg"
import P17a from "../../Imgs/productos/P17.1.jpg"
import P18 from "../../Imgs/productos/P18.jpg"
import P18a from "../../Imgs/productos/P18.1.jpg"


import ProductCard from '../../components/prodCard/ProductCard';
import "./Tienda.css"


const Tienda = () => {

 

  const prods = [
    { nombre: "Diseño1", img: P1 , img2: P1a, desc:"lorem ipsum lorem psum lorem", price:5000,order: 1, cat:"woman" },
    { nombre: "Diseño2", img: P2 , img2: P2a, desc:"lorem ipsum lorem psum lorem", price:6000, order: 2, cat:"woman" },
    { nombre: "Diseño4", img: P4 , img2: P4a, desc:"lorem ipsum lorem psum lorem", price:5300, order: 4, cat:"kids" },
    { nombre: "Diseño5", img: P5 , img2: P5a, desc:"lorem ipsum lorem psum lorem", price:3000, order: 5, cat:"kids" },
    { nombre: "Diseño6", img: P6 , img2: P6a, desc:"lorem ipsum lorem psum lorem", price:2000, order: 6, cat:"sports" },
    { nombre: "Diseño7", img: P7 , img2: P7a, desc:"lorem ipsum lorem psum lorem", price:1000, order: 7, cat:"sports" },
    { nombre: "Diseño8", img: P8 , img2: P8a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 8,  cat:"home&others" },
    { nombre: "Diseño9", img: P9 , img2: P9a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 9,  cat:"home&others" },
    { nombre: "Diseño10", img:P10, img2: P10a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 10,  cat:"home&others" },
    { nombre: "Diseño11", img:P11, img2: P11a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 11,  cat:"home&others" },
    { nombre: "Diseño12", img:P12, img2: P12a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 12,  cat:"home&others" },
    { nombre: "Diseño13", img:P13, img2: P13a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 13,  cat:"home&others" },
    { nombre: "Diseño14", img:P14, img2: P14a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 14,  cat:"home&others" },
    { nombre: "Diseño15", img:P15, img2: P15a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 15,  cat:"home&others" },
    { nombre: "Diseño16", img:P16, img2: P16a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 16,  cat:"home&others" },
    { nombre: "Diseño17", img:P17, img2: P17a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 17,  cat:"home&others" },
    { nombre: "Diseño18", img:P18, img2: P18a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 18,  cat:"home&others" },

  ];


  const [products, setProducts] = useState(prods);

  const [currentPage, setCurrentPage] = useState(1);

  const filterByCat = (category) => {
    if (category === 'all') {
      setProducts(prods);
    } else {
      const filteredStamps = prods.filter(p => p.cat === category);
      setProducts(filteredStamps);
    }
  };


   // PAGINADO
  
   const pageSize = 8;
   
   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;

   const currentCards = products.slice(startIndex, endIndex);
 
   function handlePageChange(newPage) {
     setCurrentPage(newPage);
   }

   const totalPages = Math.ceil(products.length / pageSize);

   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);



   //////////////////////
// FILTROS 
const handleFilterChange = (e) => {
  const value = e.target.value;
  let sortedProducts;

  switch (value) {
    case 'lowest':
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
      break;
    case 'higher':
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
      break;
    case 'az':
      sortedProducts = [...products].sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    case 'za':
      sortedProducts = [...products].sort((a, b) => b.nombre.localeCompare(a.nombre));
      break;
      case 'newest':
        sortedProducts = [...products].sort((a, b) => a.order - b.order);
        break;
      case 'oldest':
        sortedProducts = [...products].sort((a, b) => b.order - a.order);
        break;
    default:
      sortedProducts = prods;
  }

  setProducts(sortedProducts);
  setCurrentPage(1); // Reset to first page after sorting
};

   // SEARCHBAR 


   const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = prods.filter(product =>
      product.nombre.toLowerCase().includes(searchText)
    );
    setProducts(filteredProducts);
    setCurrentPage(1); // Reset to first page after filtering
  };

  return (
    <div className='prodContainer'>
      <div className='tienda_filtros_cat'>
      <li className='cat_name'>Categories</li>
      <li><button onClick={() => filterByCat('all')}>Show all</button></li>
        <li><button onClick={() => filterByCat('sports')}>Sports</button></li>
        <li><button onClick={() => filterByCat('woman')}>Woman</button></li>
        <li><button onClick={() => filterByCat('kids')}>Kids</button></li>
        <li><button onClick={() => filterByCat('home&others')}>Home&Others</button></li>
      </div>
      <div className='prodSubCont'>
      <div className='tienda_prods'>
      <div className='prod_filters'>
      <div className='sbCont'>
         <input 
           className="searchBar"
           type="text"
           placeholder="Find..."
           onChange={handleSearchChange}
         />
    </div>
      <select className='select_filters' onChange={handleFilterChange} >
        <option value="all">Filter by </option>
        <option value="lowest">Lower price</option>
        <option value="higher">Higher price</option>
        <option value="newest">Most recent</option>
        <option value="oldest">Most older</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
      </div>
      {currentCards.map((di, index) => {
          return (
            <div className='prod_card_cont' key={index}>
             <ProductCard name={di.nombre} img1={di.img} img2={di.img2} desc={di.desc} price={di.price} cat={di.cat}/>
            </div>
          );
        })}
      </div>
      <div className='paginado'>
        <button
          className='btnPaginado'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
          className='btnPaginado'
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
        <button
         className='btnPaginado'
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  )
}



export default Tienda

