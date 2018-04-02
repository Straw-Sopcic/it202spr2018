var Projects = [
    {
        name:'FPGAAAAA',
        photoLink:'img/tabPhoto.png',
        photoAlt: 'photo description...',
        pptLink:'https://www.slideshare.net/slideshow/embed_code/key/4PKJy7K512F1ht',
        description :'just a long description describing the project',
        relatedTech:'need to add all the related tech to this...'
    },
    {
        name:'FPGAAA2222',
        photoLink:'img/tabPhoto.png',
        photoAlt: 'photo description...',
        pptLink:'https://www.slideshare.net/slideshow/embed_code/key/4PKJy7K512F1ht',
        description :'just a long description describing the project',
        relatedTech:'need to add all the related tech to this...'
    }
];



function clone(){
    var curID = 0;
    console.log('calling function now!!!');
    $.each(Projects, function(i,v){
        console.log(v.name);
        var ID = 'card' + curID;
        $( "#temp" ).clone().attr('id', 'card' + curID).appendTo( ".card-group");
        ID = '#' + ID;

        $(ID + " img").attr('src', v.photoLink);
        $(ID + " img").attr('href', v.pptLink);
        $(ID + " a").text(v.name);
        $(ID + " a").attr('href', v.pptLink);
        $(ID + " p").text(v.description);
        curID = curID + 1;
    })

}
