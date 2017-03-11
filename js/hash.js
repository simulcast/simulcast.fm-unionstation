var checkHash;

$(document).ready(function() {
    /* hash changes */
    /* this calls a function based on hash name every time hash changes */

    window.onhashchange = function() {
        checkHash();
    };

    checkHash = function() {
        var hash = document.location.hash;
        func = hash.replace('#', '');
        drumfill.play();
        eval(func + '()');
    }

    function intro() {
        /* start recording */
        console.log(masterGain);
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
        //drumfill.play();
        baseLoop.fade(1.0, 0.0, 1875);
        setTimeout(function() {
            baseLoop.stop();
        }, 1875);

        /* stop the current swell if it's playing 
        play a new one (which then resets the pointer) */

        swell.stop(currID);
        swell.play();
        swell.fade(0.0, 1.0, 1875);

        /* fade out record text */
        $("#record").css("display", "none");
    };

    function build1() {
        console.log("turn around clicked")

        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            };
            b1.play();
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); // hide prompt
    }

    function verse1() {
        console.log("turn around clicked")

        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            };
            v1.play();
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); // hide prompt
    };

    function verse2() {
        console.log("hail taxi clicked");
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            }
            v2.play();
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function verse3() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            v3.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function prechorus1() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            pc1.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function prechorus2() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            pc2.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function prechorus3() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            pc3.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function break1() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            b1.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function riff1() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            r1.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function riff2() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            r2.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function instrumental() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            }; // stop all other sounds
            instr.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function breakdown() {
        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            } // stop all other sounds
            bdown.play(); //play our sound
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); //hide prompt
    };

    function end() {
        console.log("turn around clicked")

        baseLoop.on("end", function() {
            for (i = 0; i < unionSounds.length; i++) {
                unionSounds[i].stop();
            };
            ending.play();
            setTimeout(function() {
                baseLoop.off("end"); //remove listener after slight delay
            }, 2000);
        }, currBase); //only applies to current ID
        $(".decision").hide(); // hide prompt
    }

});