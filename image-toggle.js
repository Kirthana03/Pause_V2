AFRAME.registerComponent('image-toggle', {
    init: function() {
        let ArrayW = ['#C1','#C2','#C3','#C4','#C5','#C6','#C7','#C8','#C9']
        let varID = (ArrayW[(Math.floor(Math.random() * ArrayW.length))]);
        console.log(varID);
        let el = document.querySelector(varID);
        this.toggleImage = function() {
            console.log('clicked');
            let currentOpacity = parseFloat(el.getAttribute('opacity'));
            el.setAttribute('opacity', currentOpacity === 0 ? '1' : '0');
        };
        this.el.addEventListener('click', this.toggleImage);
    },
    remove: function() {
        this.el.removeEventListener('click', this.toggleImage);
    }
});