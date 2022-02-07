const products = [];

function submitProductForm() {
  var arr = getData();
  console.log(arr);
  products.push(arr);
  var table = document.getElementById("dispTable");
  var r = table.insertRow(-1);
  var c1 = r.insertCell(0);
  var c2 = r.insertCell(1);
  var c3 = r.insertCell(2);
  for (let i = 0; i < products.length; i++) {
    c1.innerHTML = products[i].productid;
    c2.innerHTML = products[i].productName;
    c3.innerHTML = "USD " + products[i].productPrice;
  }
}

function getData() {
  var pid = document.getElementById("pId").value;
  var name = document.getElementById("pName").value;
  var price = document.getElementById("pPrice").value;

  return {
    productid: pid,
    productName: name,
    productPrice: price,
  };
}
