document.addEventListener('DOMContentLoaded', () => {
    const textDisplay = document.getElementById('textDisplay');
    const colorButton = document.getElementById('colorButton');
    const textButton = document.getElementById('textButton');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    const contentContainer = document.getElementById('contentContainer');
    
    let dynamicElementExists = false;
    
    textButton.addEventListener('click', () => {
        const messages = [
            'JavaScript makes websites interactive!',
            'DOM manipulation is powerful!',
            'Events make your page respond to users!',
            'You clicked the button!'
        ];
        
        const randomIndex = Math.floor(Math.random() * messages.length);
        
        textDisplay.textContent = messages[randomIndex];
        
        console.log('Text changed to: ' + messages[randomIndex]);
    });
    
    colorButton.addEventListener('click', () => {
        const randomColor = `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
        )`;
        
        contentContainer.style.backgroundColor = randomColor;
        
        const colorValues = randomColor.match(/\d+/g);
        const brightness = (parseInt(colorValues[0]) + parseInt(colorValues[1]) + parseInt(colorValues[2])) / 3;
        
        if (brightness < 128) {
            contentContainer.style.color = 'white';
        } else {
            contentContainer.style.color = 'black';
        }
        
        console.log('Background changed to: ' + randomColor);
    });
    
    addButton.addEventListener('click', () => {
        if (!dynamicElementExists) {
            const newElement = document.createElement('div');
            newElement.id = 'dynamicElement';
            newElement.className = 'dynamic-box';
            
            newElement.innerHTML = `
                <h3>Dynamically Added Element</h3>
                <p>This element was created with JavaScript and inserted into the DOM!</p>
                <p>Click the "Remove Element" button to delete it.</p>
            `;
            
            contentContainer.appendChild(newElement);
            
            dynamicElementExists = true;
            removeButton.disabled = false;
            addButton.disabled = true;
            
            console.log('Dynamic element added');
        }
    });
    
    removeButton.addEventListener('click', () => {
        const dynamicElement = document.getElementById('dynamicElement');
        
        if (dynamicElement) {
            contentContainer.removeChild(dynamicElement);
            
            dynamicElementExists = false;
            removeButton.disabled = true;
            addButton.disabled = false;
            
            console.log('Dynamic element removed');
        }
    });
    
    removeButton.disabled = true;
    
    console.log('JavaScript initialization complete. Page is ready for interaction.');
});