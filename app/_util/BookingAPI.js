"use server"

export async function CheckAvailbity (body , sessionId) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/availablity`;
    const config = {headers : {
        "X-API-Token" : `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
        "Authorization" : sessionId
    }}
    return await axios.post(url ,body,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )

}