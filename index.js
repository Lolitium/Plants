// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (menuLinks.length >0) {
    menuLinks.forEach (menuLink => {
        menuLink.addEventListener("click",onMenuLinkClick);
    });
}

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
    
        if(iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        
    }
}


if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const restBody = document.querySelectorAll('.body');
document.body.addEventListener("click-close", function(event) {
    if (event.target == restBody && document.body.classList.contains('_lock')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
}
});


//Blur в секции Service

// Переменные карточек
const gardenItems = document.querySelectorAll('.gardens');
const plantingItems = document.querySelectorAll('.planting');
const lawnItem = document.querySelector('.lawn');

// Переменные кнопок
const buttonGardens = document.getElementById('button_gardens');
const buttonLawn = document.getElementById('button_lawn');
const buttonPlanting = document.getElementById('button_planting');


// Навешиваем на кнопку Gardens
buttonGardens.addEventListener('click', blurOutGardens);

function blurOutGardens() {

    if (buttonLawn.classList.contains('_active')) {
        buttonLawn.classList.remove('_active');
        buttonGardens.classList.add('_active');
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('_blur');
        });
            lawnItem.classList.add('_blur');
            gardenItems.forEach (gardenItem => {
                gardenItem.classList.remove('_blur');
            });
    }

    else if (buttonPlanting.classList.contains('_active')) {
        buttonPlanting.classList.remove('_active');
        buttonGardens.classList.add('_active');
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('_blur');
        });
            lawnItem.classList.add('_blur');
            gardenItems.forEach (gardenItem => {
                gardenItem.classList.remove('_blur');
            });
    }

    else if (buttonGardens.classList.contains('_active')) {
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.remove('_blur');
        });
        lawnItem.classList.remove('_blur');
        buttonGardens.classList.toggle('_active');
    }

    
     else {plantingItems.forEach (plantingItem => {
            plantingItem.classList.toggle('_blur');
        });
    lawnItem.classList.toggle('_blur');

    buttonGardens.classList.add('_active');
    }
}


// На кнопку Planting
buttonPlanting.addEventListener('click', blurOutPlanting);


function blurOutPlanting() {

    if (buttonGardens.classList.contains('_active')) {
        buttonGardens.classList.remove('_active');
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('_blur');
        });

        plantingItems.forEach (plantingItem => {
            plantingItem.classList.remove('_blur');
        });

    lawnItem.classList.add('_blur');

    buttonPlanting.classList.add('_active');
    }

    else if (buttonLawn.classList.contains('_active')) {
        buttonLawn.classList.remove('_active');
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('_blur');
        });

    lawnItem.classList.add('_blur');
    plantingItems.forEach (plantingItem => {
        plantingItem.classList.remove('_blur');
    });
    buttonPlanting.classList.add('_active');
    }

   else if (buttonPlanting.classList.contains('_active')) {
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.remove('_blur');
        });
        lawnItem.classList.remove('_blur');
        buttonPlanting.classList.remove('_active');
    }
    else {
    gardenItems.forEach (gardenItem => {
            gardenItem.classList.toggle('_blur');
        });

    lawnItem.classList.toggle('_blur');
    buttonPlanting.classList.add('_active');


}
}

// На кнопку Lawn
buttonLawn.addEventListener('click', blurOutLawn);

function blurOutLawn() {

    if (buttonGardens.classList.contains('_active')) {
        buttonGardens.classList.remove('_active');
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('_blur');
        });
    
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('_blur');
        });
        buttonLawn.classList.add('_active');
        lawnItem.classList.remove('_blur');

    }

    else if (buttonPlanting.classList.contains('_active')) {
        buttonPlanting.classList.remove('_active');
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.add('_blur');
        });
    
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.add('_blur');
        });
        buttonLawn.classList.add('_active');
        lawnItem.classList.remove('_blur');
    }


    else if (buttonLawn.classList.contains('_active')) {
        gardenItems.forEach (gardenItem => {
            gardenItem.classList.remove('_blur');
        });
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.remove('_blur');
        });
        buttonLawn.classList.remove('_active');
    }
        else {
            gardenItems.forEach (gardenItem => {
            gardenItem.classList.toggle('_blur');
        });
    
        plantingItems.forEach (plantingItem => {
            plantingItem.classList.toggle('_blur');
        });
        buttonLawn.classList.add('_active');

}
}


