var arr=[];
getNumbers(arr);
show(arr);
function getNumbers(arrName){
    var i=0;
    while(i<12){
        var random = Math.floor((Math.random()*6)+1);
        var checked = chk(random);
        if(checked == 0 || checked == 1){
            arrName[i] = random;
            i++;
        }
    }
}

function show(arrayName){
    var j=0;
    while(j<12){
        console.log(arrayName[j]);
        j++;
    }
}


function chk(data){
    var k=0;
    var getit = 0;
    while(k<arr.length){
        if(data == arr[k]){
            getit++;
        }
        k++;
    }
    return getit;
}

useAppend("#div1",0,4);
useAppend("#div2",4,8);
useAppend("#div3",8,12); 
function useAppend(id,ini,fin){
    var i = ini;
    while(i<fin){ 
        var message = '<div class="flip-card"><div class="flip-card-inner" onclick="openMe(this)"><div class="flip-card-front"><img src="image/bgg.jpg" class="imgg"alt="Avatar"></div><div class="flip-card-back"><img src="image/'+arr[i]+'.jpg" class="imgg"alt="Avatar"></div></div></div>'
        $(id).append(message);
        i++;
    }
}

var open1=0,open2=0;
    var img1,img2;

function openMe(elem){  
    if(open1==0 && open2==0){
        open1=1;
        $(elem).css('transform','rotateY(180deg)');
        img1 =$(elem).find("img").eq(1).attr('src');
        $(elem).attr('id','open1');
    }
    else{
        $(elem).css('transform','rotateY(180deg)');
        img2 = $(elem).find("img").eq(1).attr('src');
        $(elem).attr('id','open2');
        $('.flip-card-inner').css('pointer-events','none');
        setTimeout(function(){
            action(img1,img2);
            open1=0;
            open2=0;
            img1=0;
            img2=0;
        },500);
    }
}

var count=0;
resetBtn();
function action(img1,img2){
    if(img1==img2){
        $('#open1').css('display','none');
        $('#open2').css('display','none');
        remAttr();
        $('.flip-card-inner').css('pointer-events','auto');
        count++;
        resetBtn();
        console.log('count = '+count);
    }
    else{ 
        console.log("Not Match");
        $('#open1').css('transform','rotateY(0deg)');
        $('#open2').css('transform','rotateY(0deg)');
        $('.flip-card-inner').css('pointer-events','auto');
        remAttr();
    }

}
function remAttr(){
    $('#open1').removeAttr('id');
    $('#open2').removeAttr('id');
}
function resetBtn(){
    if(count==6){
        $('#reset').css('display','flex');
    }
    if(count<6){
        $('#reset').css('display','none');
    }
}
$('#reset').click(function(){
    count=0;
    resetBtn();
    location.reload();

});