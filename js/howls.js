var baseLoop;
var unionStation;
var drumfill;
var swell;
var intro;
var b1;
var r1;
var r2;
var v1;
var v2;
var v3;
var pc1;
var pc2;
var pc3;
var instr;
var bdown;
var bfinal;
var ending;
var unionSounds;
var currBase;
var currID; // for keeping track of sound that's playing

$(document).ready(function() {

    /* load count and target for loading banner */
    var loadcount = 0;
    var loadtarget = 17;
    var checkLoad = function(count) {
        if (count === loadtarget) {
            $("#loadtext").hide();
            $("#prompt").show();
        }
    };

    /* howler */
    /* each section set up as Howl containing its own lyric and css automation */
    /* some control flow set up here, but only for things that automatically follow each other */

    /* beginning */
    baseLoop = new Howl({
        src: ['stems/loop1.mp3', 'stems/loop1.wav'],
        preload: true,
        autoplay: true,
        loop: true,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function(getSoundId) {
            console.log('base loop playing ' + getSoundId);
            currBase = getSoundId;
            nextUp = null;
        },
        onend: function() {
            playNext();
        }
    });

    drumfill = new Howl({
        src: ['stems/drumfill.mp3', 'stems/drumfill.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('drumfill playing');
        },
        onend: function() {
            console.log('drumfill finished');
        }
    });

    /* instrumental sections + builds */
    swell = new Howl({
        src: ['stems/swell.mp3', 'stems/swell.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function(getSoundId) {
            currID = getSoundId;

            console.log('swell playing ' + getSoundId);
            $("body").addClass("animate-swell");
        },
        onend: function() {
            /* automatically play intro after swell */
            intro.play();
            $("body").removeClass("animate-swell");
            $("#prompt").hide();
            console.log('swell finished');
        }
    });

    intro = new Howl({
        src: ['stems/intro.mp3', 'stems/intro.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('intro playing');
            $("body").addClass("animate-intro");
            $("#lyric").html("your train gets in late");
            setTimeout(function() {
                $("#lyric").html("your train gets in late<br>the concourse clock reads " + h + ":" + min);
                setTimeout(function() {
                    $("#lyric").html("you look to your left");
                    setTimeout(function() {
                        $("#lyric").html("you look to your left<br>you look to your right");
                        setTimeout(function() {
                            $("#lyric").html("but there's nobody around");
                            setTimeout(function() {
                                $("#lyric").html("")
                            }, 3750);
                        }, 3750);
                    }, 3750);
                }, 3750);
            }, 3750);
        },
        onend: function() {
            console.log('intro finished');
            baseLoop.play();
            $("body").removeClass("animate-intro");
            $("#song-grid").fadeIn();
        }
    });

    b1 = new Howl({
        src: ['stems/build1.mp3', 'stems/build1.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('build 1 playing');
            $("#lyric").html("");
        },
        onend: function() {
            r1.play();
            console.log('build 1 finished');
        }
    });

    r1 = new Howl({
        src: ['stems/riff1.mp3', 'stems/riff1.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('riff 1 playing');
        },
        onend: function() {
            console.log('riff 1 finished');
            v2.play();
        }
    });

    r2 = new Howl({
        src: ['stems/riff2.mp3', 'stems/riff2.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            $("body").addClass("animate-intro");
            console.log('riff 2 playing');
        },
        onend: function() {
            console.log('riff 2 finished');
            $("body").removeClass("animate-intro");
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    });

    instr = new Howl({
        src: ['stems/instrumental-section.mp3', 'stems/instrumental-section.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            $("body").addClass("animate-intro");
            console.log('instrumental section playing');
        },
        onend: function() {
            console.log('instrumental section finished finished');
            $("body").removeClass("animate-intro");
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    })


    /* verses */
    v1 = new Howl({
        src: ['stems/verse1.mp3', 'stems/verse1.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('verse 1 playing');
            //change text to appropriate lyrics when played
            /*lyrics nested w/in each other using timeouts! */
            $("body").addClass("animate-verse");
            $("#lyric").html("if i had another chance");
            setTimeout(function(){ 
                $("#lyric").html("i'd follow along a different line");
                setTimeout(function(){ 
                    $("#lyric").html("change trains at the terminus");
                    setTimeout(function(){ 
                        $("#lyric").html("just to get back to you<br>just to get back to you");
                    }, 2800); //delay for "just to get back to you"
                }, 5625); //delay for "change trains"
            }, 1875); //delay for "different line"
        },
        onend: function() {
            console.log('verse 1 finished');
            $("body").removeClass("animate-verse");
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    });

    v2 = new Howl({
        src: ['stems/verse2.mp3', 'stems/verse2.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('verse 2 playing');
            //change text to appropriate lyrics when played
            /*lyrics nested w/in each other using timeouts! */
            $("body").addClass("animate-verse");
            $("#lyric").html("i missed your exit");
            setTimeout(function(){ 
                $("#lyric").html("so i got off the train<br>at hollywood and vine");
                setTimeout(function(){ 
                    $("#lyric").html("change ways on the platform");
                    setTimeout(function(){ 
                        $("#lyric").html("just to get back to you<br>just to get back to you");
                    }, 2800); //delay for "just to get back to you"
                }, 6563); //delay for "change ways"
            }, 939); //delay for "missed exit"
        },
        onend: function() {
            console.log('verse 2 finished');
            $("body").removeClass("animate-verse");
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    });

    v3 = new Howl({
        src: ['stems/verse3.mp3', 'stems/verse3.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('verse 3 playing');
            /* css reset */
            $("body").addClass("animate-verse");
            /*lyrics nested w/in each other using timeouts! */
            $("#lyric").html("from above i see the freeway");
            setTimeout(function(){ 
                $("#lyric").html("and it prints a perfect loop");
                setTimeout(function(){ 
                    $("#lyric").html("driving around, the music loud");
                    setTimeout(function(){ 
                        $("#lyric").html("just to get back to you<br>just to get back to you");
                    }, 2800); //delay for "just to get back to you"
                }, 5625); //delay for "prints a perfect loop"
            }, 1875); //delay for "from above i see"
        },
        onend: function() {
            console.log('verse 3 finished');
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    });

    /* prechoruses */

    pc1 = new Howl({
        src: ['stems/prechorus1.mp3', 'stems/prechorus1.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('prechorus 1 playing');
            $("body").addClass("animate-prechorus");
            //change text to appropriate lyrics when played
            /*lyrics nested w/in each other using timeouts! */
            $("#lyric").html("but instead i find myself in");
            setTimeout(function(){ 
                $("#lyric").html("quite the predicament");
                setTimeout(function() {
                    $("#lyric").html("i'm stuck in union station");
                    setTimeout(function() {
                        $("#lyric").html("i've lost the elevation")
                    }, 3750) // delay for "lost the elevation"
                }, 3750) // delay for "stuck in union station"
            }, 3750); //delay for "predicament"
        },
        onend: function() {
            console.log('prechorus 1 finished');
            $("body").removeClass("animate-prechorus");
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    });

    pc2 = new Howl({
        src: ['stems/prechorus2.mp3', 'stems/prechorus2.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('prechorus 2 playing');
            $("body").addClass("animate-prechorus");
            /*lyrics nested w/in each other using timeouts! */
            $("#lyric").html("in another figment of my");
            setTimeout(function(){ 
                $("#lyric").html("imagination");
                setTimeout(function() {
                    $("#lyric").html("time turned atop its head");
                    setTimeout(function() {
                        $("#lyric").html("alive instead of dead")
                    }, 3750) // delay for "alive instead of dead"
                }, 3750) // delay for "time turned atop its head"
            }, 3750); //delay for "imagination"
        },
        onend: function() {;
            console.log('prechorus 2 finished');
            $("body").removeClass("animate-prechorus");
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    });

    pc3 = new Howl({
        src: ['stems/prechorus3.mp3', 'stems/prechorus3.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('prechorus 3 playing');
            $("body").addClass("animate-prechorus");
            /*lyrics nested w/in each other using timeouts! */
            $("#lyric").html("at every exit i fix my");
            setTimeout(function(){ 
                $("#lyric").html("eyes straight ahead");
                setTimeout(function() {
                    $("#lyric").html("if only i looked back");
                    setTimeout(function() {
                        $("#lyric").html("we'd still be right on track")
                    }, 3750) // delay for "alive instead of dead"
                }, 3750) // delay for "time turned atop its head"
            }, 3750); //delay for "imagination"
        },
        onend: function() {;
            console.log('prechorus 3 finished');
            $("body").removeClass("animate-prechorus");
            $("#lyric").html("");
            baseLoop.play();
            $("#song-grid").fadeIn();
        }
    });

    /* breaks */

    bdown = new Howl({
        src: ['stems/break.mp3', 'stems/break.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            console.log('break playing');
            $("body").addClass("animate-breakdown");
            $("#lyric").html("and i wonder sometimes");
            setTimeout(function() {
                $("#lyric").html("if i sleep will i rise");
                setTimeout(function() {
                    $("#lyric").html("and inhabit another");
                    setTimeout(function() {
                        $("#lyric").html("soul lost in transmission");
                        setTimeout(function() {
                            $("#lyric").html("searching another night");
                            setTimeout(function() {
                                $("#lyric").html("but the stars are just too bright")
                                setTimeout(function() {
                                    $("#lyric").html("too bright");
                                }, 5625);
                            }, 4687);
                        }, 4688)
                    }, 5625);
                }, 4687);
            }, 4688);
        },
        onend: function() {
            console.log('break finished');
            r2.play();
            $("#lyric").html("");
            $("body").removeClass("animate-breakdown");
        }
    });

    bfinal = new Howl({
        src: ['stems/break-final.mp3', 'stems/break-final.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            $("#lyric").html("Simulcast logo and logotype by <a href='http://davidanthonyking.com' target='blank'>David Anthony King</a>");
            setTimeout(function() {
                $("#lyric").html("music and web design by <a href='http://simulcast.fm' target='_blank'>Simulcast</a>");
            }, 3750)
            console.log('final break playing');
            $("body").addClass("animate-breakdown");
        },
        onend: function() {
            console.log('final break finished');
        }
    });

    /* end */

    ending = new Howl({
        src: ['stems/build-to-end.mp3', 'stems/build-to-end.wav'],
        autoplay: false,
        loop: false,
        volume: 1.0,
        onload: function() {
            loadcount++;
            console.log('loadcount is ' + loadcount);
            checkLoad(loadcount);
        },
        onplay: function() {
            $("body").addClass('animate-end');
            console.log('end section');
            $("#lyric").html("");
            setTimeout(function(){ 
                $("#lyric").html("i'm still waiting");
                setTimeout(function() {
                    $("#lyric").html("for a reversal");
                    setTimeout(function() {
                        $("#lyric").html("of time and space");
                        setTimeout(function(){ 
                            $("#lyric").html("and every morning");
                            setTimeout(function() {
                                $("#lyric").html("i keep on hoping");
                                setTimeout(function() {
                                    $("#lyric").html("for a different place")
                                    setTimeout(function() {
                                        $("#lyric").html("i'm here");
                                        setTimeout(function() {
                                            $("#lyric").html("you're there");
                                            setTimeout(function() {
                                                $("#lyric").html("i'm here");
                                                setTimeout(function() {
                                                    $("#lyric").html("i'm waiting");
                                                }, 9375) // delay for "i'm waiting"
                                            }, 5625) // delay for "i'm here"
                                        }, 9375) // delay for "you're there"
                                    }, 5625) // delay for "i'm here"
                                }, 3750) // delay for "for a different place"
                            }, 5625) // delay for "keep on hoping"
                        }, 5625); //delay for "every morning"
                    }, 3750) // delay for "time and space"
                }, 7500) // delay for "reversal"
            }, 5625); //delay for "still waiting"
        },
        onend: function() {
            console.log('end section finished');
            $("body").removeClass('animate-end');
            bfinal.play();
        }
    });

    unionSounds = [baseLoop, swell,
        intro, b1, r1, r2, v1, v2, v3, pc1, pc2, pc3,
        bdown, bfinal, ending, instr];
});