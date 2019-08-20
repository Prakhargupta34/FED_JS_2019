counter=0;
function show(){
  if(document.getElementById('itemName').value != ""){
  var itemName = document.getElementById('itemName').value;
  counter += 1;
  document.getElementById('items').innerHTML +="<br>"+ counter+". " +itemName;
  document.getElementById('itemName').value="";
  var textNode = document.createTextNode(itemName);
  var ele = document.createElement("option");
  ele.append(textNode);
  document.getElementById("suggestions").append(ele);
}
}
