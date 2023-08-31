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

const loadCatagory=async()=>{
      const rea=await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
      const data=await rea.json();
      const catagory=data.data;
      // allProducts(result);
      console.log(catagory);
      // allProducts(product);
      allCatagory(catagory);
  }
  loadCatagory();

  const allCatagory=catagory=>{
      const catagoryContainer=document.getElementById('catagoryContainer');
      catagory.forEach(catagory=>{
            const catagoryDiv=document.createElement('div');
            catagoryDiv.innerHTML=`
            <button class="btn btn-ghost tab tab-active">${catagory.category}</button>
            `
            catagoryContainer.appendChild(catagoryDiv);
      })
  }

  const loadProducts=async()=>{
      const rea=await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
      const data=await rea.json();
      const product=data.data;
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
            <figure><img class="" src="${product.thumbnail}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${product.title}</h2>
              <p>${product.authors[0].profile_name}</p>
              <p>${product.others.views} views</p>
           
             
            </div>
            `
            productContainer.appendChild(productDiv);
      });
}


{/* <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}