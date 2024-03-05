const express = require('express');
const router = express.Router();
const { addLikedSong } = require('./liked.services'); // ייבוא של השירות
const service=require('./liked.services');


// Get liked songs list
router.get('/', async (req, res) => {
    try {
        const likedSongs = await service.getLiked(); // מחכה לתשובה מהשירות
        res.send({ 
            message: "added successfully", // הודעה למשתמש
            songs: likedSongs // שליחת רשימת השירים
        });
    } catch (error) {
        res.status(500).send({ message: "error has occured", error: error.message });
    }
});



// Add liked song to the list
router.post('/', (req, res) => {

    try{
        console.log(req.body);
        const result = addLikedSong(req.body);
        if (result) {
            res.send(result); }
    }catch (error) {

        res.status(404).send(result);

    }
});

module.exports = router;
