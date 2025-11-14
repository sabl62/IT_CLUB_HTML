const memes = [
    {
        text: "When you realize it's Monday again 😩",
        image: "https://i.imgflip.com/4/4t0m5.jpg" // Drake meme
    },
    {
        text: "Me trying to act normal after sending a risky text 😬",
        image: "https://i.imgflip.com/1ur9b0.jpg" // Distracted boyfriend
    },
    {
        text: "When you finish your exam and everyone starts discussing answers 😭",
        image: "https://i.imgflip.com/2/26am.jpg" // Crying Jordan
    },
    {
        text: "Coding be like: It works on my machine 💻🔥",
        image: "https://i.imgflip.com/265k.jpg" // Success Kid
    },
    {
        text: "When your Wi-Fi disconnects during an important call 📶💀",
        image: "https://i.imgflip.com/30b1gx.jpg" // Confused Nick Young
    },
    {
        text: "Me: I’ll just rest for 5 minutes... *3 hours later* 😴",
        image: "https://i.imgflip.com/1otk96.jpg" // Sleeping Tom
    },
    {
        text: "When your code finally runs without errors 👨‍💻✨",
        image: "https://i.imgflip.com/1bij.jpg" // One does not simply
    },
    {
        text: "That one friend who always says 'trust me bro' 😏",
        image: "https://i.imgflip.com/3si4.jpg" // The Rock eyebrow
    },
    {
        text: "When you open the fridge for the 5th time hoping new food appeared 🥲",
        image: "https://i.imgflip.com/3vzej.jpg" // Sad Pablo Escobar
    },
    {
        text: "When someone says calm down while youre angry 😤",
        image: "https://i.imgflip.com/1h7in3.jpg" // Angry Pikachu
    }
];

// console.log(memes[3]);

function generateMeme(){
    let rIndex = Math.floor(Math.random()*15);
    // console.log(memes[rIndex]);
    document.getElementById('meme').innerText = memes[rIndex].text;
    document.getElementById('image').src = memes[rIndex].image;
};