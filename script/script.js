let TotalPrice=0;
let Discount=0;
let Total=0;




function priceClickHandler(data){
    const name =data.parentNode.parentNode.childNodes[5].innerText;
   const li=document.createElement('li');
   li.innerText=name;
   document.getElementById('secletd-name').appendChild(li);

//    console.log(data.parentNode.parentNode.childNodes[7].innerText.split(''));

    // new section

   const price=data.parentNode.childNodes[0].innerText;

   TotalPrice= parseInt(TotalPrice)+parseInt(price);
   
   const totalPrice=document.getElementById('Total-price').innerText=TotalPrice; 
   const total=document.getElementById('Total').innerText=TotalPrice; 
   const discount=document.getElementById('Discount').innerText;
   const discountPrice=total-50;
   const discountName=document.getElementById('Discount').innerText=discountPrice;





}