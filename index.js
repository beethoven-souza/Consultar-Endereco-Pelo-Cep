
const fillForm = (address) =>{
    document.getElementById('endereco').value = address.logradouro 
    document.getElementById('bairro').value = address.bairro
    document.getElementById('cidade').value = address.localidade
    document.getElementById('estado').value = address.uf   
}


const searchCep = async()=>{
    const cep = document.getElementById('cep').value    
    const url = `https://viacep.com.br/ws/${cep}/json/`
    //fetch(url).then(response => response.json()).then(console.log)
    const data = await fetch(url)
    const address = await data.json()
    fillForm(address)
}

document.getElementById('cep').addEventListener('focusout', searchCep)