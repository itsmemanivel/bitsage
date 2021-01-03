/* 
:::::::::
feedbacks

*/
var feedbacks = [{
    name: "Mukesh Kumar",
    description : "Java developer , 2nd batch",
    title : "Start building an enterprise management software from scratch,",
    content : "I have took their course to learn how to build an ERM software using java." + 
              " They gave me good experience in working environment and learned a lot through finishing their project tasks." ,
    userProfile : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"          
},{
    name: "Hari Kumar",
    description : "Java developer , 2nd batch",
    title : "Start building an enterprise management software from scratch,",
    content : "I have took their course to learn how to build an ERM software using java." + 
              " They gave me good experience in working environment and learned a lot through finishing their project tasks.",
    userProfile : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"          
},{
    name: "Jhon",
    description : "Java developer , 2nd batch",
    title : "Start building an enterprise management software from scratch,",
    content : "I have took their course to learn how to build an ERM software using java." + 
              " They gave me good experience in working environment and learned a lot through finishing their project tasks.",
    userProfile : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"          
},{
    name: "Ram Kumar",
    description : "Java developer , 2nd batch",
    title : "Start building an enterprise management software from scratch,",
    content : "I have took their course to learn how to build an ERM software using java." + 
              " They gave me good experience in working environment and learned a lot through finishing their project tasks.",
    userProfile : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"          
}];



/*
::::::::::
main context

*/
var feedbackDeck = document.getElementById('feedback-deck');
var progressBar = document.getElementById('progress-bar');
var feedbackIndex = document.getElementById('feedback-index');
var feedbackLength = document.getElementById('feedback-length');
var dataLen = feedbacks.length;
var feedbackIdx = 1 
var progressIndex = 100/dataLen;
progressBar.value = progressIndex;
feedbackLength.innerText = dataLen;
feedbackIndex.innerText = feedbackIdx;

for( var i=0; i<dataLen; i++){
    var feedbackCard = document.createElement('div');
    feedbackCard.setAttribute('id', 'feedback-'+(i+1));
    feedbackCard.classList.add('feedback-'+(i+1));
    feedbackCard.innerHTML =    '<div class="feedback-content">' +
                                    '<p>' + feedbacks[i].title + '</p>' +  
                                    '<p>' + feedbacks[i].content + '</p>' + 
                                    '<div class="feedback-profile">' + 
                                        '<div class="feedback-profile-img"> ' + 
                                            '<img src="' + feedbacks[i].userProfile + '" width="100%">' + 
                                        '</div>' +
                                        '<div class="feedback-profile-content">' +
                                            '<p>' + feedbacks[i].name + '</p>' +
                                            '<p>' + feedbacks[i].description + '</p>' + 
                                        '</div>' +
                                    '</div>' +    
                                '</div>';
    feedbackDeck.appendChild(feedbackCard);
}

var feedbackLeft = function(){
    if( progressBar.value > progressIndex ){
        feedbackNumAnimation(--feedbackIdx);
        if(feedbackIdx >= 1 ){
            document.getElementById('feedback-'+(feedbackIdx)).classList.replace('feedback-hide','feedback-1');
            for( var i=0; i<dataLen; i++ ){
                if( (feedbackIdx+i+1) <= dataLen ){
                    document.getElementById('feedback-'+(feedbackIdx+1+i)).classList.replace('feedback-'+(i+1),'feedback-'+(i+2));
                }
            }
        }
    } 
}

var feedbackRight = function(){
    if( feedbackIdx < dataLen ){
        feedbackNumAnimation(++feedbackIdx);
        if( feedbackIdx <=  dataLen ){
            document.getElementById('feedback-'+(feedbackIdx-1)).classList.replace('feedback-1','feedback-hide');
            for( var i=0; i<dataLen; i++){
                if( feedbackIdx+i <= dataLen ){
                    document.getElementById('feedback-'+(feedbackIdx+i)).classList.replace('feedback-'+(i+2),'feedback-'+(i+1));
                }
            }
        }
    }
}


var feedbackNumAnimation = function(idx){
    var progressArr = splitNum(100, dataLen);
    var progressValue = 0;
    feedbackIndex.innerText = idx;
    for( var i=0; i<idx; i++ ){
        progressValue += progressArr[i];
    }
    progressBar.value = progressValue;
}



