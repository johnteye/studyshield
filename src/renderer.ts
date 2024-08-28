import './index.css';
import './app'

const backButton = document.getElementById('back-button')
const forwardButton = document.getElementById('forward-button')
const reloadButton = document.getElementById('reload-button')
const newWindowButton = document.getElementById('new-window-buttton')

const urlInputField = document.getElementById('url-input') as HTMLInputElement

const webview = document.getElementById('webview') as HTMLIFrameElement;
console.log(urlInputField)

urlInputField.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        event.preventDefault();
        handleUrl()
    }
})

function handleUrl(){
    if (urlInputField && webview) {
        const inputUrl = urlInputField.value;
        if (inputUrl) {
            webview.src = inputUrl;
        } else {
            console.error('Input URL is empty.');
        }
    } else {
        console.error('Elements not found.');
    }
}