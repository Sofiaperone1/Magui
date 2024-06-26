import React , {useState, useEffect ,createContext} from "react";
//import db from "../../firebase"


//import { collection, query, where, getDocs, orderBy} from "firebase/firestore";


export const ItemContext = createContext();


export const CartContext = ({children}) => { 

       
    
    //   const [idProd,setIdProd] = useState("");
     //  const [resetProds, setResetProds] = useState ([]);
     //  const [products, setProducts] = useState ([]);
     //  const [searchedProduct, setSearchedProduct] = useState ("");
       const [cart, setCart] = useState ([]);
       const [count, setCount] = useState([]);
       
       const [formChanges, setFormChanges] = useState({
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        mensaje: ''
      });


     /* const eliminarStock = () => {

        fetch(`http://localhost:4000/products/eliminarStock`, {
            method: "PUT", // Cambiar el método a PUT
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(cart) // Convertir el objeto a formato JSON y enviarlo en el cuerpo
          })
          .then((res) => res.json())
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
      }
 
      const fillOrder = () => {
      
        
        const orders = cart.map(item => ({
          nombre: `${item.name} - cantidad: ${item.cant} - Talle: ${item.selectedSize}`,
          total: item.total
        }));
      
        const requestBody = {
          // Aquí coloca los datos que deseas enviar en el cuerpo de la solicitud POST
          nombre: formChanges.nombre,
          apellido: formChanges.apellido,
          envio: formChanges.envio,
          direccion: formChanges.direccion,
          ciudad: formChanges.ciudad,
          celular: formChanges.celular,
          mensaje: formChanges.mensaje,
          order: orders // Añade el array de objetos order a requestBody
        };
      
        eliminarStock();
        
          fetch(`http://localhost:4000/clients/postClientOrder`, {
            method: "POST", // Cambiar el método a POST
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody) // Convertir el objeto a formato JSON y enviarlo en el cuerpo
          })
          .then((res) => res.json())
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
        };
      

      const showForm = () => {
        console.log(formChanges, cart)
      }
 
      const listaSucursales = [
          {
             nombre: 'Sucursal 1',
             ciudad:'La Plata',  
             direccion: '45 1875' ,
             mail: 'estacionfitness@gmail.com' ,
             telefono: '+5492284570791' 
           },
            {
             nombre: 'Sucursal 2',
             ciudad:'Olavarria',  
             direccion: 'Lavalle 3683' ,
             mail: 'estacionfitness@gmail.com' ,
             telefono:'+5492284570829' 
           },
        
      ];
 
      
       /*const getProducts = async() => { 

       const datos= await getDocs(collection(db, "products"))
        let docs= []
        datos.forEach((doc) => { 
            docs.push({...doc.data() , id:doc.id, key:doc.id})
            
        }
        ) ; setProducts(docs) 
   

       } */
 /*
       const getProducts = () => {
        fetch(`http://localhost:4000/products/getAllProds`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          return data; // Pasar los datos al siguiente then
        })
        .then((data2) => {
          setResetProds(data2); // Establecer resetProds después de haber recibido los datos
         // console.log("products", products); // Mover este console.log aquí
         // console.log("resetProds", resetProds); // Mover este console.log aquí
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
      }

      

                
useEffect (() => {
  getProducts()

},[]) 


const getProductById = (id) => {
  const filtered = resetProds.find(prod => prod._id === id)
  setIdProd(filtered)
  console.log("filtered",filtered)
}



const getSelectedProducts = async(e) => {
  
    if (e.target.value === "menor precio") {  
      let docs = [];
      console.log(products)
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("price"));
      const datos = await getDocs(q)
      datos.forEach((doc) => { 
        docs.push({...doc.data(), id: doc.id} )
    })
    console.log(docs)
    setProducts(docs)
      }
    
      else {
        let docs = [];
        const productsRef = collection(db, "products");
        const q = query(productsRef, orderBy("price", "desc"));
        const datos = await getDocs(q)
        datos.forEach((doc) => { 
        docs.push({...doc.data(), id: doc.id} )
        })
        console.log(docs)
        setProducts(docs)
       }
      
} 


const handleChange = (e) => {
    
     console.log(e.target.value)
     setSearchedProduct(e.target.value)
        
      }; 
            
    
      
 const getCategory = (e,sex) => {    


  let categoryName = e.target.innerText;

  console.log("sex",sex)
  console.log("categoryName", categoryName)

  if (categoryName === "Todos") {
    const filtered = sex === "Man" ? resetProds.filter(prod => prod.man === true) : resetProds.filter(prod => prod.woman === true);
    //console.log("filtered",filtered)
  setProducts(filtered)
  }

 else if (sex === "Man") {
  const filtered = resetProds.filter(prod => prod.man === true)
  const filtered2 = filtered.filter(prod => prod.category === categoryName )
 setProducts(filtered2)
 }

 else if (sex === "Woman") {
  const filtered = resetProds.filter(prod => prod.woman === true)
  const filtered2 = filtered.filter(prod => prod.category === categoryName )
  setProducts(filtered2)
 }

    ;} */
  


return (    

    <ItemContext.Provider value={{cart, setCart, count, setCount, formChanges, setFormChanges}} >

        {children}
    </ItemContext.Provider>
            )
};