let input = document.querySelector("input");
let kana = document.querySelector(".kana");
let mode = document.querySelector(".mode");

let modeHiragana = true;

let hiragana = [
    [
        "あ","い","う","え","お",
        "か","き","く","け","こ",
        "さ","し","す","せ","そ",
        "た","ち","つ","て","と",
        "な","に","ぬ","ね","の",
        "は","ひ","ふ","へ","ほ",
        "ま","み","む","め","も",
        "や","ゆ","よ",
        "ら","り","る","れ","ろ",
        "わ","を",
        "ん",
        "が","ぎ","ぐ","げ","ご",
        "ざ","じ","ず","ぜ","ぞ",
        "だ","ぢ","づ","で","ど",
        "ば","び","ぶ","べ","ぼ",
        "ぱ","ぴ","ぷ","ぺ","ぽ",
    ],
    [
        "a","i","u","e","o",
        "ka","ki","ku","ke","ko",
        "sa","shi","su","se","so",
        "ta","chi","tsu","te","to",
        "na","ni","nu","ne","no",
        "ha","hi","hu","he","ho",
        "ma","mi","mu","me","mo",
        "ya","yu","yo",
        "ra","ri","ru","re","ro",
        "wa","wo",
        "n",
        "ga","gi","gu","ge","go",
        "za","ji","zu","ze","zo",
        "da","dji","dzu","de","do",
        "ba","bi","bu","be","bo",
        "pa","pi","pu","pe","po"
    ]
];

let katakana = [
    [
        "ア","イ","ウ","ヴ","エ","オ",
        "カ","キ","ク","ケ","コ",
        "サ","シ","ス","セ","ソ",
        "タ","チ","ツ","テ","ト",
        "ナ","ニ","ヌ","ネ","ノ",
        "ハ","ヒ","フ","ヘ","ホ",
        "マ","ミ","ム","メ","モ",
        "ヤ","ユ","ヨ",
        "ラ","リ","ル","レ","ロ",
        "ワ","ヲ",
        "ン",
        "ガ","ギ","グ","ゲ","ゴ",
        "ザ","ジ","ズ","ゼ","ゾ",
        "ダ","ヂ","ヅ","デ","ド",
        "バ","ビ","ブ","ベ","ボ",
        "パ","ピ","プ","ペ","ポ"
    ],
    [
        "a","i","u","v","e","o",
        "ka","ki","ku","ke","ko",
        "sa","shi","su","se","so",
        "ta","chi","tsu","te","to",
        "na","ni","nu","ne","no",
        "ha","hi","hu","he","ho",
        "ma","mi","mu","me","mo",
        "ya","yu","yo",
        "ra","ri","ru","re","ro",
        "wa","wo",
        "n",
        "ga","gi","gu","ge","go",
        "za","ji","zu","ze","zo",
        "da","dji","dzu","de","do",
        "ba","bi","bu","be","bo",
        "pa","pi","pu","pe","po"
    ]
];


let hirIndex = -1;
let katIndex = -1;

function getHirIndex() {
    hirIndex = Math.floor(Math.random()*71);
};
function getKatIndex() {
    katIndex = Math.floor(Math.random()*72);
};

getHirIndex();
getKatIndex();

kana.innerText = hiragana[0][hirIndex];

mode.addEventListener('click', ()=>{
    modeHiragana=!modeHiragana;
    kana.style.color = "#000000";
    if(modeHiragana){
        mode.innerText = "ひらがな";
        getHirIndex();
        kana.innerText = hiragana[0][hirIndex];
    } else {
        mode.innerText = "カタカナ";
        getKatIndex();
        kana.innerText = katakana[0][katIndex];
    }
});

input.addEventListener("keydown", (event)=>{
    if(event.keyCode==13){
        let ans = input.value;
        input.value = "";
        if(modeHiragana){
            if(ans==hiragana[1][hirIndex]){
                kana.style.color = "#000000";
                kana.style.visibility = "hidden";
                getHirIndex();
                setTimeout(()=>{
                    kana.innerText = hiragana[0][hirIndex];
                    kana.style.visibility = "visible";
                }, 22);
            } else {
                kana.style.color = "red";
            }
        } else {
            if(ans==katakana[1][katIndex]){
                kana.style.color = "#000000";
                kana.style.visibility = "hidden";
                getKatIndex();
                setTimeout(()=>{
                    kana.innerText = katakana[0][katIndex];
                    kana.style.visibility = "visible";
                }, 22);
            } else {
                kana.style.color = "red";
            }
        }
    }
});