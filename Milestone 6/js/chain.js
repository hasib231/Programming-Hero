const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}
console.log(data.data[1].job);

const user = {
    id: 5001,
    name: 'thomas',
    address: {
        street: {
            first: 'kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
}
const userFloor = user.address?.street?.second 
console.log(userFloor);

