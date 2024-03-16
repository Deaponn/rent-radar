const express = require('express')
const app = express()
const PORT = 3000

//cors
const cors = require('cors')
app.use(cors())

//body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// database
const db = require('./hidden')
const mysql = require('mysql2/promise')
const pool = mysql.createPool({
    ...db,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// put product to database
app.put('/addOffer', async (req, res) => {
    if (!req.body.url) return res.status(400).json({ message: 'Bad Request' })

    try {
        await pool.execute('INSERT INTO offers (address, size, price, deposit, roomsCount, separateKitchen, heatingType, waterType, bathOrShower, url, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.body.address || null, req.body.size || null, req.body.price || null, req.body.price || null, req.body.roomsCount || null, req.body.separateKitchen === undefined ? null : req.body.separateKitchen, req.body.heatingType || null, req.body.waterType || null, req.body.bathOrShower || null, req.body.url, req.body.imageUrl || null])
        res.status(201).json({ message: 'Offer successfully added' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

app.put('/addMultipleOffers', async (req, res) => {
    //check if there is array in body
    if (!Array.isArray(req.body)) return res.status(400).json({ message: 'Bad Request: Array of offers is required' });

    try {
        const values = req.body.map(offer => {
            return [
                offer.address || null,
                offer.size || null,
                offer.price || null,
                offer.deposit || null,
                offer.roomsCount || null,
                offer.separateKitchen === undefined ? null : offer.separateKitchen,
                offer.heatingType || null,
                offer.waterType || null,
                offer.bathOrShower || null,
                offer.url,
                offer.imageUrl || null
            ];
        });

        await pool.query(
            'INSERT INTO offers (address, size, price, deposit, roomsCount, separateKitchen, heatingType, waterType, bathOrShower, url, imageUrl) VALUES ?',
            [values]
        );

        res.status(201).json({ message: 'Multiple offers successfully added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// display products
app.get('/offers', async (req, res) => {
    const { perPage = 5, page = 1, sort = 'asc', sortBy: rawSortBy } = req.query
    const sortBy = rawSortBy ? rawSortBy : undefined

    //sort size, price, roomsCount
    let query = 'SELECT * FROM offers '
    if (['size', 'price', 'roomsCount'].includes(sortBy)) {
        query += `ORDER BY ${sortBy} ${sort === 'desc' ? 'desc' : ''} `
    }
    query += `LIMIT ${perPage} OFFSET ${perPage * (page - 1)}`

    try {
        const [rows] = await pool.execute(query)
        const [[result]] = await pool.execute('SELECT COUNT(*) AS count FROM offers')
        res.status(200).json({ items: rows, totalCount: result.count })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

app.listen(PORT, function () {
    console.log('Server started on port ' + PORT)
})