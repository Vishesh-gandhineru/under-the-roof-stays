"use server"


export async function GetProductFromBundl (searchInput) {
       
    let product = [];
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: '{"input":"Almere, Flevoland"}'
      };
      
     await fetch('https://app.bundl.ai/api/v1/getskus', options , { cache: 'no-store' })
        .then(response => response.json())
        .then(response => {
        product.push(response);
        })
        .catch(err => console.error(err));

        return product;
    }