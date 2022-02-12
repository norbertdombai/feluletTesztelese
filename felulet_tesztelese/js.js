$(function(){
    $("#ok").on("click", nevkiir)

})
function nevkiir(){
    let nev=$("#nev").val(); //.val-al kérem le az attributumát
    let nevtomb=atalakit(nev);

    nevtomb.forEach(element => {
        $(".eredmeny").append("<p>"+element+"</p>")
        
    });
}

function atalakit(nev){
    return nev.split(" "); 
}