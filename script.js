
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

var user = {
    name: "",
};

var images = {
    1: Object.assign(new Image, {
        src: "http://i.stack.imgur.com/KUvWS.jpg"
      }),
      2: Object.assign(new Image, {
        src: "https://www.veggipedia.nl/assets/Uploads/Products/790c27918e/Jonagold-appel-fruit-veggipedia.jpg"
      }),
}
user.name = prompt("Please enter your name");
//console.log(images.img1)
//let state = {} -For extra options for the story, make it conditioned depending on state. For example: Covid=True? Then no entrance allowed.

function startGame() {
    showTextNode(1)
}
//Laat de tekst zien die nodig is en de opties die nodig zijn.
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex)
        textElement.innerText = textNode.text 
        while (optionButtonsElement.firstChild){
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }
        // if (textNodes.img[textNodeIndex] = true){
        //     document.write('<div id="plaatje"><br><br><br><img src="'+[images.textNodeIndex.src]+'" height="100" width="200"/></div>') 
        // }
        textNode.options.forEach(option => {
            // Optie knoppen aanmaken voor de opties die in het object zitten (zie textNodes)
            if (showOption(option)) {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option)) //Starts selectoption functions
                optionButtonsElement.appendChild(button)
                
            }
        })
}

function showOption(option) {
    return option
}

function selectOption(option) {
        const nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0) {
            return startGame()
        }
        showTextNode(nextTextNodeId)
       //Note2self Hier de remove element code (voor images)
}
//document.write('<div id="plaatje"><br><br><br><img src="'+[images.img1.src]+'" height="100" width="200"/></div>') 
const textNodes = [
    {
        id: 1,
        img: false, 
        text: 'The story starts with ' + [user.name] +  ' you are Firsttime adFemturer wandering around Silly Cones Valley. You stumble upon an abandoned laptop with your name on it. You decide to',
        options: [
            {
                text: 'try your luck by yourself, in true DIY spirit',
                nextText: 2
            },
            {
                text: 'seek advice in the magical desert surrounding you',
                nextText: 3
            }
        ]
    }, 
    {
        id: 2,
        text: 'ERROR!' + [user.name] + 'you come to understand that coding is not an easy feat. You want to try again, but progress is hard.',
        options: [
            {
                text: 'calling a Fellow Femturer for emotional/tech support and try again.',
                nextText: 4
            },
            {
                text: 'keep on keepin’ on, assuming you already have the skills and data you need',
                nextText: 5
            }
        ]
    },


    {
        id: 3,
        text: 'Welcome' + [user.name] + ' ! I am Femtutor the Python, the Queen of the Silly Cones Valley. I will teach you how to code, but your journey will be full of trials and tribulations. Are you ready for that?'        ,
        options: [
            {
                text: 'YES I AM!',
                nextText: 6
            },
            {
                text: 'I don’t know if I can trust this Queen…..',
                nextText: 7
            }
        ]
    },
    {
        id: 4,
        text: 'Congratulations' + [user.name] + ' ! By asking for input and diversifying your data, you are healing the world one line of code at the time!' ,
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },
    {
        id: 5,
        text: 'Oh unfortunate' + [user.name] + '! You have created a destructive AI filled with biased data. Death is upon you/us!' ,
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },
    {
        id: 6,
        text: 'Congratulations' + [user.name] + '!By working with the Python Queen you have become a Coding Empress yourself. You rule over 30 succesvol start ups with equally awesome women and femmes!',
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },
    {
        id: 7,
        text: 'Oh unfortunate ' + [user.name] + '! You decide to destroy the thing you love most and live life as a malicious coding bug.',
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },

]

startGame()






