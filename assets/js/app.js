document.addEventListener('DOMContentLoaded', () => {
    //!CREATE FRAGMENT
    const fragmentCards = document.createDocumentFragment();
    const fragmentContact = document.createDocumentFragment();
    //! *******************************************************************/

    //!CONSTANSTS
    //*MODALS
    const modalContactForm = document.querySelector('#contact_form_modal');

    //*PAGE GENERALS
    const body = document.querySelector('body');
    const pageContent = document.querySelector('#page_content_id');
    const btnUp = document.querySelector('#btn_up_id');
    const btnLogo = document.querySelector('.btn_logo_container');
    //* *******************************************************************//
    //*CLOSE MENUS
    const btnCloseMenuPageContent = document.querySelector('#close_menu_page_content');
    const btnCloseMenuSocial = document.querySelector('#close_menu_social');
    //* *******************************************************************//
    //!EXTRA BTNS
    //?NAV BTN THEAME
    const btnTheame = document.querySelector('#btn_theame');
    const btnTheameIcon = document.querySelector('#btn_theame_icon');
    const btnSocial = document.querySelector('#btn_social');
    //*EXTRA MENU CONTAINER
    const menuContainerSocial = document.querySelector('#menu_social');
    const btnContactMenuSocial = document.querySelector('#btn_contact');
    const btnsMenuSocial = document.querySelectorAll('.btn_social');

    //!NAV
    const nav = document.querySelector('.nav');
    //*NAB MENU CONTAINER
    const menuContainerPageContent = document.querySelector('#menu_page_content');

    //?NAV MENU BTN
    const btnNavMenu = document.querySelector('.btn_menu_container');
    //?MENU ITEM BTN
    const btnMenuPageContent = document.querySelectorAll('.btn_item_menu');
    //* *******************************************************************//
    //!CARDS SECTION
    //*CARDS CONTAINER
    const cardsContainer = document.querySelector('#cards_container_id');
    //*CARD
    //?TEMPLATE
    const cardTemplate = document.querySelector('#card_template').content;
    //!CONTACT FORM
    //*PAGE CONTACT FORM
    const contactFormPageContainer = document.querySelector('#form_page_container');
    //*MODAL CONTACT FORM
    const contactFormModalContainer = document.querySelector('#form_modal_container');
    const btnCloseModalContactForm = document.querySelector('#close_modal_contact');
    //!TEMPLATES
    //*TEMPLATE CONTACT FORM
    const contactTemplate = document.querySelector('#contact_form_template').content;
    //*TEMPLATE BTN CLOSE
    const closeBtnTemplate = document.querySelector('#close_btn_template').content;
    //! *******************************************************************//
    //*JSON
    const creacionesHermedDB = 'assets/js/creacionesHermedDB.json';
    //! *******************************************************************/
    //!VARIABLES
    let menuContainerStatus = 'close';
    //! ******************************************************************//

    //! ******************************************************************//
    //!FETCH JSON
    const fetchApi = async () => {
        try {
            const res = await fetch(creacionesHermedDB);
            const data = await res.json();
            //*console.log(data);
            let fetchData = data.data;
            //*console.log(fetchData);
            createChanchoCards(fetchData);
        } catch (error) {
            console.log('Error de transferencia de data');
        }
    };
    fetchApi();
    //! *******************************************************************/
    //!FUNCTIONS
    //* CHECK TIME
    //TODO THIS FUNCTION MUST CHANGE THE THEAME BY THE HOUR
    const checkTime = () => {
        //*console.log('change by time');
        if (body.className === 'light_theame') {
            btnTheameIcon.setAttribute('class', 'ri-moon-fill');
        } else if (body.className === 'dark_theame') {
            btnTheameIcon.setAttribute('class', 'ri-sun-fill');
        }
    };
    checkTime();
    //* *******************************************************************//
    //* CHECK FOR WIDTH SCREEN *//
    //?THIS FUNTION CHANGE THE MENU IN CASE OF PAGE RISIZE
    const checkWidth = () => {
        //*console.log(window.innerWidth);
        if (window.innerWidth >= 960) {
            //console.log('change width');
            menuContainerPageContent.style.transform = 'translateX(0)';
            menuContainerStatus = 'close';
        } else if (window.innerWidth < 960 && menuContainerStatus === 'close') {
            menuContainerPageContent.style.transform = 'translateX(100%)';
        }
    };
    //* ********************************************************************//

    //!CHANGE THEAME
    //?THIS FUNCTION CHANGE THE THEAME BY THE BUTTON
    const changeTheame = () => {
        //*console.log('changing theame');
        let bodyStyle = body.className;
        console.log(bodyStyle);

        if (bodyStyle === 'light_theame') {
            btnTheameIcon.setAttribute('class', 'ri-sun-fill');
            body.classList = 'dark_theame';
        } else if (bodyStyle === 'dark_theame') {
            btnTheameIcon.setAttribute('class', 'ri-moon-fill');
            body.classList = 'light_theame';
        }
    };
    //! ********************************************************************//
    //!OPEN MENU
    const openNavMenu = () => {
        if (menuContainerStatus === 'close') {
            menuContainerPageContent.style.transform = 'translateX(0)';
            menuContainerStatus = 'open';
        } else if (menuContainerStatus === 'open') {
            menuContainerPageContent.style.transform = 'translateX(100%)';
            menuContainerStatus = 'close';
        }
    };
    //! *******************************************************************//
    //!PAGE CONTENT BUTTONS
    //?THIS FUNCTION CLUSE THE MANU EVERY TIME THE BTN ITS CLICK
    btnMenuPageContent.forEach((btnContent) => {
        btnContent.addEventListener('click', () => {
            if (window.innerWidth <= 960) {
                //*console.log('Clicking menu btn');
                menuContainerPageContent.style.transform = 'translateX(100%)';
                menuContainerStatus = 'close';
            } else {
                return;
            }
        });
    });
    //! *******************************************************************//
    //!OPEN SOCIAL MENU
    const openSocialMenu = () => {
        console.log('Open social menu');
        menuContainerSocial.style.transform = 'translate(0,-50%)';
    };
    //! ********************************************************************//
    //!OPEN MODAL CONTACT FORM
    const openModalContactForm = () => {
        console.log('Open Contact Form modal');
        modalContactForm.style.display = 'flex';
        modalContactForm.animate([{ opacity: '0' }, { opacity: '1' }], { duration: 500, fill: 'forwards' });
    };
    //! ********************************************************************//

    //!CLOSE PAGE CONTENT MENU
    const closeMenuPageContent = () => {
        console.log('Closing menu');

        menuContainerPageContent.style.transform = 'translateX(100%)';
        menuContainerStatus = 'close';
    };
    //! ********************************************************************//
    //!CLOSE SOCIAL MENU
    const closeMenuSocial = () => {
        console.log('Closing menu');
        menuContainerSocial.style.transform = 'translate(-100%,-50%)';
    };
    //! ********************************************************************//
    //!CLOSE MENU BY MENU BTN CLICK
    btnsMenuSocial.forEach((btn) => {
        btn.addEventListener('click', closeMenuSocial);
    });
    //! ********************************************************************//
    //!CLOSE MODAL
    /*  const closeModalContactForm = () => {
        console.log('Modal Contact Form its closing');
        modalContactForm.animate([{ opacity: '1' }, { opacity: '0' }], { duration: 500, fill: 'forwards' });
        setTimeout(() => {
            modalContactForm.style.display = 'none';
        }, 700); 
    };*/
    //* ********************************************************************//

    //! ******************************************************************//

    //*CREATE CHANCHO CARDS
    const createChanchoCards = (data) => {
        let cardsData = data;
        //*console.log(cardsData);
        cardsData.forEach((chancho) => {
            //*console.log(chancho);
            let templateClon = cardTemplate.cloneNode(true);
            let newTemplate = templateClon;
            //*console.log(newTemplate);
            const chanchoImg = newTemplate.querySelector('#pig_img');
            const chanchoName = newTemplate.querySelector('#pig_name');
            const chanchoInfo = newTemplate.querySelector('#pig_info');
            const chanchoPrice = newTemplate.querySelector('#pig_price');
            //*console.log(chanchoImg);

            chanchoImg.setAttribute('src', chancho.imagen);
            chanchoName.textContent = chancho.nombre;
            chanchoInfo.textContent = chancho.info;
            chanchoPrice.textContent = chancho.precio;
            fragmentCards.appendChild(newTemplate);
        });
        cardsContainer.appendChild(fragmentCards);
    };
    //* *******************************************************************//
    //*CREATE CONTACT FORM PAGE

    const createContactFormPage = () => {
        let clonFormTemplate = contactTemplate.cloneNode(true);
        let newContactFormPage = clonFormTemplate;
        contactFormPageContainer.appendChild(newContactFormPage);
    };
    createContactFormPage();
    //* *******************************************************************//
    //* CREATE CONTACT FORM MODAL
    const createContactFormModal = () => {
        //!GENERAL VARIABLES
        //*RAW DATA CLONE
        let cloneFormTemplate = contactTemplate.cloneNode(true);
        let cloneCloseBtnTemplate = closeBtnTemplate.cloneNode(true);
        //*CLONING THE DATA
        let newContactFormModal = cloneFormTemplate;
        let newCloseBtnModal = cloneCloseBtnTemplate;
        //*TAG CLOSE BTN
        let closeBtn = newCloseBtnModal.querySelector('.close_container');
        closeBtn.setAttribute('id', 'close_modal_contact');
        //*console.log(closeBtn.id);
        //*CLOSE BTN POSITION
        closeBtn.style.top = '10%';
        closeBtn.style.right = '15%';
        //*console.log(closeBtn);
        //*INTEGRATE CLONE CLOSE BTN IN CLONE CONTACT FORM
        newContactFormModal.appendChild(newCloseBtnModal);
        //*console.log(newContactFormModal);
        //*INTEGRATING CONTACT FORM IN MODAL CONTACT CONTAINER
        contactFormModalContainer.appendChild(newContactFormModal);
        const closeModalContact = () => {
            console.log('Closing modal contact');
            modalContactForm.animate([{ opacity: '1' }, { opacity: '0' }], { duration: 500, fill: 'forwards' });
            setTimeout(() => {
                modalContactForm.style.display = 'none';
            }, 700);
        };
        //*ADDEVENTLISTENER FROM CLOSE MODAL BNT
        closeBtn.addEventListener('click', closeModalContact);
    };
    createContactFormModal();
    //* *******************************************************************//

    //! *******************************************************************//
    //!EVENTLISTENERS

    window.addEventListener('resize', checkWidth);
    btnSocial.addEventListener('click', openSocialMenu);
    btnNavMenu.addEventListener('click', openNavMenu);
    btnTheame.addEventListener('click', changeTheame);
    btnContactMenuSocial.addEventListener('click', openModalContactForm);
    btnCloseMenuSocial.addEventListener('click', closeMenuSocial);
    btnCloseMenuPageContent.addEventListener('click', closeMenuPageContent);
    //todobtnCloseModalContactForm.addEventListener('click', closeModalContactForm);
    //! *******************************************************************//
});
