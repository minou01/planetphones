const businessNumber = '213793257269'; 
document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const phone = f.phone.value.trim();
  const items = f.items.value.trim();
  const wilaya = f.wilaya.value.trim();
  const msg = `New order :%0A Name : ${encodeURIComponent(name)} %0A Number : ${encodeURIComponent(phone)} %0A Order : ${encodeURIComponent(items)} %0A wilaya : ${encodeURIComponent(wilaya)}`;
  const url = `https://wa.me/${businessNumber}?text=${msg}`;
  window.open(url, '_blank'); 
});