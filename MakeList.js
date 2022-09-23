

function doFormat(textToFormat) {
    var charSeperator = ',';

    var retval = textToFormat.trim(); // this is optional
    if (retval.length == 0)
        return;

    var sentinel = '%';

    // put our own sentinel character in there to find the individual elements on each line
    retval = retval.replace(/\n/g, sentinel); 
    var els = retval.split(sentinel);

    retval = ''; //reset output
    $.each(els, function(index,value){
        value = value.trim(); // this is optional
        retval += '\'' + value + '\'';
        if(index < els.length-1)
            retval += charSeperator;
    })

    return retval;
}

