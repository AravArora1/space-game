cvs=document.getElementById("anvas")
var ctx=cvs.getContext("2d")
var ship=new Image()
var meteor=new Image()
var bullet=new Image()
var bg=new Image()
bullet.src="bullet.png"
meteor.src="meteor.png"
ship.src="spaceship (1).png"
bg.src="bg.jpg"
var Spx=300
var Spy=200
var Snp
var randomReplace
evmy=0
var gravity=10000
var evem=[]

No=0

   



addEventListener("keydown",spaceshipMove)

function spaceshipMove(key){
    
    if(key.keyCode==37){
        if (Spx!=0){
        ctx.clearRect(Spx, Spy, ship.width, ship.height);
        Spx-=5
            dre ()     }   
    }
    else if(key.keyCode==39){
        if (Spx!=cvs.width){
            ctx.clearRect(Spx, Spy, ship.width, ship.height);
            Spx-=5
                dre ()     }   
        

    }
    
        
        
    }

    evem[No]={x:10,y:evmy}
function dre(){
    
    setInterval(
        
        function(){
            var random = Math.random()
       
        if(evem[No.y==0]){
            randomReplace=random
            evmy+=1

        ctx.drawImage(meteor,evem[No].x,evem[No].y)

        ctx.clearRect(meteor,evem[No].x,evem[No].y,meteor.width,meteor.height)

        evem.push({x:Math.floor(randomReplace*cvs.width),y:evmy})


        No+=1
        console.log(Math.floor(randomReplace))
       
        
        }
        else{
            evmy+=1

        ctx.drawImage(meteor,evem[No].x,evem[No].y)

        ctx.clearRect(meteor,evem[No].x,evem[No].y,meteor.width,meteor.height)

        evem.push({x:Math.floor(randomReplace*cvs.width),y:evmy})


        No+=1
        console.log(Math.floor(randomReplace))
        }
            
             
            
        ctx.drawImage(ship,Spx,400)
        
        },20)
        
           
        
        
    requestAnimationFrame(dre) 
    // ctx.drawImage(bg,0,0)
}
dre()









