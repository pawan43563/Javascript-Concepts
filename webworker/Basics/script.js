const worker = new Worker('worker.js');

const sumId = document.getElementById("sumBtn");
const bgId = document.getElementById("changeBg");

sumId.addEventListener('click', () => {
    worker.postMessage('Hello Worker');
})

worker.onmessage = (message) =>{
    alert(`Total sum: ${message.data}`);
}


bgId.addEventListener('click', () => {
    if(document.body.style.background!=='green'){
        document.body.style.background = 'green';
    }else{
        document.body.style.background = 'blue';
    }

})