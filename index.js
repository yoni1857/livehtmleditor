
console.log = function(message, ...optionalParams){
    const meconsole = document.getElementById("__Console__");
    if (optionalParams === null || undefined){
        meconsole.innerHTML += String(message) + "\n";
    } else {
        meconsole.innerHTML += String(message) + "\n" + optionalParams + "\n";
    }
    meconsole.scrollBy(0, meconsole.scrollHeight);
}

console.error = function(message, ...optionalParams){
    const meconsole = document.getElementById("__Console__");
    if (optionalParams === null || undefined){
        meconsole.innerHTML += "ERROR: " + String(message) + "\n";
    } else {
        meconsole.innerHTML += "ERROR: " + String(message) + "\n" + optionalParams + "\n";
    }
    meconsole.scrollBy(0, meconsole.scrollHeight);
    
}

console.warn = function(message, ...optionalParams){
    const meconsole = document.getElementById("__Console__");
    if (optionalParams === null || undefined){
        meconsole.innerHTML += "WARNING: " + String(message) + "\n";
    } else {
        meconsole.innerHTML += "WARNING: " + String(message) + "\n" + optionalParams + "\n";
    }
    meconsole.scrollBy(0, meconsole.scrollHeight);
}

console.info = function(message, ...optionalParams){
    const meconsole = document.getElementById("__Console__");
    if (optionalParams === null || undefined){
        meconsole.innerHTML += "INFO: " + String(message) + "\n";
    } else {
        meconsole.innerHTML += "INFO: " + String(message) + "\n" + optionalParams + "\n";
    }
    meconsole.scrollBy(0, meconsole.scrollHeight);
}

console.clear = function(asktoconfirm = true){
    const meconsole = document.getElementById("__Console__");
    if (asktoconfirm){
        if (confirm("Are you sure you want to clear the console?")){
            meconsole.innerHTML = "";
            alert("Done.");
        } else{

        }
    } else {
        meconsole.innerHTML = "";
    }
}

window.addEventListener("error", function(e){console.log(e.stack);});

const __one__ = document.getElementById("__one__");
const __two__ = document.getElementById("__preview__");
const __windowtitle__ = document.getElementById("__windowtitle__");
const __meprompt__ = document.getElementById("__prompt__");
const __meconsole__ = document.getElementById("__Console__");
const preview = document.getElementById("__preview__");


const __txt__ = document.getElementById("__code__");
let __code__ = "";

const __btn__ = document.getElementById("__btn__");

__btn__.addEventListener("click", function(e){
    __code__ = __txt__.value;
    __two__.innerHTML = __code__;
    let title = __two__.getElementsByTagName("title");
    try{
        __windowtitle__.innerText = title[0].innerText;
    } catch (error){
        __windowtitle__.innerText = "";
    }
    let scripts = __two__.getElementsByTagName("script");
    for (i = 0; i < scripts.length; i++){
        try{
            let text = scripts[i].innerText;
            text = text.replace(/\n/g, ' ');
            console.log(">> " + text);
            __meconsole__.scrollBy(0, __meconsole__.scrollHeight);
            let func = new Function(text);
            func();
        } catch (error){
            console.error(error.message);
        }
    }
});

__meprompt__.addEventListener("keydown", function(e){
    if (e.keyCode === 13){
        if (__meprompt__.value !== ""){
            try{
                __meconsole__.innerHTML += ">> " + __meprompt__.value + "\n";
                var output = eval(__meprompt__.value);
                if (output !== undefined) {
                    __meconsole__.innerHTML += String(output) + "\n";
                }
            } catch (error){
                console.log(error);
            }
        } else{
            
        }
        __meprompt__.value = "";
        __meconsole__.scrollBy(0, __meconsole__.scrollHeight);
    }
});

function enableTab(id) {
    var el = document.getElementById(id);
    el.onkeydown = function(e) {
        if (e.keyCode === 9) { 


            var val = this.value,
                start = this.selectionStart,
                end = this.selectionEnd;

            this.value = val.substring(0, start) + '\t' + val.substring(end);

            this.selectionStart = this.selectionEnd = start + 1;

            return false;

        }
    };
}

enableTab('__code__');