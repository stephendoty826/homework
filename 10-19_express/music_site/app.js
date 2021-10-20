
const express = require('express');

const port = 3000

const app = express()

let songs = [{
    name: "Sigh No More",
    slug: "sigh_no_more",
    publishDate: "2009",
    description: "Sigh No More is the debut studio album by London-based rock quartet Mumford & Sons. It was released on 2 October 2009 in the UK, and on 16 February 2010 in the United States and Canada. The album entered the UK Albums Chart at No. 11 and peaked at No. 2 on 20 February 2011, in its 72nd week on the chart and following its Album of the Year win at the Brit Awards. In early 2011, the album peaked at No. 2 on the Billboard 200 in the US.",
    imgURL: "https://img.discogs.com/mm1mR4CfpQtZ8G5b1U0gDgilXhw=/fit-in/600x534/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2889488-1305841296.jpeg.jpg",
    songTitles: ["Sign No More", "The Cave", "Winter Winds", "Roll Away Your Stone", "White Blank Page", "I Gave You All", "Little Lion Man", "Timshel", "Thistle & Weeds", "Awake My Soul", "Dust Bowl Dance", "After the Storm"]
}, 
{
    name: "Babel",
    slug: "babel", 
    publishDate: "2012",
    description: "Babel is the second studio album by British rock band Mumford & Sons. As with Sigh No More, the album was produced by Markus Dravs. The vinyl LP version of the record was pressed by United Record Pressing in Nashville, Tennessee. It was released on 21 September 2012 in Ireland, Germany, Belgium, the Netherlands, Luxembourg, Norway, Australia and New Zealand. It was released on 24 September 2012 in the United Kingdom, Scandinavia, Spain, Italy, Eastern Europe, South America, and on 25 September 2012 in the United States and Canada.",
    imgURL: "https://www.nme.com/wp-content/uploads/2016/09/MumfordAndSonsBabel600Gb030912-1.jpg",
    songTitles: ["Babel", "Whispers in the Dark", "I Will Wait", "Holland Road", "Ghosts That We Knew", "Lover of the Light", "Lovers' Eyes", "Reminder", "Hopeless Wanderer", "Broken Crown", "Below My Feet", "Not with Haste", "For Those Below", "The Boxer", "Where Are You Now"]
}, 
{
    name: "Wilder Mind",
    slug: "wilder_mind",
    publishDate: "2015",
    description: 'Wilder Mind is the third studio album by British rock band Mumford & Sons. It was released on 4 May 2015 through Gentlemen of the Road, Island, Glassnote and Universal Music Group. It was an international success in its first week on sale, charting at number one in seven countries, topping both the UK Albums Chart and the US Billboard 200, and reaching the top 5 in nine other countries. Five singles have been released from the album, "Believe", "The Wolf", "Ditmas", "Tompkins Square Park" and "Just Smoke".',
    imgURL: "https://media.pitchfork.com/photos/5929ad795e6ef95969321aa8/1:1/w_600/d5990d63.jpg",
    songTitles: ["Tompkins Square Park", "Believe", "The Wolf", "Wilder Mind", "Just Smoke", "Monster", "Snake Eyes", "Broad-Shouldered Beasts", "Cold Arms", "Ditmas", "Only Love", "Hot Gates", "Tompkins Square Park - Live", "Believe - Live", "The Wolf - Live", "Snake Eyes - Live"]
}, 
{
    name: "Delta",
    slug: "delta",
    publishDate: "2018",
    description: "Delta is the fourth studio album by British band Mumford & Sons. It was released on 16 November 2018 through Gentlemen of the Road, Island Records and Glassnote.[1] The album was recorded at The Church Studios in London with producer Paul Epworth.[1] The album reached number one on the US Billboard 200 and number two on the UK Albums Chart. It was also their last album with guitarist and banjoist Winston Marshall before his departure in 2021.",
    imgURL: "https://media.pitchfork.com/photos/5beeeb217dac23155a9eb828/1:1/w_600/delta.jpg",
    songTitles: ["42", "Guiding Light", "Woman", "Beloved", "The Wild", "October Skies", "Slip Away", "Rose Of Sharon", "Picture You", "Darkness Visible", "If I Say", "Wild Heart", "Forever", "Delta"]
}]

app.get("/", (req, res) => {
    res.send(`
        <h1>Mumford & Sons</h1>
        <h3>Mumford & Sons are a British folk rock band formed in London in 2007.[2] The band consists of Marcus Mumford (lead vocals, electric guitar, acoustic guitar, drums), Ben Lovett (vocals, keyboards, piano), and Ted Dwane (vocals, bass guitar, double bass). Banjo player Winston Marshall left the band in 2021.</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Marcus_Mumford_at_Newport_Folk_Festival_2018_by_Sachyn_Mital.jpg/1024px-Marcus_Mumford_at_Newport_Folk_Festival_2018_by_Sachyn_Mital.jpg" height="300px">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Ben_Lovett_Mumford_%26_Sons.jpg" height="300px">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Ted_Dwane_of_Mumford_%26_Sons_at_Londonewcastle_Project_Space_for_A_Show_of_Faces%2C_November_2013.jpg" height="300px">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mumford_%26_Sons_-_Southside_Festival_2019_9927_-_1_%28cropped_-_1%29.jpg/800px-Mumford_%26_Sons_-_Southside_Festival_2019_9927_-_1_%28cropped_-_1%29.jpg" height="300px">
        <br>
        <br>
        <h2><a href="/albums">Albums</a></h2>
    `)
})

function albums(){
    let layout = ""
    for(album of songs){
        layout += `<a href="/albums/${album.slug}"><img src=${album.imgURL} height="300px"></a>`
    }
    return layout
}

app.get("/albums", (req, res) => {
    res.send(albums())
})

function albumLayout(album){
    function listSongs(album){
        let songList = ""
        for(let i = 0; i <= album.songTitles.length - 1; i++){
            songList += `<li>${album.songTitles[i]}</li>`
        }   
        return songList
    }
    
    let albumSongs = listSongs(album)

    let layout = `
        <img src=${album.imgURL} height="450px">
        <br>
        <ol>${albumSongs}</ol>
    `
    return layout
}

app.get("/albums/sigh_no_more", (req, res) => {
    res.send(albumLayout(songs[0]))
})

app.get("/albums/babel", (req, res) => {
    res.send(albumLayout(songs[1]))
})

app.get("/albums/wilder_mind", (req, res) => {
    res.send(albumLayout(songs[2]))
})

app.get("/albums/delta", (req, res) => {
    res.send(albumLayout(songs[3]))
})

app.listen(3000, () => {
    console.log(`Listening on port:${port}.`)
})