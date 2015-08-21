
var fbuser;
var haveLogin = $.Deferred();
var _paq = [];
var $iphone = 0;
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
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
!function(a){"use strict";function b(){this.data={}}function c(){this.listeners=new b}function d(a){setTimeout(function(){throw a},0)}function e(a){this.type=a,this.target=void 0}function f(a,b){e.call(this,a),this.data=b.data,this.lastEventId=b.lastEventId}function x(a,b){var c=a;return c!==c&&(c=b),v>c?v:c>w?w:c}function y(a,b,c){try{"function"==typeof b&&b.call(a,c)}catch(e){d(e)}}function z(b,d){function P(){H=o,void 0!==D&&(D.abort(),D=void 0),0!==E&&(clearTimeout(E),E=0),0!==F&&(clearTimeout(F),F=0),A.readyState=o}function Q(a){var c=H===n||H===m?D.responseText:"",d=void 0,g=!1;if(H===m){var i=0,k="",F=void 0;if(j)try{i=D.status,k=D.statusText,F=D.getResponseHeader("Content-Type")}catch(Q){i=0,k="",F=void 0}else""!==a&&"error"!==a&&(i=200,k="OK",F=D.contentType);if((void 0===F||null===F)&&(F=""),0===i&&""===k&&"load"===a&&""!==c&&(i=200,k="OK",""===F)){var R=/^data\:([^,]*?)(?:;base64)?,[\S]*$/.exec(b);void 0!==R&&null!==R&&(F=R[1])}if(200===i&&u.test(F)){if(H=n,C=!0,B=h,A.readyState=n,d=new e("open"),A.dispatchEvent(d),y(A,A.onopen,d),H===o)return}else if(0!==i){var S="";S=200!==i?"EventSource's response has a status "+i+" "+k.replace(/\s+/g," ")+" that is not 200. Aborting the connection.":"EventSource's response has a Content-Type specifying an unsupported type: "+F.replace(/\s+/g," ")+". Aborting the connection.",setTimeout(function(){throw new Error(S)},0),g=!0}}if(H===n){c.length>G&&(C=!0);for(var T=G-1,U=c.length,V="\n";++T<U;)if(V=c.charAt(T),M===p&&"\n"===V)M=q;else if(M===p&&(M=q),"\r"===V||"\n"===V){if("data"===N?I.push(O):"id"===N?J=O:"event"===N?K=O:"retry"===N?(h=x(Number(O),h),B=h):"heartbeatTimeout"===N&&(v=x(Number(O),v),0!==E&&(clearTimeout(E),E=setTimeout(L,v))),O="",N="",M===q){if(0!==I.length&&(z=J,""===K&&(K="message"),d=new f(K,{data:I.join("\n"),lastEventId:J}),A.dispatchEvent(d),"message"===K&&y(A,A.onmessage,d),H===o))return;I.length=0,K=""}M="\r"===V?p:q}else M===q&&(M=r),M===r?":"===V?M=s:N+=V:M===s?(" "!==V&&(O+=V),M=t):M===t&&(O+=V);G=U}H!==n&&H!==m||!("load"===a||"error"===a||g||G>1048576||0===E&&!C)?0===E&&(C=!1,E=setTimeout(L,v)):(g?P():(H=l,D.abort(),0!==E&&(clearTimeout(E),E=0),B>16*h&&(B=16*h),B>w&&(B=w),E=setTimeout(L,B),B=2*B+1,A.readyState=m),d=new e("error"),A.dispatchEvent(d),y(A,A.onerror,d))}function R(){Q("progress")}function S(){Q("load")}function T(){Q("error")}b=b.toString();var g=i&&void 0!==d&&Boolean(d.withCredentials),h=x(1e3,0),v=x(45e3,0),z="",A=this,B=h,C=!1,D=new k,E=0,F=0,G=0,H=l,I=[],J="",K="",L=void 0,M=q,N="",O="";j&&(F=setTimeout(function U(){3===D.readyState&&Q("progress"),F=setTimeout(U,500)},0)),L=function(){if(E=0,H!==l)return Q(""),void 0;if(j&&(void 0!==D.sendAsBinary||void 0===D.onloadend)&&void 0!==a.document&&void 0!==a.document.readyState&&"complete"!==a.document.readyState)return E=setTimeout(L,4),void 0;D.onload=S,D.onerror=T,j&&(D.onabort=T,D.onreadystatechange=R),D.onprogress=R,C=!1,E=setTimeout(L,v),G=0,H=m,I.length=0,K="",J=z,O="",N="",M=q;var c=b.slice(0,5);c="data:"!==c&&"blob:"!==c?b+((-1===b.indexOf("?",0)?"?":"&")+"lastEventId="+encodeURIComponent(z)+"&r="+(Math.random()+1).toString().slice(2)):b,D.open("GET",c,!0),j&&(D.withCredentials=g,D.responseType="text",D.setRequestHeader("Accept","text/event-stream")),D.send(void 0)},c.call(this),this.close=P,this.url=b,this.readyState=m,this.withCredentials=g,this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,L()}function A(){this.CONNECTING=m,this.OPEN=n,this.CLOSED=o}b.prototype={get:function(a){return this.data[a+"~"]},set:function(a,b){this.data[a+"~"]=b},"delete":function(a){delete this.data[a+"~"]}},c.prototype={dispatchEvent:function(a){a.target=this;var b=a.type.toString(),c=this.listeners,e=c.get(b);if(void 0!==e)for(var f=e.length,g=-1,h=void 0;++g<f;){h=e[g];try{h.call(this,a)}catch(i){d(i)}}},addEventListener:function(a,b){a=a.toString();var c=this.listeners,d=c.get(a);void 0===d&&(d=[],c.set(a,d));for(var e=d.length;--e>=0;)if(d[e]===b)return;d.push(b)},removeEventListener:function(a,b){a=a.toString();var c=this.listeners,d=c.get(a);if(void 0!==d){for(var e=d.length,f=[],g=-1;++g<e;)d[g]!==b&&f.push(d[g]);0===f.length?c["delete"](a):c.set(a,f)}}},f.prototype=e.prototype;var g=a.XMLHttpRequest,h=a.XDomainRequest,i=void 0!==g&&void 0!==(new g).withCredentials,j=i,k=i?g:void 0!==h?h:void 0,l=-1,m=0,n=1,o=2,p=3,q=4,r=5,s=6,t=7,u=/^text\/event\-stream;?(\s*charset\=utf\-8)?$/i,v=1e3,w=18e6;A.prototype=c.prototype,z.prototype=new A,A.call(z);var B=function(){if(void 0!==a.EventSource)try{var b=new a.EventSource("data:text/event-stream;charset=utf-8,");return b.close(),b.withCredentials===!1&&""!==b.url}catch(c){d(c)}return!1};void 0===k||B()||(a.NativeEventSource=a.EventSource,a.EventSource=z)}(this);

