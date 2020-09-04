console.log("!CONNECTED");
var colors=[];
var count=6;
var pickColor;
var divs=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var newColor=document.querySelector("#new");
document.querySelector("#hard").classList.add("selected");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
init(6);
var write=document.querySelector("#write");
function init(ob){
        pushColorsToArray(ob);
        assignColors(ob);
        choose(ob);
        responsive(ob);
}
function generateRandomColors(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+", "+g+", "+b+")";
        }
function pushColorsToArray(n){
        for(var i=0;i<n;i++)
        {
                colors[i]=generateRandomColors();
        }
}
function assignColors(no){
        for(var i=0;i<no;i++)
        {
                divs[i].style.backgroundColor=colors[i];
        }
}
function choose(as){
        pickColor=colors[Math.floor(Math.random()*as)];
        document.querySelector("#write").textContent=pickColor;
}
function responsive(num){
        for(var i=0;i<num;i++)
        {
        divs[i].addEventListener("click",function(){
                        if(this.style.backgroundColor===pickColor)
                        {
                                document.querySelector("#over").textContent="Correct!";                         
                                h1.style.backgroundColor=pickColor;
                                for(var k=0;k<count;k++)
                                {
                                        divs[k].style.backgroundColor=pickColor;
                                }       
                        }       
                        else    
                        {
                                document.querySelector("#over").textContent="Try Again!";                       
                                this.style.backgroundColor="#232323";
                        }       
                })      
        }       
}       
newColor.addEventListener("click",function(){
        init(count);
        h1.style.backgroundColor="steelblue";
        document.querySelector("#over").textContent="";
})
easy.addEventListener("click",function(){
        this.classList.add("selected");
        hard.classList.remove("selected");
        document.querySelector("#over").textContent="";
        h1.style.backgroundColor="steelblue";
        pushColorsToArray(3);
        assignColors(3);
        for(var i=3;i<6;i++)
        {
                divs[i].style.backgroundColor="#232323";
        }
        choose(3);
        responsive(3);
        count=3;
})
hard.addEventListener("click",function(){
        init(6);
        document.querySelector("#over").textContent="";
        h1.style.backgroundColor="steelblue";
        this.classList.add("selected");
        easy.classList.remove("selected");
        count=6;
})
