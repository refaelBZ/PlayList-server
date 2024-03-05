
const likedModel = require('./liked.model'); // ייבוא המודל


async function read(filter){
   
    let liked= await likedModel.find(filter)
    console.log(liked)
    return await likedModel.find(filter)
}


async function readOne(filter){
   
    let liked= await likedModel.findOne({filter})
    console.log("like", liked)
    return await likedModel.findOne({filter})
}




// async function create(data) {
//     try {
//         let newSong = await likedModel.create(data);
//         console.log('New song added:', newSong);
//         return newSong;
//     } catch (error) {
//         console.error('Error in create:', error);
//         return null;
//     }
// }


async function create(data){
    return await likedModel.create(data)
}

module.exports = {create, read, readOne } 