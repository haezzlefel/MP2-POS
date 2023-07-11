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
    orderitem.className = 'd-flex justify-content-between align-items-center p-1';

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

    deletebutton.className = 'btn btn-secondary rounded';

    //Append item to LI
    orderitem.appendChild(orderitemname);

    orderitem.appendChild(orderitempricespan);

    orderitem.appendChild(deletebutton);

    //Append the LI tag to parent ordersummary
    ordersummary.appendChild(orderitem);

    totalitems(); 
    totalcost();
    
    i++;

    console.log(orderidarray);
};

function totalitems(){
    document.getElementById('totalitems').innerText = orderitemsarray.length;
};

function totalcost(){
    if(orderpricearray.length === 0){
        document.getElementById('totalcost').innerText = 0;
    } else {
        document.getElementById('totalcost').innerText = orderpricearray.reduce(sumarray).toFixed(2);
        function sumarray(total, num) {
        return total + num;
        };
      }
    }

function cartClear(){
    let ordersummary = document.getElementById('ordersummary');
    ordersummary.innerHTML = '';
    orderitemsarray.length = 0;
    orderpricearray.length = 0;
    orderarray.length = 0;
    orderidarray.length = 0;
    i = 0;

    totalitems();
    totalcost();
}

function deleteItem(orderid, button) {
    const indexnum = orderidarray.indexOf(orderid);
    orderidarray.splice(indexnum, 1);
    orderitemsarray.splice(indexnum, 1);
    orderpricearray.splice(indexnum, 1);

    totalitems(); 
    totalcost();

    ordersummary.removeChild(button.parentElement);
};


function display_cdt() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;

    var minutes=x.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;
    
    var seconds=x.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;

    var month=(x.getMonth() +1).toString();
    month=month.length==1 ? 0+month : month;

    var dt=x.getDate().toString();
    dt=dt.length==1 ? 0+dt : dt;

    var x1=month + "/" + dt + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
    document.getElementById('cdt').innerHTML = x1;
    display_c7();
    }

function display_c7(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_cdt()',refresh)

}
document.getElementById('cdt').innerHTML = display_c7();

