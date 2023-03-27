var models = [
    {
        name : 'Fluence',
        image : 'img/fluence.JPG',
        link : 'https://www.sahibinden.com/vasita?query_text_mf=fluence&query_text=fluence'
    },
    {
        name : 'Audi a4',
        image : 'img/audi a4.jpg',
        link : 'https://www.sahibinden.com/vasita?query_text_mf=audi+a4&query_text=audi+a4'
    },
    {
        name : 'Honda',
        image : 'img/honda civic.jpg',
        link : 'https://www.sahibinden.com/vasita?query_text_mf=honda+civic&query_text=honda+civic'
    },
    {
        name : 'Range Rover',
        image : 'img/range rover.jpg',
        link : 'https://www.sahibinden.com/vasita?query_text_mf=range+rover&query_text=range+rover'
    },
    {
        name : 'Vosvos',
        image : 'img/vosvos.jpg',
        link : 'https://www.sahibinden.com/klasik-araclar-klasik-otomobiller-volkswagen'
    }
]
var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '2000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
    
})
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave", function () {
        init(settings);
    })
})


function init(settings){
    var prev;

    interval = setInterval(function(){
        if(settings.random){
            //random index
            do{
                index = Math.floor(Math.random() * slaytCount)
            }while(index == prev)
            prev = index;
        }
        else{
            //artan
            if (slaytCount == index+1)
            {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        
        showSlide(index);
    },settings.duration)
}


function showSlide(i) {
    index = i;
    if (i < 0){
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link)
    
}