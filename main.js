const tabs = document.querySelectorAll('.tab-icon');
const tabsContent = document.querySelectorAll('.tab-content');
var vid = document.getElementById('witcher-vid');

function selectTab(e) {
    hideAllContent();
    removeAllBorder();
    this.classList.add('active');
    const tabId = document.querySelector(`#${this.id}-content`);
    tabId.classList.add('show');
}

function removeAllBorder(){
    tabs.forEach(item => {item.classList.remove('active'); });
}

function hideAllContent(){
    tabsContent.forEach(item => {item.classList.remove('show'); });
}

tabs.forEach(item => {item.addEventListener('click',selectTab); });

function playVid(){
    vid.play();
}

function pauseVid(){
    vid.pause();
}