/* 
Block-scope Variables
JavaScript မှာ ပုံမှန်အားမြaင့် var Keyword ကို သုံးပြီး Variable တွေကြေညာနိုင်ပါတယ်။ အဲ့ဒီလို
ကြေညာ\ားတဲ့ Variable တွေဟာ Function Scope သဘောသဘာဝ ရှိကြပါတယ်။ ဥပမာ -
function app() {
if(true) {
var i = 10;
}
return i;
}
app(); 


နမူနာ Function မှာ Variable i ကို if Statement \ဲမှာ ကြေညာ\ားပေမယ့် အပြင်ကနေလည်း
အသုံးပြုလို့ ရနေတာကို တွေ့ရမှာပါ။ ES6 မှာပါလာတဲ့ let Keyword ကို အသုံးပြု၍ Variable တွေ
ကြေညာမယ်ဆိုရင်တော့ Block Scope Variable တွေကို ရရှိမှာ မြaစ်ပါတယ်။ ဥပမာ -
function app() {
if(true) {
let i = 10;
}
return i;
}
app(); // => ReferenceError: i is not defined
ဒီနမူနာမှာ အလားတူပဲ Variable i ကို if Statement \ဲမှာပဲ ကြေညာ\ားပါတယ်။ ဒါပေမယ့် ပြင်ပ
ကနေ ရယူအသုံးလို့ မရတော့တာကို တွေ့ရမှာ မြaစ်ပါတယ်။ ဒါဟာ မဆိုင်တဲ့ Variable တွေကို မှားယUင်း
အသုံးပြုမိခြင်းကနေ ကာကUယ်ပေးလို့ ပိုကောင်းတဲ့ စနစ်မြaစ်ပါတယ်။ ဒါကြောင့် အခုနောက်ပိုင်း var ကို
လုံးဝ မသုံးသင့်တော့ဘူးလို့ ပြောကြတာမျိုးတွေ ရှိလာပါပြီ။
နောက်\ပ် ES6 မှာပါဝင်တဲ့ Block Scope Variable တစ်မျိုးကတော့ Constant မြaစ်ပါတယ်။ const
Keyword ကို အသုံးပြု ကြေညာရပါတယ်။ Constant မြaစ်လို့ တန်aိုးကို တစ်ကြိမ်သာ သတ်မှတ်နိုင်မှာမြaစ်
ပြီး ပြင်ဆင်ခUင့်ကိုပေးမှာ မဟုတ်ပါဘူး။ ဥပမာ -

function app() {
if(true) {
let i = 10;
}
return i;
}
app(); 


ဒီနမူနာမှာ အလားတူပဲ Variable i ကို if Statement \ဲမှာပဲ ကြေညာ\ားပါတယ်။ ဒါပေမယ့် ပြင်ပ
ကနေ ရယူအသုံးလို့ မရတော့တာကို တွေ့ရမှာ မြaစ်ပါတယ်။ ဒါဟာ မဆိုင်တဲ့ Variable တွေကို မှားယUင်း
အသုံးပြုမိခြင်းကနေ ကာကUယ်ပေးလို့ ပိုကောင်းတဲ့ စနစ်မြaစ်ပါတယ်။ ဒါကြောင့် အခုနောက်ပိုင်း var ကို
လုံးဝ မသုံးသင့်တော့ဘူးလို့ ပြောကြတာမျိုးတွေ ရှိလာပါပြီ။
နောက်\ပ် ES6 မှာပါဝင်တဲ့ Block Scope Variable တစ်မျိုးကတော့ Constant မြaစ်ပါတယ်။ const
Keyword ကို အသုံးပြု ကြေညာရပါတယ်။ Constant မြaစ်လို့ တန်aိုးကို တစ်ကြိမ်သာ သတ်မှတ်နိုင်မှာမြaစ်
ပြီး ပြင်ဆင်ခUင့်ကိုပေးမှာ မဟုတ်ပါဘူး။ ဥပမာ -

const num = 1;
num = 2;


ဒီရေးနည်းက TypeError မမြaစ်ဘဲ အလုပ်လုပ်သUားမှာ မြaစ်ပါတယ်။ Constant ဟာ Object တစ်ခုမြaစ်မယ်
ဆိုရင် Object Property တွေပြင်တာကိုတော့ လက်ခံတယ်ဆိုတဲ့ သဘောပါ။
Map, Filter, Reduce
နောက်တစ်ဆင့်မှာ Arrow Function အကြောင်း ပြောချင်ပါတယ်။ နမူနာတUဲပြချင်လို့ map(),
filter() နဲ့ reduce() ဆိုတဲ့ အရမ်းအသုံးဝင်တဲ့ Array Function တွေအကြောင်း အရင်ပြောပါ
မယ်။ map() Function ဟာ ပေးလိုက်တဲ့ Array ပေါ်မှာ အခြေခံပြီး အခြား Array တစ်ခုကို ပြန်ပေးတဲ့
Function မြaစ်ပါတယ်။ ဥပမာ -

let nums = [ 1, 2, 3, 4 ];
let result = nums.map(function(n) {
return n + 1;
});
result; 

နမူနာအရ nums Array ကို အခြေခံပြီး result Array ကို ပြန်ရတာ မြaစ်ပါတယ်။ Array Item တစ်ခု
ချင်းစီ ပေါ်မှာ ပေးလိုက်တဲ့ Callback Function အလုပ်လုပ်သUားလို့ မူလတန်aိုးကို 1 ပေါင်းပြီး ပြန်ရတာ
ကို တွေ့ရမှာ မြaစ်ပါတယ်။ ဒီနေရာမှာ \ူးခြားချက်အနေနဲ့ သတိပြုရမှာက nums Array ရဲ့ မူလတန်aိုး
တွေကို လုံးဝ မပြောင်းဘဲ Array အသစ်တစ်ခု \ုတ်ပေးတာမြaစ်လို့ ပိုစနစ်ကျတဲ့ ရေးနည်းလို့ ဆိုနိုင်ပါ
တယ်။ ဒီရေးနည်းဟာ Functional Programming ကနေ လာပါတယ်။ ဒီစာအုပ်မှာ Functional
Programming အကြောင်းတော့ \ည့်သUင်း<aာ်ပြနိုင်မှာ မဟုတ်ပါဘူး။
အကျဉ်းချုပ်အနေနဲ့ နောက်ပိုင်းမှာ Array တွေ စီမံaို့အတUက် for တို့ for-in တို့လို Loop တွေကို မသုံး
 တော့ဘဲ map() ကို အသုံးပြုသင့်တယ် လို့မှတ်သားနိုင်ပါတယ်။ ပိုစနစ်ကျသလို ရေး\ုံးအရလည်း ပို
ကျစ်လစ် သUားမှာပါ။
filter() Function ကလည်း အလားတူပဲ Array တစ်ခုပေါ်မှာ အခြေခံပြီး နောက် Array တစ်ခုကို
ပြန်ပေးပါတယ်။ ဒါပေမယ့် map() လို Item အားလုံးကို ပြန်ပေးတာ မဟုတ်ဘဲ Condition ကိုက်ညီတဲ့
Item တွေကိုပဲ ရွေးပြီး ပြန်ပေးတာ မြaစ်ပါတယ်။ ဥပမာ -

let nums = [ 1, 2, 3, 4 ];
let result = nums.filter(function(n) {
return n % 2;
});
result

နမူနာအရ nums Array ကို အခြေခံပြီး result Array ရပါတယ်။ ဒါပေမယ့် Item တစ်ခုချင်းစီပေါ်မှာ
အလုပ်လုပ်aို့ ပေးလိုက်တဲ့ Callback Function မှာ Item Value n ကို 2 ရဲ့ စားကြွင်း ရှိမှ ပြန်ပေးaို့ စစ်
\ားလို့ စားကြွင်းရှိတဲ့ [ 1, 3 ] ကိုပဲ ပြန်ရတာ မြaစ်ပါတယ်။ ဒီ\က်ပို စိတ်ဝင်စားaို့ကောင်းတဲ့ ဥပမာ
ကို ပေးရရင် ဒီလိုပါ။
let users = [
{ name: 'Bob', gender: 'male' },
{ name: 'Alice', gender: 'femail' },
{ name: 'Tom', gender: 'male' }
];
let result = users.filter(function(user) {
return user.gender == 'male';
});
result;

နမူနာအရ ပေး\ားတဲ့ users Object Array \ဲက gender Property တန်aိုး male မြaစ်နေသူတွေကို
သာ ပြန်ပေး result Array ကို ရရှိခြင်းပဲ မြaစ်ပါတယ်။
reduce() Function ကတော့ ပေးလိုက်တဲ့ Array ပေါ်မှာ အခြေပြုပြီး တန်aိုးတစ်ခုကို ပြန်ပေးပါတယ်။
ဥပမာ -

let nums = [ 1, 2, 3, 4 ];
let result = nums.reduce(function(a, n) {
return a + n;
});
result;

reduce() ရဲ့ Callback ကတော့ Argument နှစ်ခုလက်ခံပါတယ်။ အရင်တန်aိုးနဲ့ လက်ရှိတန်aိုးပါ။ နမူ
နာအရ အရင်တန်aိုးကို လက်ရှိတန်aိုးနဲ့ ပေါင်းပေါင်းပေးသUားလို့ နောက်ဆုံးမှာ အားလုံးပေါင်းခြင်း တန်aိုး
ကို ရရှိမှာ မြaစ်ပါတယ်။
ဒီFunction သုံးခုဟာ အလUန်အသုံးဝင်ပြီး ရှေ့လျှောက် ဆက်တိုက် အသုံးပြုသUားတော့မှာပါ။ ဒါကြောင့်
ကောင်းကောင်းကြေညက် နားလည်အောင်၊ လိုအပ်ရင် နောက်တစ်ခေါက်လောက် ပြန်ကြည့်\ားပေးပါ။
ကြည့်ယုံနဲ့လည်း မကျေနပ်ပါနဲ့၊ ချရေးပြီးတော့လည်း စမ်းကြည့်ပါ။ Web Browser Console \ဲမှာတင်
ရေးစမ်းလို့ ရနိုင်ပါတယ်။



Arrow Function


JavaScript မှာ Function ကြေညာနည်း (၂) နည်းရှိတယ်လို့ ပြောနိုင်ပါတယ်။ ပ\မနည်းက ဒီလိုပါ -
function add(a, b) {
return a + b;
}
နောက်တစ်နည်းက ဒီလိုပါ -
let add = function(a, b) {
return a + b;
};
ဒီဒုတိယနည်းက၊ တစ်ကယ်တော့ Variable တစ်ခုရဲ့ တန်aိုးနေရာမှာ Anonymous Function တစ်ခုကို
\ည့်ပေးလိုက်တာပါ။ JavaScript မှာ Function Name မပါတဲ့ Nameless Function ခေါ် Anonymous Function တွေကို ကျယ်ကျယ်ပြန့်ပြန့် သုံးကြပါတယ်။ ES6 မှာတော့ Arrow Function လို့ခေါ်တဲ့ ရေး\ုံး
သစ် \ပ်တိုး ပါဝင်လာပါတယ်။ ဒီလိုပါ -

Function တွေကို ကျယ်ကျယ်ပြန့်ပြန့် သုံးကြပါတယ်။ ES6 မှာတော့ Arrow Function လို့ခေါ်တဲ့ ရေး\ုံး
သစ် \ပ်တိုး ပါဝင်လာပါတယ်။ ဒီလိုပါ -
let add = (a, b) => {
return a + b;
}
 အလUယ်မှတ်ချင်ရင် Parameter List ရှေ့က function Keyword ကို aယ်\ုတ်လိုက်ပြီး Parameter
 List နောက်မှာ => သင်္ကေတလေးကို \ည့်ပေးလိုက်တာပါ။ ဒီ Arrow Function ရေး\ုံးမှာ ပါဝင်တဲ့
Statement က တစ်ကြောင်းတည်းဆိုရင် တUန့်ကUင်းတွေနဲ့ return Keyword ကို မ\ည့်ဘဲ ရေးလို့ရပါ
တယ်။ ဒီလိုပါ -
let add = (a, b) => a + b;
ပြီးတော့ Parameter တစ်ခုတည်းဆိုရင် ဝိုက်ကUင်း အaUင့်ပိတ် မ\ည့်ဘဲလည်း ရေးလို့ရပါတယ်။ ဒီလိုပါ -
let twice = n => n * 2;

ဒါဆိုရင် n ကို လက်ခံပြီး 2 နဲ့မြှောက် ပြန်ပေးတဲ့ Function တစ်ခုကို ရသUားတာပါ။ အစပိုင်း အမြင်စိမ်းပြီး
မျက်စိလည်ချင်စရာ ကောင်းပေမယ့်၊ သဘောပေါက်သUားရင် တော်တော်ရေးလို့ကောင်းပြီး အသုံးဝင်တဲ့
ရေး\ုံးမြaစ်တယ်ဆိုတာကို တွေ့ရမှာပါ။ အ\က်မှာ လေ့လာခဲ့တဲ့ Array Function တွေရဲ့ တUဲသုံးပြပါမယ်။
Regular Function
let nums = [ 1, 2, 3, 4];
let result = nums.map(function(n) {
return n + 1;
});
Arrow Function
let nums = [ 1, 2, 3, 4 ];
let result = nums.map(n => n + 1);

ရေး\ုံးကျစ်လစ်မှုပိုင်းမှာ အများကြီး ကUာသUားတာကို တွေ့ရမှာပါ။ ဒီ\က်ပိုပြီး တိုချင်ရင်လည်း ဒီလို
တိုက်ရိုက်ရေးလိုက်လို့ ရနိုင်ပါတယ်။
 [ 1, 2, 3, 4 ].map(n => n + 1); // => [ 2, 3, 4, 5 ]
အလားတူပါပဲ filter() တို့ reduce() တို့မှာလည်း ဒီတိုင်းရေးလို့ ရပါတယ်။
[ 1, 2, 3, 4 ].filter(n => n % 2); // => [ 1, 3 ]
[ 1, 2, 3, 4 ].reduce((a, n) => a + n);// => 10
reduce() မှာ Parameter နှစ်ခုမို့ ဝိုက်ကUင်းနဲ့ \ည့်ရေးခဲ့ရတာလေး ပြန်သတိပေးချင်ပါတယ်။ ဒီ
Arrow Function ရေး\ုံးဟာလည်း ရှေ့လျှောက်ဆက်တိုက် အသုံးပြုသUားမယ့် ရေး\ုံးမြaစ်ပါတယ်။ ဒါ
ကြောင့် စမ်းရေးကြည့်ပြီး ကောင်းကောင်းနားလည်အောင် သေချာပြန်ကြည့်\ားစေချင်ပါတယ်။
Default Parameter Value and Rest Parameter
Default Parameter Value လုပ်ဆောင်ချက်ကတော့ PHP တို့ Python တို့မှာ အရင်ကတည်းက ပါဝင်တဲ့
လုပ်ဆောင်ချက်ပါ။ JavaScript အတUက်တော့ ES6 ကျတော့မှပဲ ပါလာပါတယ်။ အသုံးဝင်တဲ့
လုပ်ဆောင်ချက်ပါပဲ။ ဥပမာ -

function add(a, b) {
return a + b;
}
add(1); // => NaN
နမူနာမှာ add() Function ကိုခေါ်တဲ့အခါ Argument နှစ်ခုပေးရမယ့်အစား တစ်ခုပဲ ပေးလိုက်တဲ့အခါ
ဒုတိယ Argument က undefined မြaစ်သUားလို့ အဆင်မပြေတဲ့သဘောကို တွေ့ရနိုင်ပါတယ်။ Function
ကြေညာစဉ်မှာ Parameter တန်aိုး \ည့်သတ်မှတ်ခဲ့မယ်ဆိုရင် အခုလို မြaစ်သUားပါမယ်။

function add(a, b = 0) {
return a + b;
}
add(1); // => 1
b Parameter အတUက် ခေါ်ယူစဉ်မှာ Argument မပေးခဲ့ပေမယ့် 0 ကို Default Value အနေနဲ့ အသုံးပြု
သUားလို့ အဆင်ပြေသUားတဲ့ သဘောပါ။ Argument တွေParameter တွေကြောင့်လည်း မျက်စိလည် မ
သUားပါနဲ့ဦး။ ဒီတန်aိုးတွေနဲ့ ပက်သက်ပြီး Function ကြေညာစဉ်မှာ Parameter လို့ခေါ်ပြီး Function ခေါ်
ယူတဲ့အခါ Argument လို့ ခေါ်ကြတဲ့အတUက် နှစ်မျိုးမြaစ်နေတာပါ။ တစ်ကယ်တော့ အတူတူပါပဲ။
Rest Parameter ဆိုတာကတော့ Function ကြေညာစဉ်မှာ Parameter အရေအတUက်ကို အသေ မ
သတ်မှတ်တော့ပဲ ပေးချင်သလောက်ပေး အကုန်လက်ခံလိုတဲ့အခါ အသုံးဝင်ပါတယ်။ ဥပမာ - 

function add(a, b, ...c) {
return c;
}
add( 1, 2, 3, 4, 5 ) 


နမူနာမှာ Argument အနေနဲ့ ပေးလိုက်တဲ့ တန်aိုးတွေ\ဲက 1 က a အတUက်မြaစ်သUားပြီး၊ 2 က b အတUက်
မြaစ်သUားပါတယ်။ ကျန်တဲ့ 3, 4, 5 ကတော့ Array အနေနဲ့ c အတUက် မြaစ်သUားတဲ့ သဘောကို တွေ့ရ
မှာ မြaစ်ပါတယ်။ \ုံးစံအတိုင်း လက်တွေ့ချရေးကြည့်ပြီး သေချာနားလည်အောင် လုပ်\ားaို့ လိုပါမယ်။
Spread Operator
Array, String စသည့် Loop ပါတ်လို့ ရနိုင်တဲ့ Iteratable Value တွေကို ခUဲမြaန့် ပေးနိုင်တဲ့ လုပ်ဆောင်ချက်
ကို Spread လုပ်တယ်လို့ ခေါ်ပါတယ်။ ဥပမာ -
let alphas = [ 'a', 'b', 'c' ];
let nums = [1, 2, 3];
[ alphas, nums ]; // => [ ['a', 'b', 'c'], [1, 2, 3] ]
[ ...alphas, ...nums ]; // => ['a', 'b', 'c', 1, 2, 3]


ပ\မနမူနာမှာ alphas Array နဲ့ nums Array ကို နောက် Array တစ်ခု\ဲ ဒီတိုင်း\ည့်လိုက်တဲ့အခါ
ရလဒ် Array က နှစ်\ပ်မြaစ်သUားတာကို တွေ့ရမှာ မြaစ်ပါတယ်။ နောက်နမူနာမှာတော့ အစက်ကလေးသုံး
စက် ( … ) ရှေ့ကပါသUားလို့ Array Content ကို မြaန့်ချပေးသUားလို့ အတUဲလိုက် တစ်ဆက်တည်း မြaစ်သUား
တာကို တွေ့ရမှာပါ။ Array Spread ဆိုတာ ဒါပါပဲ။ ရှေ့ဆက် အသုံးပြုသUားမယ့် လုပ်ဆောင်ချက် မြaစ်ပါ
တယ်။
Destructuring
Array တွေObject တွေကို မြaည်ချလို့ရတဲ့ လုပ်ဆောင်ချက်ပါ။ ဥပမာ - ရိုးရိုးရေးမယ်ဆိုရင် ဒီလို ရေးရနိုင်
ပါတယ်။
let fruits = [ 'Apple', 'Orange' ];
let apple = fruits[0];
let orange = fruits[1];
apple; // => Apple
ဒါကိုပဲ Destructure လုပ်ပြီးရေးမယ်ဆိုရင် အခုလိုရေးလိုရပါတယ် -
let fruits = [ 'Apple', 'Orange' ];
let [ apple, orange ] = fruits;
apple; 
Object တွေမှာလည်း အတူတူပါပဲ။ ရိုးရိုးရေးမယ်ဆိုရင် ဒီလိုရေးရနိုင်ပါတယ် -
let user = { name: 'Alice', age: 22 };
let name = user.name;
let age = user.age;
အဲ့ဒါကို Destructure လုပ်ပြီးရေးမယ်ဆိုရင်တော့ အခုလို ရေးနိုင်ပါတယ်။


let user = { name: 'Alice', age: 22 };
let { name, age } = user;
ဒီနည်းနဲ့ ကျစ်လစ်တဲ့ရေးဟန်ကို ရရှိနိုင်ပါတယ်။ ပိုစိတ်ဝင်စားaို့ကောင်းအောင် Function နဲ့ နမူနာ တUဲသုံး
ပြပါဦးမယ်။ ရိုးရိုးဆိုရင် ဒီလိုပါ။
function show(user) {
return user.name + ' is ' + user.age + ' years old.';
}
let user = { name: 'Alice', age: 22 };
show(user); // => Alice is 22 years old.
Destructure ကိုအသုံးပြုပြီး ရေးမယ်ဆို ဒီလိုရေးနိုင်ပါတယ်။
function show({ name, age }) {
return name + ' is ' + age + ' years old.';
}
Function Parameter သတ်မှတ်ကတည်းက Destructure လုပ်ပြီး သတ်မှတ်လိုက်တာ မြaစ်ပါတယ်။
တူညီတဲ့ ရလဒ်ကိုပဲ ရမှာမြaစ်ပြီး ဒီရေးဟန်ကိုလည်း ဆက်လက်အသုံးပြုသUားမှာ မြaစ်ပါတယ်။
String Interpolation
ပြီးခဲ့တဲ့ နမူနာမှာပဲ String တွေကို Format လုပ်ရတာ အဆင်မပြေတာကို တွေ့ခဲ့ရပါပြီ။ + Operator တွေ
သုံးပြီး Variable တွေနဲ့ String တွေကို တUဲရဆက်ရတာ ရေးရအလုပ်ရှုပ်သလို aတ်ရလည်း ခက်ပါတယ်။
ES6 String Interpolation ကိုအသုံးပြုပြီး ဒီပြဿနာကို <မြaရှင်းနိုင်ပါတယ်။
function show({ name, age }) {
return `${name} is ${age} years old.`;
}
ဒီရေးနည်းမှာတော့ Plus + တွေနဲ့ တUဲဆက်နေစရာမလိုတော့ဘဲ String အတUင်းမှာ တန်aိုးတွေကို
တစ်ခါတည်း \ည့်ပေးလိုက်လို့ ရသUားပါပြီ။ တန်aိုးတွေကိုတော့ ဒေါ်လာသင်္ကေတနောက်မှာ တUန့်ကUင်း
အaUင့်အပိတ်နဲ့ \ည့်ပေးရပါတယ်။ ဒါဟာလည်း တော်တော်အသုံးဝင်တဲ့ လုပ်ဆောင်ချက်လေး တစ်ခုပါပဲ။
String ကို Single Quote / Double Quote များနှင့် မရေးသားပဲ Backtick အaUင့်အပိတ်မြaင့် ရေးသားတာ
ကိုတော့ သတိပြုပါ။
Property Shorthand & Trailing Comma
မူလ JavaScript မှာ ဒီလိုပြဿနာမျိုးကို မကြာခဏ တွေ့ရပါတယ်။
let name = 'Bob';
let age = 22;
let user = {
 name: name,
 age: age,
 say: function() {
 return 'Hello'
 }
}
Property Name နဲ့ Value အမြaစ်အသုံးပြုတဲ့ Variable အမည်တူနေတာပါ။ ဒီလိုအခြေအနေမျိုးမှာ ES6
Property Shorthand အကူအညီနဲ့ အခုလိုရေးလို့ရပါတယ်။

let name = 'Bob';
let age = 22;
let user = {
 name,
 age,
 say() {
 return 'Hello'
 }
};
Method say() အတUက်လည်း function Keyword မပါဝင်တော့တာကို သတိပြုပါ။ ရိုးရိုးလေးနဲ့
အသုံးဝင်တဲ့ ရေးဟန်မြaစ်ပါတယ်။ Trailing Comma ဆိုတာကတော့ ရိုးရိုး JavaScript မှာ ဒီကုဒ်ဟာ

Error တက်ပါတယ်။
let users = [
{ name: 'Alice', age: 22 },
{ name: 'Bob', age: 23 },
{ name: 'Mary', age: 22 },
];
နောက်ဆုံးက Comma လေးတစ်ခု ပိုသUားလို့ပါ။ ES6 မှာတော့ ဒါကိုလက်ခံပါတယ်။ ပိုသUားလည်းပဲ Error
မမြaစ်တော့ဘဲ လက်ခံအလုပ်လုပ်ပေးသUားမှာ မြaစ်ပါတယ်။
Class
JavaScript ဟာ မူလဒီဇိုင်းအရ Classical OOP မဟုတ်ပါဘူး။ Prototype OOP လို့ခေါ်ပါတယ်။ Object
တွေ တည်ဆောက်aို့ Class တွေကိုမသုံးဘဲ Object Constructor နဲ့ JSON တို့ကို အသုံးပြုပါတယ်။ ဒါပေ
မယ့် ES6 မှာတော့ Class ရေး\ုံးပါဝင်လာပါပြီ။ ဒီလိုပါ -

class Animal {
constructor(legs, wings) {
this.legs = legs;
this.wings = wings;
}
say() {
return 'Hello, World';
}
}
Constructor တစ်ခုနဲ့ Method တစ်ခုတို့ ပါဝင်တဲ့ Class မြaစ်ပါတယ်။ အခြားသော Classical OOP ရေ\ုံး
တွေနဲ့ သိပ်မကUာပါဘူး။ \ူးခြားချက်ကို ရွေး\ုတ်ပြောရရင် Public, Private စသမြaင့် Access Control
Modifier တွေ မရှိခြင်းနဲ့ Method တွေကြေညာတဲ့အခါမှာ function Keyword \ည့်စရာ မလိုခြင်းတို့ကို
သတိပြုသင့်ပါတယ်။ Static Method တွေတော့ ရေးလို့ရပါတယ်။ ဒီလိုပါ -

class Math {
static add(a, b) {
return a + b;
}
}
Math.add(1, 2); // => 3
ES6 Class \Uက်ပေါ်ခါစမှာ Property တွေကို တိုက်ရိုက် သတ်မှတ်အသုံးပြုလို့မရဘဲ Constructor
အတUင်းမှာပဲ this ကနေတစ်ဆင့် ကြေညာသတ်မှတ်ရပါတယ်။ နောက်ပိုင်းမှာတော့ Class Field လို့ခေါ်
တဲ့ လုပ်ဆောင်ချက် ပါဝင်လာလို့ Property တွေကို တိုက်ရိုက် ကြေညာသတ်မှတ်လို့ ရလာသလို Method
တွေကိုလည်း Class Field အနေနဲ့ပဲ ရေးလို့ရလာပါတယ်။ ဥပမာ -
class Dog {
name = 'Bobby';
walk() {
return `${this.name} is walking`;
}
run = () => {
return `${this.name} is running`;
}
}
let bobby = new Dog();
bobby.name; // => Bobby
bobby.run(); // => Bobby is running
နမူနာမှာ name Property ကို Class Field အနေနဲ့ တိုက်ရိုက် ကြေညာ\ားပြီး၊ run ဟာလည်း Class
Field တစ်ခုမြaစ်ပါတယ်။ ဒါပေမယ့် သူ့အတUက်ပေး\ားတာ တန်aိုးတစ်ခုမဟုတ်ဘဲ Arrow Function တစ်ခုမြaစ်လို့ Method အနေနဲ့ အသုံးပြုရတာကို တွေ့နိုင်ပါတယ်။ ဒီရေးနည်းဟာ ရှေ့ဆက် အသုံးပြုသUား
မယ့် ရေးနည်းပဲ မြaစ်ပါတယ်။

Module
မူလ JavaScript မှာ Module လုပ်ဆောင်ချက် မရှိပါဘူး။ ဒါကြောင့် သီးခြားaိုင်တွေမှာ ခရေUဲ း\ားတဲ့
JavaScript Code တွေကို တUဲaက်အသုံးပြုလိုရင် HTML အတUင်းမှာ <script src=""> Element ကို
သုံးကြရပါတယ်။ ES6 မှာတော့ Module လုပ်ဆောင်ချက် ပါဝင်လာပါတယ်။
// math.js
export const PI = 3.1416
export function area(r) {
 return PI * r * r;
}
// app.js
import { PI, area } from './math'
area(8) // => 201.0624
နမူနာမှာ math.js က သူရဲ့ PI တန်aိုးနဲ့ area() Function လုပ်ဆောင်ချက်တွေကို export လုပ်
ပေး\ားပြီး app.js က ဒီတန်aိုးနဲ့ လုပ်ဆောင်ချက်တွေကို import လုပ်ယူ အသုံးပြု\ားတာကို တွေ့
ရနိုင်ပါတယ်။ Import လုပ်ယူတဲ့အခါ လိုအပ်ရင် Module File Path ကို အပြည့်အစုံပေးရပေမယ့်၊
နောက်ဆုံးက .js Extension က ချန်\ားလို့ရပါတယ်။
ဒီကုဒ်ကို လက်တွေ့ စမ်းသပ်aို့တော့ နည်းနည်း ခက်ပါတယ်။ Browser တွေက Support လုပ်ပေမယ့်
တစ်ခြားကုဒ်တွေကို Browser Console \ဲမှာ ကောက်ရေးကြည့်လိုက်လို့ မရပါဘူး။ အနည်းဆုံး
<script type="module"> Element ကို အသုံးပြုaို့ လိုပါတယ်။ ပြီးတော့ aိုင်ကနေ တိုက်ရိုက်စမ်း
လို့ မရပါဘူး၊ Web server လေးတစ်ခုလောက် ရှိမှ စမ်းလို့ရမှာပါ။ ဒါကြောင့် ရေး\ုံးကိုပဲ မှတ်\ားပါ၊

React ကုဒ်တွေရေးတဲ့အခါမှပဲ တစ်ခါတည်း \ည့်စမ်းကြတာပေါ့။ Export နဲ့ Import မှာ ရေ\ုံးမူကUဲ
တွေ အများကြီးရှိပေမယ့် နောက်\ပ် Default Export လောက်ကို လေ့လာ\ားလိုက်ရင် ရပါပြီ။ ဒီလိုပါ -

export default function add(a, b) {
return a + b;
}
(သို့မဟုတ်)
math.js
function add(a, b) {
return a + b;
}
export default add;
Default Export ပေး\ားတဲ့ တန်aိုးနဲ့ လုပ်ဆောင်ချက်တွေကို Import လုပ်ယူပုံက ဒီလိုပါ။
app.js
import add from './math';
(သို့မဟုတ်)
app.js
import sum from './math'
နမူနာမှာ Import လုပ်ယူတဲ့အခါ အမည်ကို sum လို့ ပေး\ားပေမယ့် Default Export ပေး\ားတဲ့ add
လုပ်ဆောင်ချက်ကိုပဲ sum အမည်နဲ့ ရရှိမှာမြaစ်ပါတယ်။ ဒီရေးနည်းကို ဆက်လက်အသုံးပြုသUားမှာ မြaစ်ပါ
တယ်။

*/
