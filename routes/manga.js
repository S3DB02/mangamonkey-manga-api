const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get("/", async (req, res) => {
    let finalResponse = {
        mangas: [],
        
    }
    const response = await axios.get(`https://api.mangadex.org/manga?limit=10&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art`) //10 manga
    finalResponse.mangas = []
    response.data.data.forEach(manga => {
        console.log(JSON.stringify(manga.relationships[2]))
        const coverimage = manga.relationships.find(el => el.type === "cover_art")
        const genres = manga.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en)
        finalResponse.mangas.push({
            coverLink: `https://uploads.mangadex.org/covers/${manga.id}/${coverimage.attributes.fileName}`,
            title: manga.attributes.title.en,
            id: manga.id,
            genres: genres
        });
    })
    res.send(finalResponse)
})


module.exports = router