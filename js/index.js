// const loadProduct=async(product)=>{
//       fetch('https://openapi.programming-hero.com/api/videos/categories')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       allProducts(product);
// }

// const loadProduct=async(searchText)=>{
//       const rea=await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
//       const data=await rea.json();
//       const result=data.data;
//       // allProducts(result);
//       console.log(result);
//   }

  const loadProducts=async()=>{
      const rea=await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
      const data=await rea.json();
      const product=data.data;
      // allProducts(result);
      console.log(product);
      allProducts(product);
  }
  loadProducts()
    
const allProducts=product=>{
      const productContainer=document.getElementById('productContainer');
      console.log('ok');

      product.forEach(product => {
            const productDiv= document.createElement('div');
            productDiv.classList=`card my-6 bg-base-100 shadow-xl`;
            productDiv.innerHTML=`
            <figure><img src="${product.thumbnail}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${product.phone_name}</h2>
              <p>${product.slug}</p>
              <div class="card-actions justify-center">
                <button onclick="showDetails('${product.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>
            `
            productContainer.appendChild(productDiv);
      });
}