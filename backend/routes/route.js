const express = require('express')
const router = express.Router();

const registerTemplateCopy = require('../models/RegisterModels')
const bookingTemplateCopy = require('../models/BookModels')


const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'fajsdhfkjshdfkhasdfsdf*$*^$*^#@ijhsdjfsdfjhbsdf'



router.post('/login', async (req, res) => {
    const { fullName, password } = req.body
    const user = await registerTemplateCopy.findOne({ fullName }).lean()

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid username/password' })
    }

    if (await bcrypt.compare(password, user.password)) {
        // the username, password combination is successful

        const token = jwt.sign(
            {
                id: user._id,
                fullName: user.fullName
            },
            JWT_SECRET
        )

        return res.json({ status: 'ok', data: token })
    }

    res.json({ status: 'error', error: 'Invalid username/password' })
})

router.post('/register', async (request, respone) => {
    // response.send('sent');

    const saltPassword = await bcrypt.genSalt(10);
    const securedPass = await bcrypt.hash(request.body.password, saltPassword)



    const registerdUser = new registerTemplateCopy({
        fullName: request.body.fullName,
        // phoneNumber: request.body.phoneNumber,
        email: request.body.email,
        // password: request.body.password
        password: securedPass

    })

    registerdUser.save()
        .then(data => {
            respone.json(data)
        })
        .catch(error => {
            respone.json(error)
        })
})


router.post('/search', async (request, respone) => {
    // response.send('sent');

    const booking = new bookingTemplateCopy({
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        destination: request.body.destination,
        adults: request.body.adults,
        children: request.body.children,
        room: request.body.room,



    })
    booking.save()
        .then(data => {
            respone.json(data);
        })
        .catch(error => {
            respone.json(error)
        })

})



module.exports = router;

// need to hash the password for security
