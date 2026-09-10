let display = document.getElementById(`display`);
let buttons = document.querySelectorAll(`button`);
    buttons.forEach(button => {
        button.addEventListener(`click`, () => {
            let value = button.id;
            if (value === `clear`) {
                display.value = ``;
            } else if ( value === `backspace`) {
                display.value = display.value.slice(0, -1);
            } else if ( value === `=`) {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = `Error`;
                }
            } else if ([`sin`, `cos`, `tan`, `log`, `sqrt`, `exp`].includes(value)){
                let func = Math[value];
                display.value = func(parseFloat(display.value));
            }else {
                display.value += value;
            }
        });
    });