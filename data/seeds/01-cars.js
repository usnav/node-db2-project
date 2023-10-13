// STRETCH

const cars = [
    {
        vin: '1BAGNB7A3TF071506',
        make: "toyota", 
        model: "prius",
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    } ,
    {
        vin: 'TRUSC28N341016582',
        make: "toyota", 
        model: "corolla",
        mileage: 115000,
        title: 'salvage'
    } ,
    {
        vin: 'WDBAB23ADCB324720',
        make: "ford", 
        model: "focus",
        mileage: 15000,
    } 
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars) 
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars) 
}