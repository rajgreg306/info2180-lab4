const search = () => {
    document.addEventListener("click", async () => {
        
        response = await fetch('http://localhost/info2180-lab4/info2180-lab4/superheroes.php')
        data = await response.text();

        alert(data)

        .catch(error => {
            console.log(error)
        })

    })
}