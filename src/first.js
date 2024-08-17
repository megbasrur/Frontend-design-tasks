
    const viewBtn = document.querySelector("#view");
    const container = document.querySelector("#container");
    const addBtn=document.querySelector("#add");
    const formBox=document.querySelector("#popup");
    const closeBtn=document.querySelector("#close");
    const addProduct=document.querySelector("#addProduct");

    const viewProducts=()=>{
    let data= fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(json => {
        console.log(json);
        let i;
        let str=JSON.stringify(data);
        let n=str.length;
        json.forEach(product => {
                    const card = document.createElement('div');
                    card.className = 'pt-6 bg-white rounded-lg shadow-lg p-2 flex flex-col items-center border-2 ';

                    const image = document.createElement('img');
                    image.src = product.image;
                    image.alt = product.title;
                    image.className = 'w-24 h-36 rounded-lg mb-4 ml-';

                    const title = document.createElement('h2');
                    title.textContent = product.title;
                    title.className = 'text-lg font-bold mb-2 font-serif text-center underline';
         
                    const id=document.createElement('div');
                    id.textContent=`${product.id}`;
                    id.className="bg-blue-500 w-6 rounded-lg text-center border-2 border-gray-600";

                    const price = document.createElement('p');
                    price.textContent = `$${product.price}`;
                    price.className = 'text-gray-500 text-md mb-2 ';

                    const description = document.createElement('p');
                    description.textContent = product.description;
                    description.className = 'text-gray-800 text-sm text-center font-sans';

                    card.appendChild(id);
                    card.appendChild(title);
                    card.appendChild(price);
                    card.appendChild(image);
                    card.appendChild(description);

                    container.appendChild(card);
        });
    })
    }

viewBtn.addEventListener("click",()=>{
    viewProducts();
})

addProduct.addEventListener("click", () => {
    const formTitle = document.querySelector("#product-name").value;
    const formPrice = document.querySelector("#product-price").value;
    const formDesc = document.querySelector("#product-desc").value;
    const formImg = document.querySelector("#product-img").value;

    const productDetails = {
        title: formTitle,
        price: parseFloat(formPrice), 
        description: formDesc,
        image: formImg,
    };

    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Product added");
            formBox.classList.add("hidden");
            container.classList.remove("blur-sm");
            viewProducts();
        })
        .catch(error => {
            console.error(error);
            alert("Error");
        });
});

addBtn.addEventListener("click", ()=>{
    container.classList.add("blur-sm");
    formBox.classList.remove("hidden");
    formBox.className="flex flex-row justify-center items-center";
})


closeBtn.addEventListener("click",()=>{
    formBox.classList.add("hidden");
    container.classList.remove("blur-sm");
})

/*addBtn.addEventListener("click",()=>{
    const formBox=document.createElement("form");
    formBox.className="p-10 bg-gray-100 flex flex-col gap-3 items-center w-96";

    const label1=document.createElement("div");
    label1.className="mb-4 ml-4 flex gap-1";
    const prodName=document.createElement("label");
    prodName.textContent="Product Name"
    prodName.className=" text-gray-600";
    const inputName=document.createElement("input");
    inputName.placeholder="Enter product name";
    inputName.type="text";
    inputName.className="p-2 border-2 h-7 w-100";
    label1.appendChild(prodName);
    label1.appendChild(inputName);


    const label2=document.createElement("div");
    label2.className="mb-4 ml-4 flex gap-1";
    const prodPrice=document.createElement("label");
    prodPrice.textContent="Price"
    prodPrice.className=" text-gray-600";
    const inputPrice=document.createElement("input");
    inputPrice.placeholder="Enter product price";
    inputPrice.type="text";
    inputPrice.className="p-2 border-2 h-7 w-100";
    label1.appendChild(prodPrice);
    label1.appendChild(inputPrice);

    const label3=document.createElement("div");
    label3.className="mb-4 ml-4 flex gap-1";
    const prodDesc=document.createElement("label");
    prodDesc.textContent="Description";
    prodDesc.className=" text-gray-600";
    const inputDesc=document.createElement("input");
    inputDesc.placeholder="Enter product description";
    inputDesc.type="text";
    inputDesc.className="p-2 border-2 h-7 w-100";
    label1.appendChild(prodDesc);
    label1.appendChild(inputDesc);

    const label4=document.createElement("div");
    label4.className="mb-4 ml-4 flex gap-1";
    const prodImg=document.createElement("label");
    prodImg.textContent="Product Image"
    prodImg.className=" text-gray-600";
    const inputImg=document.createElement("input");
    inputImg.placeholder="Enter image link";
    inputImg.type="text";
    inputImg.className="p-2 border-2 h-7 w-100";
    label1.appendChild(prodImg);
    label1.appendChild(inputImg);

    const submitBtn=document.createElement("button");
    submitBtn.type="submit";
    submitBtn.textContent="Submit";
    submitBtn.className="bg-yellow-500 px-4 rounded-md mt-3 hover:border-2 hover:border-gray-500";

    formBox.appendChild(label1);
    formBox.appendChild(label2);
    formBox.appendChild(label3);
    formBox.appendChild(label4);
    formBox.appendChild(submitBtn);
});
*/
        
           
    

