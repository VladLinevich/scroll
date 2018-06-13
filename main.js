class Drop {
    constructor() {
      this.container = $('.main');
      this.block = $('#block');
      this.sensitivity = 1;

      this.point = {
          startX: null,
          startY: null,
          deltaX: null,
          deltaY: null
      };

      this.flag = false;
      
      this.init();
    }

    deltaMove(e){

        let V = this.point.startX,
            startY = this.point.startY;
        //     dX = e.originalEvent.screenX - startX,
        //     dY = e.originalEvent.screenY - startY,
        //     topPos = parseInt(this.block.css('top')),
        //     topLeft = parseInt(this.block.css('left'));

        
        //     if(dY > 0 && topPos === 0 ){
        //         return false
        //     } else if(dY < 0 && topPos > 0 ){
        //         this.block.css('top', topPos + 5)
        //     }


        //     console.log( dY,'dY')
        //     console.log(topPos, 'topPos')
        //     dY > 0 ? this.setPosition('top', topPos +  this.sensitivity)
        //             : this.setPosition('top', topPos -  this.sensitivity)

        //     dX > 0 ? this.setPosition('left', topLeft +  this.sensitivity)
        //             : this.setPosition('left', topLeft -  this.sensitivity)
        
        


    }

    
    setPosition(prop, val){
        this.block.css(prop, val)
    }

    
    mouseDown(e){
        e.preventDefault();
        this.flag = true;

        this.point.startY = e.originalEvent.screenY;
        this.point.startX = e.originalEvent.screenX;

        console.log(this.point.startX, 'DOWN')
    }

    mouseUp(e){
        this.flag = false;
        this.point.endX = e.originalEvent.screenX;
        // console.log(this.point.endX, 'UP')
    }

    mouseMove(e){
        this.flag ? this.deltaMove(e) : false
    }

    addEvents(){

        this.container.bind('mousedown', (event)=>{
            this.mouseDown(event);
        });

        this.container.bind('mouseup', (event)=>{
            this.mouseUp(event);
        });

        this.container.bind('mousemove', (event)=>{
            this.mouseMove(event);
        });
    }
    
    init(){
    this.addEvents();
    // this.container.scrollTop(335)
    // this.container.scrollLeft(50)
    // console.log(this.block.css('top', -100));
    }
    
  }
  
  new Drop;