const express = require('express')
const app = express()
const upload = require('./multer')
const Product = require('./model/Product')

const bodyParser = require('body-parser');     
app.use(bodyParser.urlencoded({extended:false}));  //* artık veriler parse edilebilir.
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.send('hello')
})

const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MONGODB_URL)
.then(response => {
    console.log('Database Connection Successfull')
})
.catch(err => {
    console.log(err)
})


app.post('/upload', upload.array('image',3), async (req,res) => {
    console.log(req.savedImages)

   
    const data = await req.body.data
    const result = await JSON.parse(data)
    
    const product = await new Product({
        title : result.title,
        explantion : result.explantion,
        gender : result.gender,
        brand : result.brand,
        color : result.color,
        size : result.size,
        image : result.savedImages

    })
    await product.save()

    .then(data => {
        return res.status(200).json('kayıt eklendi')
    })
    .catch(err => {
        console.log(err)
        return res.status(404).json('kayıt eklenemedi hata.')

    })


})


app.get('prdocut', async (req,res) => {
    const products = await Product.find()

    return res.status(200).json({products})
})




app.listen(5000, () => {
    console.log('server running...')
})