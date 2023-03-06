document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const name = document.querySelector('input').value
    try{
        const response = await fetch(`http://api-work-production.up.railway.app/api/${name}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}