// Аккордеоны

const pricesField = document.querySelector('.prices_items');

//Accordion Basics
const accordBasics=document.getElementById('basics');
const selectPrice1=document.getElementById('select-price1');

const dropButton1=document.getElementById('drop-down_button1');

dropButton1.addEventListener('click', showBasicsAccord);

function showBasicsAccord () {
    if (accordStandard.classList.contains('_active')) {
        dropButton2.classList.remove('_active');
        accordStandard.classList.remove('_active');
        selectPrice2.classList.remove('_active');
        pricesField.classList.remove('_active');

        accordBasics.classList.add('_active');
        selectPrice1.classList.add('_active');
        dropButton1.classList.add('_active');
        pricesField.classList.add('_active');
    }

    else if (accordProcare.classList.contains('_active')) {
        dropButton3.classList.remove('_active');
        accordProcare.classList.remove('_active');
        selectPrice3.classList.remove('_active');
        pricesField.classList.remove('_active');

        accordBasics.classList.add('_active');
        selectPrice1.classList.add('_active');
        dropButton1.classList.add('_active');
        pricesField.classList.add('_active');
    }

    else if (accordBasics.classList.contains('_active')) {
        dropButton1.classList.remove('_active');
        accordBasics.classList.remove('_active');
        selectPrice1.classList.remove('_active');
        pricesField.classList.remove('_active');
    }
    else {
    accordBasics.classList.add('_active');
    selectPrice1.classList.add('_active');
    dropButton1.classList.add('_active');
    pricesField.classList.add('_active');

}
}

//Accordion Standard
const accordStandard=document.getElementById('standard');
const selectPrice2=document.getElementById('select-price2');

const dropButton2=document.getElementById('drop-down_button2');

dropButton2.addEventListener('click', showStandardAccord);

function showStandardAccord () {
    if (accordBasics.classList.contains('_active')) {
        dropButton1.classList.remove('_active');
        accordBasics.classList.remove('_active');
        selectPrice1.classList.remove('_active');
        pricesField.classList.remove('_active');

        accordStandard.classList.add('_active');
        selectPrice2.classList.add('_active');
        dropButton2.classList.add('_active');
        pricesField.classList.add('_active');
    }

    else if (accordProcare.classList.contains('_active')) {
        dropButton3.classList.remove('_active');
        accordProcare.classList.remove('_active');
        selectPrice3.classList.remove('_active');
        pricesField.classList.remove('_active');

        accordStandard.classList.add('_active');
        selectPrice2.classList.add('_active');
        dropButton2.classList.add('_active');
        pricesField.classList.add('_active');
    }

     else if (accordStandard.classList.contains('_active')) {
        dropButton2.classList.remove('_active');
        accordStandard.classList.remove('_active');
        selectPrice2.classList.remove('_active');
        pricesField.classList.remove('_active');
    }

    else {
    accordStandard.classList.add('_active');
    selectPrice2.classList.add('_active');
    dropButton2.classList.add('_active');
    pricesField.classList.add('_active');

}
}


//Accordion Pro care
const accordProcare=document.getElementById('pro-care');
const selectPrice3=document.getElementById('select-price3');

const dropButton3=document.getElementById('drop-down_button3');

dropButton3.addEventListener('click', showProcareAccord);

