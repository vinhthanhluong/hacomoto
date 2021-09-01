export default function TabModule() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$('.tab-title');
    const panes = $$('.tab-content-box');
    
    if (tabs) {
        const tabActive = $('.tab-title.active');
       
        tabs.forEach((tab, index) => {
            const pane = panes[index];
            tab.onclick = function () {
                $('.tab-title.active').classList.remove('active');
                $('.tab-content-box.active').classList.remove('active');

                this.classList.add('active');
                pane.classList.add('active');
            }
        })
    }

    const tabsNew = $$('.tab-t-new');
    const panesNew = $$('.tab-c-new');
    
    if (tabsNew) {
        const tabActive = $('.tab-t-new.active');
       
        tabsNew.forEach((tab, index) => {
            const panew = panesNew[index];
            tab.onclick = function () {
                $('.tab-t-new.active').classList.remove('active');
                $('.tab-c-new.active').classList.remove('active');

                this.classList.add('active');
                panew.classList.add('active');
            }
        })
    }

 
      
   
}