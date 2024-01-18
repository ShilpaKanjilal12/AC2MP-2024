let groups = document.querySelectorAll('section')
console.log(groups)
window.onscroll = () => {
    
    groups.forEach(element => {
        let top = window.scrollY
        let offset = element.offsetTop-screen.height+200;
        let height = element.offsetHeight;
        let sc_height = screen.height;
        console.log("sc_height=",sc_height, screen.width)
        // console.log("offset=",offset)
        // console.log("height=",height)
        if (top < offset+height){
            element.classList.add('show-animate');
        }
        if (top<offset){
            element.classList.remove('show-animate');
        }
    });
}