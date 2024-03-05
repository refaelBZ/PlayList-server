const likedController=require("./liked.controller")




async function addLikedSong(song) {
        let songExists = await likedController.readOne(song.video_id);
        if (!songExists) {
           return await likedController.create(song);
        } else {
            return { success: false, message: "Song is already in the list" };
        }
}


// // Gets all liked songs
// async function getLiked() {
    
//     const filter={}
//     let likedSongs=await likedController.read(filter)
//     return likedSongs;
// }






module.exports = {addLikedSong};


