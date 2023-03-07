const express = require('express')
const app = express()
const PORT = 8000

//allowing a local computer to request something via an API from our server. If we don't have this, then we get a CORS error in the console. 
const cors = require('cors')

//this allows our app to use the cors method. 
app.use(cors())

const people = {
    'silentfoe' : {
        'age': 29,
        'location': 'Michigan,USA',
        'city': 'Detroit',
        'birthname': 'chris topher bean'
    }, 
    'mom' : {
        'age': 75,
        'location': 'Ohio,USA',
        'city': 'Toledo',
        'birthname': 'mama knows best'
    }, 
    'brother' : {
        'age': 39,
        'location': 'Michigan,USA',
        'city': 'Imlay City',
        'birthname': 'the quiet one'
    },
    'uncle' : {
        'age': 54,
        'location': 'Indiana,USA',
        'city': 'Gary',
        'birthname': 'what about guy'
    }, 
    'aunt' : {
        'age': 65,
        'location': 'Florida,USA',
        'city': 'Miami',
        'birthname': 'she may say'
    }, 
    'cousin' : {
        'age': 25,
        'location': 'California,USA',
        'city': 'San Diego',
        'birthname': 'the surf kid'
    },  
    'other' : {
        'age': 'unknown',
        'location': 'unknown',
        'city': 'unknown',
        'birthname': 'unknown'
    }, 
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/other', (req,res) => {
    res.sendFile(__dirname + '/otherIndex.html')
})

app.get('/api/:name', (request, response) => {
    const name = request.params.name.toLowerCase()
    if(people[name]){
        response.json(people[name])
    }else{
        response.json(people['other'])
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The sever is running on ${PORT}!`)
})