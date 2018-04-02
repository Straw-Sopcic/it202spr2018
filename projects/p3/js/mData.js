var Projects = [
    {
        name:'FPGA video game',
        photoLink:'img/AlterCycloneiv.jpg',
        photoAlt: 'cyclone chip',
        pptLink:'https://www.slideshare.net/slideshow/embed_code/key/AwDAaM50bq5FVY',
        description :'We created a controllable animation utilizing the speed and storage space of Altera\'s DE2-115 SRAM.',
        relatedTech:'FPGA, System Verilog, Embedded Systems'
    },
    {
        name:'Tab Reader Music Generator',
        photoLink:'img/tabPhoto.png',
        photoAlt: 'guitar tabs',
        pptLink:'https://www.slideshare.net/slideshow/embed_code/key/4PKJy7K512F1ht',
        description :'Created an app with a partner that converted text guitar tabs to music using an algorithm that generates guitar music from scratch.',
        relatedTech:'Android Development, C++, DSP'
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
