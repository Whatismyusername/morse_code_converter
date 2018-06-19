$('document').ready(function(){
    var user_input = "";
    var input_segments = [];
    var convertion = [
        {
            plaintext: "a",
            ciphertext: ".- ",
            mp3: "Sound/A.mp3"
        },
        {
            plaintext: "b",
            ciphertext: "-... ",
            mp3: "Sound/B.mp3"
        },
        {
            plaintext: "c",
            ciphertext: "-.-. ",
            mp3: "Sound/C.mp3"
        },
        {
            plaintext: "d",
            ciphertext: "-.. ",
            mp3: "Sound/D.mp3"
        },
        {
            plaintext: "e",
            ciphertext: ".",
            mp3: "Sound/E.mp3"
        },
        {
            plaintext: "f",
            ciphertext: "..-. ",
            mp3: "Sound/F.mp3"
        },
        {
            plaintext: "g",
            ciphertext: "--. ",
            mp3: "Sound/G.mp3"
        },
        {
            plaintext: "h",
            ciphertext: ".... ",
            mp3: "Sound/H.mp3"
        },
        {
            plaintext: "i",
            ciphertext: ".. ",
            mp3: "Sound/I.mp3"
        },
        {
            plaintext: "j",
            ciphertext: ".--- ",
            mp3: "Sound/J.mp3"
        },
        {
            plaintext: "k",
            ciphertext: "-.- ",
            mp3: "Sound/K.mp3"
        },
        {
            plaintext: "l",
            ciphertext: ".-.. ",
            mp3: "Sound/L.mp3"
        },
        {
            plaintext: "m",
            ciphertext: "-- ",
            mp3: "Sound/M.mp3"
        },
        {
            plaintext: "n",
            ciphertext: "-. ",
            mp3: "Sound/N.mp3"
        },
        {
            plaintext: "o",
            ciphertext: "--- ",
            mp3: "Sound/O.mp3"
        },
        {
            plaintext: "p",
            ciphertext: ".--. ",
            mp3: "Sound/P.mp3"
        },
        {
            plaintext: "q",
            ciphertext: "--.- ",
            mp3: "Sound/Q.mp3"
        },
        {
            plaintext: "r",
            ciphertext: ".-. ",
            mp3: "Sound/R.mp3"
        },
        {
            plaintext: "s",
            ciphertext: "... ",
            mp3: "Sound/S.mp3"
        },
        {
            plaintext: "t",
            ciphertext: "- ",
            mp3: "Sound/T.mp3"
        },
        {
            plaintext: "u",
            ciphertext: "..- ",
            mp3: "Sound/U.mp3"
        },
        {
            plaintext: "v",
            ciphertext: "...- ",
            mp3: "Sound/V.mp3"
        },
        {
            plaintext: "w",
            ciphertext: ".-- ",
            mp3: "Sound/W.mp3"
        },
        {
            plaintext: "x",
            ciphertext: "-..- ",
            mp3: "Sound/X.mp3"
        },
        {
            plaintext: "y",
            ciphertext: "-.-- ",
            mp3: "Sound/Y.mp3"
        },
        {
            plaintext: "z",
            ciphertext: "--.. ",
            mp3: "Sound/Z.mp3"
        },
        {
            plaintext: " ",
            ciphertext: "/ ",
            mp3: ""
        }
        
    ];
    var ciphertext_message = "";
    var cipher_sound = [];
    
    $("#background").css("height", window.innerHeight);
    $("#background").css("width", window.innerWidth);
    
    $("#enter").click(function(){
        user_input = $('#plaintext_input').val().toLowerCase();
        input_slice();
    });
    
    function input_slice(){
        input_segments = [];
        for(var i = 0; i < user_input.length; i ++){
            input_segments.push(user_input.slice(i, i + 1));
        }
        console.log(input_segments);
        print_and_sound();
    }
    
    
    function print_and_sound(){
        ciphertext_message = "";
        cipher_sound = [];
        console.log(ciphertext_message);
        for(var i = 0; i < input_segments.length; i ++){
            
            for(var j = 0; j < convertion.length; j++){
                if(input_segments[i] === convertion[j].plaintext){
                    ciphertext_message += convertion[j].ciphertext;
                    if (input_segments[i] === " "){
                        
                    } else{
                        cipher_sound.push("<source src='" + convertion[j].mp3 + "' type='audio/mpeg'>");
                    }
                    
                }
            }
            $('#ciphertext_wrapper').html(ciphertext_message);
        }
        
        autoplaySound(0);
            
    }
    
    function autoplaySound (x){
        $("body").append("<audio id='audio" + x +"' autoplay>" + cipher_sound[x] + "</audio>");
        
        if( x < cipher_sound.length){
            document.getElementById("audio" + x).addEventListener("ended", function(){
                autoplaySound(x + 1);
            });
        }
    }
    
})