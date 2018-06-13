class Drop {
    constructor() {
      this.container = $('.main');
      this.content = $('block');
      this.sensitivity = 5;

      this.point = {
          start: {
              x: null,
              y: null,
              scrollLeft: null,
              scrollTop: null
          },
      };

      this.flag = false;
      
      this.init();
    }

    deltaMove(e){

        let dX = e.originalEvent.screenX - this.point.start.x,
            dY = e.originalEvent.screenY - this.point.start.y,
            moveTop = this.point.start.scrollTop - dY,
            moveLeft = this.point.start.scrollLeft - dX;
            
            this.container.scrollTop(moveTop)
            this.container.scrollLeft(moveLeft)
    
    }

    

    
    mouseDown(e){
        this.flag = true;

        this.point.start.y = e.originalEvent.screenY;
        this.point.start.x = e.originalEvent.screenX;
        this.point.start.scrollTop = this.container.scrollTop();
        this.point.start.scrollLeft = this.container.scrollLeft();

        console.log(this.point.start.x, 'DOWN')
    }

    mouseUp(e){
        this.flag = false;
        this.point.endX = e.originalEvent.screenX;
        console.log(this.point.endX, 'UP')
    }

    mouseMove(e){
        this.flag ? this.deltaMove(e) : false
    }

    addEvents(){

        this.container.bind('mousedown', (event)=>{
            this.mouseDown(event);
        });
        this.container.bind('mousemove', (event)=>{
            this.mouseMove(event);
        });
        $(document).bind('mouseup', (event)=>{
            this.mouseUp(event);
        });

        
    }
    
    init(){
        this.addEvents();
    }
    
  }
  
  new Drop;