function showProcareAccord () {
    if (accordBasics.classList.contains('_active')) {
        dropButton1.classList.remove('_active');
        accordBasics.classList.remove('_active');
        selectPrice1.classList.remove('_active');
        pricesField.classList.remove('_active');

        accordProcare.classList.add('_active');
        selectPrice3.classList.add('_active');
        dropButton3.classList.add('_active');
        pricesField.classList.add('_active');
    }
    else if (accordStandard.classList.contains('_active')) {
        dropButton2.classList.remove('_active');
        accordStandard.classList.remove('_active');
        selectPrice2.classList.remove('_active');
        pricesField.classList.remove('_active');

        accordProcare.classList.add('_active');
        selectPrice3.classList.add('_active');
        dropButton3.classList.add('_active');
        pricesField.classList.add('_active');
    }
     else if (accordProcare.classList.contains('_active')) {
        dropButton3.classList.remove('_active');
        accordProcare.classList.remove('_active');
        selectPrice3.classList.remove('_active');
        pricesField.classList.remove('_active');
    }

    else {
    accordProcare.classList.add('_active');
    selectPrice3.classList.add('_active');
    dropButton3.classList.add('_active');
    pricesField.classList.add('_active');

}
}

const buttonsOrder = document.querySelectorAll('.drop-button_order');
const sectionContacts = document.querySelector('.contact-us');
buttonsOrder.forEach (buttonOrder => {
    buttonOrder.addEventListener('click', gotoContacts)
});
function gotoContacts() {
    window.scrollTo({
        top: sectionContacts.getBoundingClientRect().top + scrollY,
        behavior: "smooth"
    });
    
};

//Select in Contacts

const selectDropContacts = document.querySelector('.drop-down_contacts');
const dropButtonContacts = document.querySelector('.drop-button_contacts');
const selectContacts = document.querySelector('.select');

dropButtonContacts.addEventListener ('click', showSelectContacts);

function showSelectContacts () {
    if (dropButtonContacts.classList.contains('_active')) {
        dropButtonContacts.classList.remove('_active');
        selectDropContacts.classList.remove('_active');
        selectContacts.classList.remove('_active');
    }
    else {
        dropButtonContacts.classList.add('_active');
        selectDropContacts.classList.add(('_active'));
        selectContacts.classList.add('_active');
    }
}


//Выдача карточки с контактами

//Переменные полей Select
const cityCanandaigua = document.querySelector('.Canandaigua');
const cityNewYork = document.querySelector('.New-York');
const cityYonkers = document.querySelector('.Yonkers');
const citySherrill = document.querySelector('.Sherrill');

//Переменные карточек
const cardCanandaigua =document.querySelector('.card_Canandaigua');
const cardNewYork =document.querySelector('.card_New-York');
const cardYonkers = document.querySelector('.card_Yonkers');
const cardSherrill = document.querySelector('.card_Sherrill');


//Выдача карточки Канандайгуа
cityCanandaigua.addEventListener('click', function(){
    cardCanandaigua.classList.add('_active');
    selectDropContacts.classList.remove('_active');
    selectContacts.classList.add("_selected");
});

//Скрытие карточки
dropButtonContacts.addEventListener('click', function(){
    if (cardCanandaigua.classList.contains('_active')) {
    cardCanandaigua.classList.remove('_active');
    selectContacts.classList.remove("_selected");
    }
});

// Карточка Нью-Йорк
cityNewYork.addEventListener('click', function(){
    cardNewYork.classList.add('_active');
    selectDropContacts.classList.remove('_active');
    selectContacts.classList.add("_selected");
});

dropButtonContacts.addEventListener('click', function(){
    if (cardNewYork.classList.contains('_active')) {
    cardNewYork.classList.remove('_active');
    selectContacts.classList.remove("_selected");
    }
});


// Карточка Йонкерс
cityYonkers.addEventListener('click', function(){
    cardYonkers.classList.add('_active');
    selectDropContacts.classList.remove('_active');
    selectContacts.classList.add("_selected");
});

dropButtonContacts.addEventListener('click', function(){
    if (cardYonkers.classList.contains('_active')) {
    cardYonkers.classList.remove('_active');
    selectContacts.classList.remove("_selected");
    }
});

// Карточка Шеррилл
citySherrill.addEventListener('click', function(){
    cardSherrill.classList.add('_active');
    selectDropContacts.classList.remove('_active');
    selectContacts.classList.add("_selected");
});

dropButtonContacts.addEventListener('click', function(){
    if (cardSherrill.classList.contains('_active')) {
    cardSherrill.classList.remove('_active');
    selectContacts.classList.remove("_selected");
    }
});



