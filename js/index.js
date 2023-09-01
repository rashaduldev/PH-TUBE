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
      // catagoryContainer.innerText='';
      catagory.forEach(catagory=>{
            const catagoryDiv=document.createElement('div');
            catagoryDiv.innerHTML=`
            <button onclick="catagoryId('${catagory.category_id}')" class="btn btn-ghost tab tab-active">${catagory.category}</button>
            `
            catagoryContainer.appendChild(catagoryDiv);
            
      })
  }

  // catagory ID Part
  const catagoryId=async(catagoryId)=>{
    // console.log(catagory);
    const response=await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data=await response.json();
    const dataRes=data.data;
    // catagoryContainer.innerText='';
    const productContainer=document.getElementById('productContainer');
    productContainer.innerText="";

    console.log(dataRes);

    dataRes.forEach((product=>{
      const productDiv= document.createElement('div');
      productDiv.classList=`card my-6 bg-base-100 shadow-xl`;
      productDiv.innerHTML=`
      <div>
      <figure><img class="h-80 w-full rounded-md" src="${product.thumbnail}" alt="Shoes" /></figure>
  
            <div class="flex">
              <div>
                <img class="w-10 h-10 rounded-full mt-7 ml-3" src="${product.authors[0].profile_picture}" alt="">
              </div>
              <div>
                <div class="card-body">
                  <h2 class="card-title">${product.title}</h2>
                <div class="flex items-center gap-3"> 
                <p>${product.authors[0].profile_name}</p>
                <i class="fa-solid fa-circle-check" style="color: #2568ef;"></i>
                </div>
                  <p>${product.others.views} views</p>
                </div>
              </div>
            </div>
    </div>
      `
      productContainer.appendChild(productDiv);
    }))
  }

  const loadProducts=async()=>{
      const rea=await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
      const data=await rea.json();
      const product=data.data;
      console.log(product);
      allProducts(product);
  }
  loadProducts()
  catagoryId("1000")

  // optional part
