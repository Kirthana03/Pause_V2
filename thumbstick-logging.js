AFRAME.registerComponent('thumbstick-logging',{
    init: function () {
      this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    logThumbstick: function (evt) {

     let camPos = document.querySelector('#cam');
     let pos =  camPos.getAttribute('position');
     let posZ = pos['z'];
      if (evt.detail.y > 0.95) { 
        // console.log("DOWN"); 
        while(evt.detail.y > 0.95) {
        posZ = posZ + 0.5;
        console.log(posZ);
        camPos.setAttribute('position', `${posZ}`);
        }
        }
      if (evt.detail.y < -0.95) { console.log("UP"); }
      if (evt.detail.x < -0.95) { console.log("LEFT"); }
      if (evt.detail.x > 0.95) { console.log("RIGHT"); }
    }
  });
