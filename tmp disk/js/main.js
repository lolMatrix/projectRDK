var id = 0;
function query(token, method, data){
    
    $.ajax({
        url: "https://api.vk.com/method/" + method + data + "&access_token=" + token,
        method: 'GET', 
        dataType: 'JSONP',
        success: function(data){
            if (id != data.response.items[0].id && data.response.items[0].text.indexOf('#rdklive') + 1 ){
                h();
                
                setTimeout(function(){
            $("#text").text(data.response.items[0].text);
            id = data.response.items[0].id;
            if(data.response.items[0].signer_id){
                for(var i = 0; i < data.response.profiles.length; i++){
                    if (data.response.profiles[i].id == data.response.items[0].signer_id){
                        $("#name").text(data.response.profiles[i].first_name + " " + data.response.profiles[i].last_name);
                        $("#img-av").attr('src', data.response.profiles[i].photo_50);
                    }
                }
            }else{
                for(var i = 0; i < data.response.groups.length; i++){
                    if ("-"+data.response.groups[i].id == data.response.items[0].from_id){
                        $("#name").text("Анонимное сообщение");
                        $("#img-av").attr('src', data.response.groups[i].photo_50);
                    }
                }
            }
                    s();
                setTimeout(h, 1000*60*5);
                    }, 1000);
        }
            else if(!(data.response.items[0].text.indexOf('#rdklive') + 1)){
                h();
                id = 0;
            }
        }
    })
}
function query1(token, method, data){
    
    $.ajax({
        url: "https://api.vk.com/method/" + method + data + "&access_token=" + token,
        method: 'GET', 
        dataType: 'JSONP',
        success: function(data){
            if (id != data.response.items[0].id && data.response.items[0].text.indexOf('#rdklive') + 1){
                h();
                setTimeout(function(){
            $("#text").text(data.response.items[0].text);
            id = data.response.items[0].id;
            if(data.response.items[0].signer_id){
                for(var i = 0; i < data.response.profiles.length; i++){
                    if (data.response.profiles[i].id == data.response.items[0].signer_id){
                        $("#name").text(data.response.profiles[i].first_name + " " + data.response.profiles[i].last_name);
                        $("#img-av").attr('src', data.response.profiles[i].photo_50);
                    }
                }
            }else{
                for(var i = 0; i < data.response.groups.length; i++){
                    if ("-"+data.response.groups[i].id == data.response.items[0].from_id){
                        $("#name").text("Анонимное сообщение");
                        $("#img-av").attr('src', data.response.groups[i].photo_50);
                    }
                }
            }
                    s();
                setTimeout(h, 1000*60*5);
                    }, 10);
        }
            else if(!(data.response.items[0].text.indexOf('#rdklive') + 1)){
                h();
                id = 0;
            }
        }
    })
}
function h(){
    $("#window").hide(1000);
}
function s(){
    $("#window").show(2000);
}