$sourcewords = $sourcewords.split(' ');


// The following is public domain. Feel free to use it for your own project.
// I'd like to see what you used it for :)
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
    // Return the current time as a timestamp in seconds
    return (new Date()).valueOf() / 1000;
}

function el($id) {
    return document.getElementById($id);
}

// Provide the XMLHttpRequest class for IE 5.x-6.x:
if (typeof XMLHttpRequest == "undefined") XMLHttpRequest = function() {
    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch(e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch(e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP") } catch(e) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP") } catch(e) {}
//    throw new Error( "This browser does not support XMLHttpRequest." )
    return null;
};

function thingWithWords($arg) {

    this.opera     = navigator.userAgent.indexOf("Opera") > -1;

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
        this.do_hook('before_render');

        var $newhtml = '';
        for (var $i = 0; $i < this.words.length; $i++) {
            $newhtml += eval(i(
                "<span>$.words[$i]</.span>"
            ));
        }

        var $words_el = el('words');
        $words_el.innerHTML = $newhtml;

        // Font rendering is unpredictable and may subtly change when the word
        // is rendered per letter instead of a word, so freeze whatever the
        // browser has calculated!
        $('#words span').each(function () {
            return $(this).width( $(this).width() + "px" );
        });

        this.update_display();
    };

    this.update_display = function ($previous) {
        this.classes($previous);
        this.scroll();
    };

    this.classes = function ($previous) {
        var $w = $("#words > span");
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
        var $words_el = el('words');

        var $scrollbase_el  = el('currentword');
        var $scroll = (
            $scrollbase_el.offsetTop - el('currentword').offsetHeight
        );

        $scroll -= $words_el.offsetTop;

        if ($scroll < 0) $scroll = 0;
        if ($scroll > $( $words_el ).scrollTop() + 5
         || $scroll < $( $words_el ).scrollTop() - 5)
            $( $words_el ).stop(true, true).animate({ scrollTop: $scroll }, 500);

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
            el('input').disabled = 1;
            el('wordsbox').innerHTML = this.report ? this.report() : "Done!";
            this.do_hook('after_report');
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
            this.chars -= $value.replace(/^ +/, "").length;
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

/*        if (!$value.match(/[^ ]/)) {
            // Only whitespace. Remove and ignore.
            $input_el.value = $value.replace(/^ +/, '');
            return;
        }
*/

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

        $input_el.value = $value.replace(/^ *.+? +/, "");
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
        this.do_hook('before_init');

        this.render();
        this.do_hook('after_init');
    };
}

