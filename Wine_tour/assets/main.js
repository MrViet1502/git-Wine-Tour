const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playBtn = $('.play-btn')
const modalVideo = $('.modal-video')
const video = $('.video-player')

playBtn.onclick = function(event){
    modalVideo.style.display = "block";
    video.style.display = "block";
    video.src = "https://player.vimeo.com/video/127347999?title=0&amp;byline=0&amp;portrait=0;autoplay=1"
    event.stopPropagation();
}
modalVideo.onclick = function(){
    modalVideo.style.display = "none";
    video.style.display = "none";
    video.src = ""
}
var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

$('.back-top-page-btn').onclick = function(){
    document.documentElement.scrollTop = 0;
}

//Function dectect element when scroll
const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };
const per76 = $('#per-76')
const per86 = $('#per-86')
const per92 = $('#per-92')
const sidebarShortcut = $('.sidebar-shortcut')
var prevPos = document.documentElement.scrollTop
const relatedLayout = $('.related-layout')
const iconInRelated = $('.icon-in-related-layout')
const viewAllRelated = $('.related-view-all')

window.onscroll= function(){
    //show button back top
    if(window.innerHeight >= $('.footer').getBoundingClientRect().top){
        $('.back-top-page-btn').style.display = "block";
        console.log('hi')
    }
    else{
        $('.back-top-page-btn').style.display = "none";
    }
    // run bar percent
    if(elementInView(per76)){
        per76.classList.add('bar-percent-76')
    }
    else{
        per76.classList.remove('bar-percent-76')
    
    }
    if(elementInView(per92)){
        per92.classList.add('bar-percent-92')
    }
    else{
        per92.classList.remove('bar-percent-92')
    
    }
    if(elementInView(per86)){
        per86.classList.add('bar-percent-86')
    }
    else{
        per86.classList.remove('bar-percent-86')
    
    }
    // resize shortcut sidebar
    var currentPos = document.documentElement.scrollTop
    if(currentPos > prevPos){
        setTimeout(function(){
            sidebarShortcut.style.right = "-85px"
            relatedLayout.style.right = "-265px"
            viewAllRelated.style.right ="-265px"
            iconInRelated.style.right = "-265px"
        },500)
    }
}

const relatedBtn = $('.related')
const closeRelatedLayout = $('.close-related-layout-icon')
relatedBtn.onclick = function(){
    relatedLayout.style.right = "0";
    viewAllRelated.style.right ="0"
    iconInRelated.style.right = "265px"
    sidebarShortcut.style.right = "-85px"
}
closeRelatedLayout.onclick = function(){
    relatedLayout.style.right = "-265px"
    viewAllRelated.style.right ="-265px"
    sidebarShortcut.style.right = "0"
    iconInRelated.style.right = "-265px"
}
const chatBtn = $('.chat-btn')
const chatLayout = $('.chat-layout')
const closeChatLayout = $('.mini-window')
const chatInput = $('.chat-input')
const chatContentLayout = $('.chat-content')
const chatContent = $('.chat-content-text')

chatBtn.onclick = () =>{
    chatLayout.classList.add('animate__animated','animate__zoomIn')
    chatLayout.style.display = "block";
}
closeChatLayout.onclick = () =>{
    chatLayout.style.display = "none";
}
function sendMessage(){
    const inputText = chatInput.value
    chatContent.innerHTML += '<p class="animate__animated animate__slideInUp">'+ inputText +"</p>"
    chatInput.value = ''
}

function viewMessage(){
    chatContentLayout.scrollTop = chatContentLayout.scrollHeight
}
chatInput.addEventListener('keypress',function(event){
    if(event.keycode == 13 || event.which==13){
        event.preventDefault();
        sendMessage();
        viewMessage();
    }
})
