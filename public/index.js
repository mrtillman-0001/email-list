window.onload = function(){
  const searchForm = document.getElementById("search-form");
  const output = document.getElementById("output");
  searchForm.onsubmit = function(e){
    e.preventDefault();
    const query = new URLSearchParams(new FormData(searchForm)).toString();
    fetch(`/search?${decodeURIComponent(query)}`, {
      method: 'POST'
    }).then(async res => {
      if(res.ok){
        addresses = await res.json();
        output.innerHTML = JSON.stringify(addresses, null, 3);
      }
    });
  }  
}