// Public domain part ends here. Please don't copy the following.

var $words = new Array();



for (var $i = 1; $i < 300; $i++)
    $words.push($sourcewords[
        Math.floor(Math.random() * $sourcewords.length)
    ]);

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
    el('rawcpm').innerHTML = this.rawcpm;
    el('cpm'   ).innerHTML = this.cpm;
    el('wpm'   ).innerHTML = this.wpm;
}

$speedtest.report = function () {
    $("#dummyinput").focus();

    var cpm = $speedtest.cpm;
    var $c = cpm >= 500 ? " class=fire" : "";
    haveLogin.done(function () { fbscore(cpm); });

    var $report = eval(i(
        "<p id=result>Your score: <big$c>$.cpm</.big> CPM "
        + "(that is <big$c>$.wpm</.big> WPM)<div id=pct></div>"
    ));

    var $missers     = this.cpm == this.rawcpm ? 0 : 0 + this.mistakes.length;
    var $mistake_s   = ($missers == 1 ? 'mistake' : 'mistakes');
    var $excl        = ($missers == 0 ? '!' : '');
    if (this.cheater) $excl = "*";

    store_score(cpm, $missers);
    highscore();
    debug_scores();
    
    var $share = eval(i("I did a typing speed test and scored $.cpm CPM = $.wpm WPM (with $missers $mistake_s$excl)"));
    var $tweet = ($share + " at http://typing-speed-test.aoeu.eu/").replace(/ /g, "+");  // Unfortunately, they don't appear to understand real URI encoding.

    $report += eval(i(
        "<p id=fbpost><button class=fbbutton href onclick='fbpost($.cpm, $.wpm, $.missers);return false;'>Share this score on Facebook!</button></p>"));

    $report += eval(i(
        "<p><a href='http://www.twitter.com/home?status=$tweet' class=tweet></a>"
        // +"<img border=0 alt='Tweet this!' width=138 height=55 src=tweetthis.gif></a>"
    ));

    if ($missers) {
        var $waswere     = ($missers == 1 ? 'was'     : 'were');

        $report += eval(i(
            "<p>In reality, you typed $.rawcpm CPM, but you made $missers "
            + "$mistake_s (out of $.current words), which $waswere not counted "
            + "in the corrected scores. <p>Your $mistake_s $waswere:"
        ));

        $report += '<ul>';
        for (var $i in this.mistakes)
            $report += '<li>' + this.mistakes[$i];
        $report += '</ul>';
    }
    else
        $report += eval(i(
            "<p>Congratulations! You typed all $.current words correctly!"
        ));

    if (this.rawcpm > 300)
        $report += '<p>I advise you to take a 2 minute break now.';

    if (this.enterused) {
        $report += '<p>By the way, you used <b>enter</b> instead of the ' +
            '<b>space bar</b>. Try using space next time; this will probably ' +
            'result in a greater overall typing speed.'
    }

// Nobody uses this anyway...
//    $report += eval(i(
//        "<p><form action='/tell-a-friend.plp' method=post target='_top'>"
//        + "<strong>Challenge a friend to beat your speed!</.strong><br>"
//        + "<input type=hidden name=cpm value=$.cpm>"
//        + "<input type=hidden name=wpm value=$.wpm>"
//        + "<table cellspacing=0 cellpadding=3 align=center>"
//        + "<tr><td>Your name: <td><input name=sender value=''>"
//        + "<tr><td>Your email address: <td><input name=from value=''>"
//        + "<tr><td>Your friend's name: <td><input name=name value=''>"
//        + "<tr><td>Your friend's email address: <td><input name=rcpt value=''>"
//        + "</.table>"
//        + "<input type=submit value='Preview message'>"
//        + "</.form>"
//    ));

    //var $foo = new Image();
//    var url = eval(i(
//        // Yes, it's easy to fsck up my statistics. Please don't.
//        // The "cheater" parameter is just to know how many people try.
//        "/grab.plp?cpm=$.cpm;rawcpm=$.rawcpm;wrong=$missers;words=$.current;"
//        + "ip=197.253.36.22;keys=$.keypresses;chars=$.chars;cheater="
//        + (this.cheater?"1":"0") + ";iphone=$iphone;enterused="
//        + (this.enterused?"1":"0")
//    ));
    $.post("http://stats.aoeu.eu/mqtt", {
        "typing-speed-test.aoeu.eu": this.cpm + " CPM",
        "tst-internal/details": JSON.stringify({
            cpm: this.cpm,
            rawcpm: this.rawcpm,
            wrong: $missers,
            words: this.current,
            ip: "197.253.36.22",
            keys: this.keypresses,
            chars: this.chars,
            cheater: this.cheater ? 1 : 0,
            iphone: $iphone,
            enterused: this.enterused ? 1 : 0
        })
    });

//    $.get(url, function (data) {
//	if ($("#pct").length == 0) $.get("/log.plp/nopct");  // there's a race condition, sure, but how likely is it? :-)
//	$("#pct").html(data);
//    });

    $.get("/stats/pct" + this.cpm + ".json", function (data) {
        var px = data / 100 * 500;
        $("#pct").html(
            '<p style="margin-bottom: 0.2ex">Your score beats or equals ' + data + '% of all.</p>'
            + '<div style="width: 50px; background: white; border: 2px inset #888; width: 500px;margin: auto; text-align: left;margin-top: 0.2ex">'
            + '<div style="background: #b8e069; border-right: 0px solid #888; width: ' + px + 'px; ">&nbsp;</div>'
            + '</div>'
        );
    }, 'json');

    _paq.push([ "trackLink", "http://aoeu.eu/cpm=" + this.cpm, "download" ]);

    return $report;
};

$speedtest.after_report = function () {

    return;

    if ($http = new XMLHttpRequest()) {
        $http.open("GET", "pct.plp?cpm=" + this.cpm);
        $http.onreadystatechange = function() {
            if ($http.readyState != 4) return;
            document.getElementById("pct").innerHTML = $http.responseText;
        };
        $http.send(null);
    }
}

var intro;
var intro_i = 0;
function type_intro () {
    intro_i++;

    var text = intro.substring(0, intro_i).replace(/\n/g, "<br>");

    $("#intro").html( text );
    if (intro_i < intro.length) {
        setTimeout(type_intro, text.match(/[;,.?!>]$/) ? 300 : 50);
    } else {
        $("#intro").removeClass("typing");
    }
}

$(function () {
    $input_el = el('input');
    $input_el.value = "";
    $input_el.focus();
    $speedtest.init();

    if (0) setTimeout(function () {
        if ($("#adsense:visible").length == 0) {
            $.get("/log.plp/noadsense");  // Just statistics

            // $("#blokding").load("/support.html");

        }
    }, 2000);

    intro = $.trim( $("#intro").text() );
//    setTimeout(type_intro, 100);

    //highscore();
});