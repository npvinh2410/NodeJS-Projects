const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    // Sections click active class
    allSections.addEventListener('click', (e) =>{
        // console.log(e.target);
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other btns
            secBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    // Toggle theme 
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();