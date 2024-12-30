function fetchData()
{

    fetch('http://localhost:3000/products')
    .then((res)=>res.json())
    .then((data)=>
    {
        show(data);
    })
    .catch((err)=>
    {
        console.log(err);
    })
}
fetchData();

function show(data) {
    // Using map to generate HTML for all items, and then join them together into a single string
    let card = document.getElementById("main-product");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card.innerHTML = store.join('');
}

 
function adddata(image, name,original_price,sale_price,discount) {
    return `

    <div class="card">
    <a href='description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&sale_price=${encodeURIComponent(original_price)}&original_price=${encodeURIComponent(sale_price)}&discount=${encodeURIComponent(discount)}'style="text-decoration: none;">
        <div class="card-img">
            <img src="${image}" > 
        </div>
        <div class="card-body">
           <b> <p class="card-name">${name}</p> </b>
            <p class="card-price">Original Price: <span style="text-decoration: line-through;">  ${original_price} </span></p>
            <p class="card-price">Sale Price: ${sale_price} </p>
            <p class="card-discount"> ${discount}</p>
        </div>
    </div>
    `;
}


let inc= document.getElementById('Plus');
let mins=document.getElementById('Min');
let num=document.getElementById('quan');
let sale = document.getElementById('sale_price')


let cnt=0;

one.addEventListener('click',()=>{
    if(cnt<20)
{
    cnt++;
    num.innerText=cnt;
    let realprice = sale.value
    let total = parseInt(realprice * cnt);
    sale.innerText = total

}
})

mins.addEventListener('click',()=>{
    if(cnt<20)
{
    cnt--;
    num.innerText=cnt;

    }
        })



