class Drop {
    constructor() {
      this.container = $('.main');
      this.content = $('.block');
      this.sensitivity = 5;
      this.activeClass = 'drag';
      this.moveClass = 'move';
      this.keyCodePress = 17;

      this.point = {
          start: {
              x: null,
              y: null,
              scrollLeft: null,
              scrollTop: null
          },
      };

      this.flag = false;
      this.flagKey = false;
      
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

    toogleClass(classToToggle){
        this.content.toggleClass(classToToggle);
    }

    
    mouseDown(e){

        this.flag = true;
        
        this.point.start.y = e.originalEvent.screenY;
        this.point.start.x = e.originalEvent.screenX;
        this.point.start.scrollTop = this.container.scrollTop();
        this.point.start.scrollLeft = this.container.scrollLeft();

        this.flagKey ? this.toogleClass(this.moveClass) : false
        
    }

    mouseUp(e){
        this.flag = false;
        this.point.endX = e.originalEvent.screenX;

        this.content.removeClass(this.moveClass)
      
    }

    mouseMove(e){
        this.flag && this.flagKey ? this.deltaMove(e) : false
    }

    addEvents(){

        this.container.on('mousedown', (event)=>{
            this.mouseDown(event);
        });
        this.container.on('mousemove', (event)=>{
            this.mouseMove(event);
        });
        $(document).on('mouseup', (event)=>{
            this.mouseUp(event);
        });

        $(document).on('keydown', (event)=>{
            if(event.keyCode === this.keyCodePress) {
                this.toogleClass(this.activeClass);
                this.flagKey = true;
            }
        });

        $(document).on('keyup', (event)=>{
            if(event.keyCode === this.keyCodePress) {
                this.toogleClass(this.activeClass);
                this.flagKey = false;
            }
        });

        
    }
    
    init(){
        this.addEvents();
    }
    
  }
  
  new Drop;