$(function() {
    console.log( "ready!" );

    $("#playbutton").click(function(e){
    		$("#scoreboard").hide('slow');
    		$("#playing").show('slow');
    		$( "#wordstyped").click();

    });
       $("#showscore").click(function(e){
       	$("#playing").hide('slow');
    		$("#scoreboard").show('slow');
    		
    		

    });
    
var $sourcewords = 
'the name of very to through and just form in much is great it think you say ' +
'that help he low was line for before on turn are cause with same as mean ' +
'differ his move they right be boy at old one too have does this tell from ' +
'sentence or set had three by want hot air but well some also what play there ' +
'small we end can put out home other read were hand all port your large when ' +
'spell up add use even word land how here said must an big each high she such ' +
'which follow do act their why time ask if men will change way went about light ' +
'many kind then off them need would house write picture like try so us these ' +
'again her animal long point make mother thing world see near him build two self ' +
'has earth look father more head day stand could own go page come should did ' +
'country my found sound answer no school most grow number study who still over ' +
'learn know plant water cover than food call sun first four people thought may ' +
'let down keep side eye been never now last find door any between new city work ' +
'tree part cross take since get hard place start made might live story where saw ' +
'after far back sea little draw only left round late man run year don\'t came ' +
'while show press every close good night me real give life our few under stop ' +
'open ten seem simple together several next vowel white toward children war ' +
'begin lay got against walk pattern example slow ease center paper love often ' +
'person always money music serve those appear both road mark map book science ' +
'letter rule until govern mile pull river cold car notice feet voice care fall ' +
'second power group town carry fine took certain rain fly eat unit room lead ' +
'friend cry began dark idea machine fish note mountain wait north plan once ' +
'figure base star hear box horse noun cut field sure rest watch correct color ' +
'able face pound wood done main beauty enough drive plain stood girl contain ' +
'usual front young teach ready week above final ever gave red green list oh ' +
'though quick feel develop talk sleep bird warm soon free body minute dog strong ' +
'family special direct mind pose behind leave clear song tail measure produce ' +
'state fact product street black inch short lot numeral nothing class course ' +
'wind stay question wheel happen full complete force ship blue area object half ' +
'decide rock surface order deep fire moon south island problem foot piece yet ' +
'told busy knew test pass record farm boat top common whole gold king possible ' +
'size plane heard age best dry hour wonder better laugh true thousand during ago ' +
'hundred ran am check remember game step shape early yes hold hot west miss ' +
'ground brought interest heat reach snow fast bed five bring sing sit listen ' +
'perhaps six fill table east travel weight less language morning among speed ' +
'typing mineral seven eight nine everything something standard distant paint'
;


$sourcewords = $sourcewords.split(' ');

console.log($sourcewords);

var $words = new Array();



for (var $i = 1; $i < 150; $i++)
    $words.push($sourcewords[
        Math.floor(Math.random() * $sourcewords.length)
    ]);

console.log($words)

function i($s) {
    // String interpolation. Just eval the result.
    var $r = "'"
    + $s.replace(/'/g, "\\'").replace(
        /(\$[.\w]+\[\$[.\w]+\]|(\$[.\w]+))/g, "'+$1+'"
        // Default is non-greedy, so "?" won't work.
    ).replace(
        /\$\.(\w)/g, 'this.$1'
        // Perl 6-ish $.foo for object attributes
    ).replace(
        /<\/\./g, "</"
        // Can't have "</" followed by a letter in <script>, so I use "</.foo".
    ) + "'";
    //alert($r);
    return $r;
}

function time() {
    return (new Date()).valueOf() / 1000;
}

function el($id) {
    return document.getElementById($id);
}
//console.log(time());


function thingWithWords($arg) {

    for ($_ in $arg) this[$_] = $arg[$_];

    if (!$arg.words) this.words = new Array('foo', 'bar', 'baz', 'xyzzy');
    if (!$arg.interval) this.interval = 500;

    this.current    = 0;            // Index of the current word
    this.iscorrect  = new Array();  // Status of all previous words
    this.starttime  = 0;            // Timestamp of first keypress (ms)
    this.chars      = 0;            // Number of characters typed
    this.keypresses = 0;            // Number of keys pressed (released, really)
    this.lastword   = false;        // Stop after_this word
    this.wrongwords = new Array();  // For description of negative $delta
    this.given      = new Array();  // All given words (with typos)
    this.interval_id;               // ID to stop the interval
    this.rawcpm;                    // $chars / $time
    this.cpm;                       // $goodchars / $time
    this.wpm;                       // $cpm / 5
    this.enterused  = false;

    this.do_hook = function($hook, $arg1, $arg2, $arg3, $arg4) {
        if (!this[$hook]) return;
        this[$hook].apply(this, new Array($arg1, $arg2, $arg3, $arg4));
    }

    this.goodchars = function () {
        var c = 0;
        for (var i = 0; i < this.iscorrect.length; i++)
            if (this.iscorrect[i]) c += this.words[i].length + 1;
        return c;
    };

    this.render = function() {
        //this.do_hook('before_render');

        var $newhtml = '';
        for (var $i = 0; $i < this.words.length; $i++) {
            $newhtml += eval(i(
                "<span>$.words[$i]</.span>"
            ));
        }

        var $words_el = el('wordstyped');
        $words_el.innerHTML = $newhtml;

        $('#wordstyped span').each(function () {
            //return $(this).width( $(this).width() + 40 + "px" );
        });

        this.update_display();
    };

    this.update_display = function ($previous) {
        this.classes($previous);
        this.scroll();
    };

    this.classes = function ($previous) {
        var $w = $("#wordstyped > span");
        if ($previous !== undefined) {
            $w[$previous].innerHTML = this.words[$previous];
        }

        for (var $i = 0; $i < this.words.length; $i++) {
            var $class = $i == this.current ? 'currentword' : $i > this.current ? 'nextword' : this.iscorrect[$i] ? 'correct' : 'incorrect';
            var $jqel = $($w[$i]);
            if (! $jqel.hasClass($class)) {
                $jqel.removeClass();
                $jqel.addClass($class);
                $jqel.attr("id", $class == "currentword" ? "currentword" : "");
            }
        }
    }

    this.scroll = function () {
        var $words_el = el('wordstyped');

        var $scrollbase_el  = el('currentword');
        var $scroll = (
            $scrollbase_el.offsetTop - el('currentword').offsetHeight
        );

        $scroll -= $words_el.offsetTop;

        if ($scroll < 0) $scroll = 0;
        if ($scroll > $( $words_el ).scrollTop() + 5
         || $scroll < $( $words_el ).scrollTop() - 5)
            $( $words_el ).stop(true, true).animate({ scrollTop: $scroll }, 500);
        console.log($scroll);
        this.do_hook('after_render');
    };

    this.calcspeed = function() {
        var $seconds = time() - this.starttime;
        if (!$seconds) return;  // div by zero when timer's bad
        if (!this.current) return;  // div by zero

        this.do_hook('before_calcspeed', $seconds);

        this.rawcpm = Math.floor(this.chars / $seconds * 60);
        this.cpm    = Math.floor(this.goodchars() / $seconds * 60);
        this.wpm    = Math.round(this.cpm / 5);

        this.do_hook('after_calcspeed', $seconds);
    }

    this.advance = function(given) {
        this.do_hook('before_advance');

	       this.given[this.current] = given;

        var $previous = this.current;

        this.current++;

        // this.lastword can be set by another function, but if we're actually
        // at *the last word*, then force it to true.
        if (this.current >= this.words.length) this.lastword = true;

        this.calcspeed();

        if (this.lastword) {
            clearInterval(this.interval_id);
            //el('input').disabled = 1;
            //el('wordsbox').innerHTML = this.report ? this.report() : "Done!";
            this.do_hook('after_report');
            console.log(this.cpm)
            console.log(this.wpm)
            console.log(this.rawcpm)
            $.ajax({
            	url: '/update',
            	type: 'POST',
            	data: {
            		cpm: this.cpm,
            		wpm: this.wpm,
            	},
            	success: function(status){
            		console.log(status);
            		if(status == "success"){

            			setTimeout(location.reload(),5000);
            		}
            		//console.log(status)
            	}
            })
        } else {
            this.update_display($previous);
        }

        this.do_hook('after_advance');
    }

    this.beforgiving = function ($given) {
    }

    this.keydown = function ($input_el, $event) {
        var $value = $input_el.value;

        var $keycode = $event.which ? $event.which : $event.keyCode;
        if ($keycode == 8 && $value == "" && this.current > 0) {
            this.current--;
            $value = $input_el.value = this.given[this.current];
            this.chars -= $value.replace(/^ +/, " ").length;
            this.update_display();
        }
    }

    this.keypress = function ($input_el, $event) {
        var $raw_given = $input_el.value,
            $value = $raw_given.replace(/^ +/, "");

        var $keycode = $event.which ? $event.which : $event.keyCode;
        if ($keycode == 13) {
            if (!this.enterused) {
                // first time
                alert("Use space bar instead of enter. It's faster. Use the 'Restart' link to start over.");
            }
            this.enterused = true;
            // Enter pressed. Pretend that spacebar was pressed.
            $input_el.value = $raw_given += " ";
            $value += " ";
        }

        var $length = $value.length;

        var $word = this.words[this.current];
        var $h = "";
        for (var c = 0; c < $word.length; c++) {
            if (c >= $value.length) {
                $h += $word[c];
            } else if ($word[c] == $value[c]) {
                $h += '<span class=correct>' + $word[c] + '</span>';
            } else {
                $h += '<span class=incorrect>' + $word[c] + '</span>';
            }
        }
      $("#currentword").html($h);

        this.do_hook('before_keypress', $value);
        if (!$length) return;

        this.keypresses++;

      if (!$value.match(/[^ ]/)) {
            // Only whitespace. Remove and ignore.
            $input_el.value = $value.replace(/^ +/, ' ');
            return;
        }


        if (!this.starttime) {
            this.starttime = time();
            var $this = this;  // for closure
            this.interval_id = setInterval(
                this.ticktock // premature optimization? :)
                    ? function () { $this.ticktock(); }
                    : function () { null; },
                this.interval
            );
        }

        var $wordandspace = $value.match(/^ *(.+? )/);
        if (!$wordandspace) {

            this.do_hook('after_keypress', $value);
            return;
        }
        $wordandspace = new String($wordandspace[1]);  // coerce

        $input_el.value = $value.replace(/^ *.+? +/, " ");
        this.chars += $wordandspace.length;

        var $given    = $wordandspace.match(/^[^ ]+/);
        var $expected = this.words[this.current];

        if ($given == $expected) {
            this.do_hook('on_correct_word', $given);
            this.iscorrect[this.current] = true;
            this.advance($raw_given);
        } else if (this.allowwrong) {
            this.do_hook('on_wrong_word', $given, $expected);
            if (!this.strictwrong) {
                // Mitigate damage when someone forgets the spacebar or presses
                // it before_finishing a word
                for (var $delta = -2; $delta <= 3; $delta++) {
                    if ($delta == 0) continue;
                    if ($given != this.words[this.current + $delta]) continue;

                    if ($delta > 0) {
                        // a-ha! user skipped $delta words
                        for (var $i = 0; $i < $delta; $i++) {
                            this.do_hook(
                                'on_skipped_word', this.words[this.current]
                            );
                            this.iscorrect[this.current] = false;
                            this.current++;
                        }
                    } else {
                        // extra space in a word: user "skipped -1 or -2 words"
                        if (this.iscorrect[this.current + $delta]) break;
                        var $extra = new Array();
                        for (; $delta < 0; $delta++) {
                            this.current--;
                            $extra.unshift(this.wrongwords[this.current]);
                        }
                        this.do_hook('on_extra_words', $extra);
                    }
                    this.iscorrect[this.current] = true;
                }
            }
            this.advance($raw_given);
        } else {
            $("#currentword").html(this.words[this.current]);
            // do nothing
        }
        this.do_hook('after_keypress', $value);
    };

    this.init = function() {
        //this.do_hook('before_init');

        this.render();
        //this.do_hook('after_init');
    };
}

var $speedtest = new thingWithWords({  // I have a thing with words ;)
    words: $words,
    allowwrong: true,
    interval: 200
});

$speedtest.mistakes   = new Array();  // Descriptions of mistakes
$speedtest.cheater    = false;        // Basic copy/paste detection

$speedtest.on_wrong_word = function($given, $expected) {
    this.mistakes.push(eval(i(
        "Instead of \"$expected\", you typed \"$given\"."
    )));
    this.wrongwords[this.current] = $given;
};

$speedtest.on_skipped_word = function($word) {
    this.mistakes.pop();
    this.mistakes.push(eval(i("You skipped the word \"$word\".")));
};

$speedtest.on_extra_words = function($words) {
    this.mistakes.splice(
        this.mistakes.length - $words.length - 1,
        $words.length + 1
    );
    for ($i in $words) this.mistakes.push(eval(i(
        "You typed an extra word: \"$words[$i]\"."
    )));
};

$speedtest.before_advance = function() {
    if (this.lastword) el('timer').innerHTML = '0';
}

$speedtest.after_keypress = function($value) {
    var input = el('input');
    if (!input) return;
    if (this.current > 0) input.setAttribute("placeholder", "");
    if (this.current >= this.words.length) return;
    if ($value.length > 5*this.words[this.current].length ) {
        this.cheater = true;
        alert(eval(i(
            "Er... the word \"$.words[$.current]\" is not $value.length "
            + "characters long ... :). Don't forget to press the space bar "
            + "after each word! (You have to start over now...)"
        )));
        return;
    }
}

$speedtest.ticktock = function() {
    var $remaining = Math.ceil(60 - (time() - this.starttime));
    if ($remaining <= 0) {
        clearInterval(this.interval_id);
        $remaining = 'finish word';
        this.lastword  = true;
    }
    el('timer').innerHTML = $remaining;
};

$speedtest.after_calcspeed = function ($seconds) {
    if (this.current == 0) return;
    if ($seconds < 3 && !this.lastword) return;
    //el('rawcpm').innerHTML = this.rawcpm;
    el('cpm'   ).innerHTML = this.cpm;
    el('wpm'   ).innerHTML = this.wpm;
}
console.log($speedtest)


   /* $.post("http://stats.aoeu.eu/mqtt", {
        "typing-speed-test.aoeu.eu": this.cpm + " CPM",
        "tst-internal/details": JSON.stringify({
            cpm: this.cpm,
            rawcpm: this.rawcpm,
            wrong: $missers,
            words: this.current,
            ip: "154.118.22.63",
            keys: this.keypresses,
            chars: this.chars,
            cheater: this.cheater ? 1 : 0,
            iphone: $iphone,
            enterused: this.enterused ? 1 : 0
        })
    });*/
$speedtest.init();

$( "#typetest" ).keydown(function(e) {
	$speedtest.keydown(this,e);
  
});
$( "#typetest" ).keyup(function(e) {
	$speedtest.keypress(this,e);
  
});

$( "#wordstyped" ).click(function(e) {
	$("#typetest").focus();
  
});
});

