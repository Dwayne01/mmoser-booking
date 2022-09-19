export const baseUrl = "http://localhost:3000"

export const fetchAllDesks = async () => {
    let res = await fetch(`${baseUrl}/desks`).then(data => {
        return data.json()
    })

    return res;
}

export const fetchAllBookings = async () => {
    let res = await fetch(`${baseUrl}/bookings`).then(data => {
        return data.json()
    })

    return res;
}



export const makeBookings = async (params) => {

    console.log(params)
    let res = await fetch(`${baseUrl}/bookings`, {
        method: 'POST',
        body: JSON.stringify(params),
    }).then(data => {
        return data.json()
    })

    return res;
}

