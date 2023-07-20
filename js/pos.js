const orderidarray = [];
const orderitemsarray = [];
const orderpricearray = [];
const orderarray = [];

let i = 0;

function ordercart(itemname, itemprice){
   
    orderidarray.push(i);
    orderitemsarray.push(itemname);
    orderpricearray.push(itemprice);
    orderarray.push(itemname, itemprice);

    let ordersummary = document.getElementById('ordersummary');
    //Create LI tag
    const orderitem = document.createElement('li');
    orderitem.className = 'd-flex justify-content-between align-items-center text-center p-1';
    //Create span for red color
    const orderitempricespan = document.createElement('span');
    //Created item details to node
    const orderitemname = document.createTextNode(itemname);
    const orderitemprice = document.createTextNode(' P ' + itemprice);
    // Price color red
    orderitempricespan.className = 'text-secondary';
    orderitempricespan.appendChild(orderitemprice);
    const deletebutton = document.createElement('button');
    const deletebuttontext = document.createTextNode('Remove');
    deletebutton .setAttribute('onclick', 'deleteItem('+i+', this)');
    deletebutton.appendChild(deletebuttontext);
    deletebutton.className = 'btn btn-dark btn-sm rounded';
    //Append item to LI
    orderitem.appendChild(orderitemname);
    orderitem.appendChild(orderitempricespan);
    orderitem.appendChild(deletebutton);
    //Append the LI tag to parent ordersummary
    ordersummary.appendChild(orderitem);
    totalitems(); 
    totalcost();
    i++;
    validateCheckoutBtn();
};

function totalitems(){
    document.getElementById('totalitems').innerText = orderitemsarray.length;
};

function totalcost(){
    if(orderpricearray.length === 0){
        document.getElementById('totalcost').innerText = 0;
    } else {
        document.getElementById('totalcost').innerText = orderpricearray.reduce(sumarray).toFixed(2);
        document.getElementById('totalamt').value = orderpricearray.reduce(sumarray).toFixed(2);
        function sumarray(total, sum) {
        return total + sum;
        };
    }
};

function cartClear(){
    let ordersummary = document.getElementById('ordersummary');
    document.getElementById('totalamt').value = 0;
    ordersummary.innerHTML = '';
    orderitemsarray.length = 0;
    orderpricearray.length = 0;
    orderarray.length = 0;
    orderidarray.length = 0;
    i = 0;
    totalitems();
    totalcost();
    validateCheckoutBtn();
};

function deleteItem(orderid, button) {
    const indexnum = orderidarray.indexOf(orderid);
    orderidarray.splice(indexnum, 1);
    orderitemsarray.splice(indexnum, 1);
    orderpricearray.splice(indexnum, 1);
    totalitems(); 
    totalcost();
    ordersummary.removeChild(button.parentElement);
    validateCheckoutBtn();
};

function transactionNumber() {
    let transnum = Math.floor(Math.random() * 10000)
    document.getElementById('transnum').innerHTML = transnum;
    document.getElementById('modaltransnum').innerHTML = transnum;
    document.getElementById('receipttransnum').innerHTML = transnum;
};
transactionNumber();

function validateCheckoutBtn() {
    document.getElementById('checkout').disabled = true;
    if(orderitemsarray.length > 0){
        document.getElementById('checkout').disabled = false;
    }
};