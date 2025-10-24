const search = async (e) => {
    

    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    
    response = await fetch(`superheroes.php?query=${name}`)
    data =await response.text();

    document.getElementById('result').innerHTML = data;
          
}



