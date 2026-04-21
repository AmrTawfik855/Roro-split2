var secretWordInput = document.querySelector('input');

document.querySelector('button').addEventListener('click',function (e) {
    var theWord = 'salam';
    if (secretWordInput.value === theWord) {
        window.location.href = "main.html" ; 
    }else{
        window.alert('Oops! Wrong word, princess ');
    }
})