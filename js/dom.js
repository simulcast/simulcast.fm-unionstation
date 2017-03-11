var playNext; //for playNext() function
var nextUp; //for storing song that is next up

$(document).ready(function() {
    /* hiding and showing */
    $("#prompt").hide();
    $("#song-grid").hide();
    $("#liners").hide();
    $("#record").hide();
    $("#download").hide();

    /* ~~~~~~~CONTROL FLOW~~~~~~~~ */

    /* main function that dictates what element gets played after the user selects a choice
    keeps looping if nothing is set into nextUp, plays the element on the downbeat when something
    is loaded in */

    playNext = function() {
        if (nextUp === null) {
            console.log('looping');
        }
        if (nextUp === drumfill) {
            console.log('drumfilled');
        }
        if (nextUp !== null) {
            baseLoop.stop(currBase);
            nextUp.play();
        }
    };

    /* counters to modify choices */

    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;

    $("#choice1").click(function() {
        console.log('choice 1 clicked');
        /* if counter is at 0, play verse 1 and change text after delay (so it'll be hidden) */
        if (counter1 === 0) {
            nextUp = v1;
        };
        /* if counter is at 1, play verse 2 */
        if (counter1 === 1) {
            nextUp = pc1;
        };
        /* and so on */
        if (counter1 === 2) {
            nextUp = ending;
        }
        /* then increment counter*/
        counter1++;
        $("#song-grid").fadeOut(200);
    });

    $("#choice2").click(function() {
        console.log('choice 2 clicked')
        if (counter2 === 0) {
            nextUp = v2;
        };
        if (counter2 === 1) {
            nextUp = pc2;
        };
        if (counter2 === 2) {
            nextUp = ending;
        };
        if (counter2 === 3) {
            nextUp = ending;
        };
        counter2++;
        $("#song-grid").fadeOut(200);
    });
    $("#choice3").click(function() {
        console.log('choice 3 clicked');
        if (counter3 === 0) {
            nextUp = v3;
        };
        if (counter3 === 1) {
            nextUp = pc3;
        };
        if (counter3 === 2) {
            nextUp = ending;
        };
        counter3++;
        $("#song-grid").fadeOut(200);
    });
    $("#choice4").click(function() {
        console.log('choice 4 clicked')
        if (counter4 === 0) {
            nextUp = bdown;
        };
        if (counter4 === 1) {
            nextUp = instr;
        };
        if (counter4 === 2) {
            nextUp = ending;
        };
        counter4++;
        $("#song-grid").fadeOut(200);
    });

    $(".choice").mouseenter(function() {
        $(this).addClass('active');
    });
    $(".choice").mouseleave(function() {
        $(this).removeClass('active');
    })

    /* INITIAL CLICK */
    $("#start").click(function() {
        console.log('recording');
        rec = new Recorder(masterGain, {
            workerPath: 'js/recorderjs/recorderWorker.js',
            callback: function(e){
                console.log('this line hit');
                rec.clear();

                /* downloading */
                Recorder.forceDownload(e, "Simulcast - Union Station on " + m + "-" + d + "-" + y + " at " + h + ":" + min + " " + dd + ".wav");
            }
        });
        rec.record();

        /* set up music */

        drumfill.play();
        baseLoop.fade(1.0, 0.0, 1875);
        setTimeout(function() {
            baseLoop.stop();
        }, 1875);

        /* stop the current swell if it's playing 
        play a new one (which then resets the pointer) */
        swell.play();
        swell.fade(0.0, 1.0, 1875);
        //v1.play();
        /* fade out start text + show recording label*/
        $("#start").css("display", "none");
        $("#record").show();
        $('#record').addClass("blink");
        $("#download").show();
    });

    /* DOWNLOAD CLICK */
    $("#download").click(function() {
        rec.stop();
        rec.exportWAV();
    });
});