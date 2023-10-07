function toasciix(ch){
ch=ch.toLowerCase();
return ch.charCodeAt(0);
}
function cEtoAqw102(tmp){
var after="";
var ascii;var ch=['ج','ذ','د','^','_','ذ','ش','لا','ؤ','ي','ث','ب','ل','ا','ه','ت','ن','م','ة','ى','خ','ح','ض','ق','س','ف','ع','ر','ص','ء','غ','ئ'];
   ascii=toasciix(tmp)
if(ascii>90&&ascii<123){
after=ch[ascii-91]+"";
}else if(ascii==44){
after="و";
}
else if(ascii==59){
after="ك";
}else if(ascii==39){
after="ط";
}else if(ascii==47){
after="ظ";
}
else if(ascii==46){
after="ز";
}else{
after=tmp;
}
return after;
}
function cEtoAqw101(tmp){
var after="";
var ascii;var ch=['ج','ذ','د','^','_','ذ','ش','لا','ؤ','ي','ث','ب','ل','ا','ه','ت','ن','م','ة','ى','خ','ح','ض','ق','س','ف','ع','ر','ص','ء','غ','ئ'];
   ascii=toasciix(tmp)
if(ascii>90&&ascii<123){
after=ch[ascii-91]+"";
}else if(ascii==44){
after="و";
}
else if(ascii==59){
after="ك";
}else if(ascii==39){
after="ط";
}else if(ascii==47){
after="ظ";
}
else if(ascii==46){
after="ز";
}else{
after=tmp;
}
return after;
}
function cEtoAaz101(tmp){
var after="";
var ascii;var ch=['ج','|','د','ج','_','ذ','ض','لا','ؤ','ي','ث','ب','ل','ا','ه','ت','ن','م','ك','ى','خ','ح','ش','ق','س','ف','ع','ر','ئ','ء','غ','ص'];
   ascii=toasciix(tmp)
if(ascii>90&&ascii<123){
after=ch[ascii-91]+"";
}else if(ascii==44){
after="ة";
}
else if(ascii==249){
after="ط";
}else if(ascii==178){
after="ذ";
}else if(ascii==59){
after="و";
}else if(ascii==58){
after="ز";
}else if(ascii==39){
after="ط";
}else if(ascii==47){
after="ظ";
}else if(ascii==46){
after="ز";
}else if(ascii==42){
after="ذ";
}else if(ascii==36){
after="د";
}else if(ascii==33){
after="ظ";
}else{
after=tmp;
}
return after;
}
function cEtoAaz102(tmp){
var after="";
var ascii;var ch=['ج','|','د','ج','_','ذ','ض','لا','ؤ','ي','ث','ب','ل','ا','ه','ت','ن','م','ك','ى','خ','ح','ش','ق','س','ف','ع','ر','ئ','ء','غ','ص'];
   ascii=toasciix(tmp)
if(ascii>90&&ascii<123){
after=ch[ascii-91]+"";
}else if(ascii==44){
after="ة";
}
else if(ascii==249){
after="ط";
}else if(ascii==59){
after="و";
}else if(ascii==58){
after="ز";
}else if(ascii==39){
after="ط";
}else if(ascii==47){
after="ظ";
}else if(ascii==46){
after="ز";
}else if(ascii==42){
after="ذ";
}else if(ascii==36){
after="د";
}else if(ascii==33){
after="ظ";
}else{
after=tmp;
}
return after;
}
function cFtoAqw102(tmp){
var after="";
var ascii;var ch=['ا','ب','س','د','ي','ف','ج','ه','إ','ج','ك','ل','م','ن','و','ب','ك','ر','س','ت','يو','ف','و','اس','ي','ز'];
   ascii=toasciix(tmp)
if(ascii>96&&ascii<123){
after=ch[ascii-97]+"";
}else if(ascii==51){
after="ع";
}
else if(ascii==55){
after="ح";
}else if(ascii==54){
after="ط";
}else if(ascii==50){
after="أ";
}else{
after=tmp;
}
return after;
}
function cFtoAqw101(tmp){
var after="";
var ascii;var ch=['ج','|','د','^','_','ذ','ش','?','ؤ','ي','ث','ب','ل','ا','ه','ت','ن','م','ة','ى','خ','ح','ض','ق','س','ف','ع','ر','ص','ء','غ','ئ'];
   ascii=toasciix(tmp)
if(ascii>90&&ascii<123){
after=ch[ascii-91]+"";
}else if(ascii==44){
after="و";
}
else if(ascii==59){
after="ك";
}else if(ascii==39){
after="ط";
}else if(ascii==47){
after="ظ";
}
else if(ascii==46){
after="ز";
}else{
after=tmp;
}
return after;
}
function cFtoAaz(tmp){
var after="";
var ascii;var ch=['ج','|','د','^','_','ذ','ش','?','ؤ','ي','ث','ب','ل','ا','ه','ت','ن','م','ة','ى','خ','ح','ض','ق','س','ف','ع','ر','ص','ء','غ','ئ'];
   ascii=toasciix(tmp)
if(ascii>90&&ascii<123){
after=ch[ascii-91]+"";
}else if(ascii==44){
after="و";
}
else if(ascii==59){
after="ك";
}else if(ascii==39){
after="ط";
}else if(ascii==47){
after="ظ";
}
else if(ascii==46){
after="ز";
}else{
after=tmp;
}
return after;
}
function DisplayMsg(key_event)
{tmp=toasciix(String.fromCharCode(key_event.which));
if (tmp==8){
document.form1.Arabic.value=document.form1.Arabic.value.substring(0,document.form1.Arabic.value.length-1);
}else{

    if (document.all) //Checks for IE 4.0 or later
    {
       document.form1.Arabic.value+=conchar(String.fromCharCode(event.keyCode));
    }
    else if (document.getElementById) //checks for Netscape 6 or later
    {
	  document.form1.Arabic.value+=conchar(String.fromCharCode(key_event.which));
    }
    else if (document.layers) //Checks for Netscape 4
    {
	  document.form1.Arabic.value+=conchar(String.fromCharCode(key_event.which));
    }}
}

function convert()
{
document.form1.Arabic.value="";
var tmp=document.form1.English.value;
var len=tmp.length;
if(document.form1.lang.value=="e2a"&&document.form1.key.value=="qw102"){
for(i=0;i<len;i++)
{
document.form1.Arabic.value+=cEtoAqw102(tmp.charAt(i));
}
}
else if(document.form1.lang.value=="e2a"&&document.form1.key.value=="qw101"){
for(i=0;i<len;i++)
{
document.form1.Arabic.value+=cEtoAqw101(tmp.charAt(i));
}
}
else if(document.form1.lang.value=="e2a"&&document.form1.key.value=="az101"){
for(i=0;i<len;i++)
{
document.form1.Arabic.value+=cEtoAaz101(tmp.charAt(i));
}
}
else if(document.form1.lang.value=="e2a"&&document.form1.key.value=="az102"){
for(i=0;i<len;i++)
{
document.form1.Arabic.value+=cEtoAaz102(tmp.charAt(i));
}
}
else if(document.form1.lang.value=="f2a"&&document.form1.key.value=="qw102"){
for(i=0;i<len;i++)
{
document.form1.Arabic.value+=cFtoAqw102(tmp.charAt(i));
}
}
else if(document.form1.lang.value=="f2a"&&document.form1.key.value=="qw101"){
for(i=0;i<len;i++)
{
document.form1.Arabic.value+=cFtoAqw101(tmp.charAt(i));
}
}
else if(document.form1.lang.value=="f2a"&&document.form1.key.value=="az"){
for(i=0;i<len;i++)
{
document.form1.Arabic.value+=cFtoAaz(tmp.charAt(i));
}
}
}
function conchar(ekey)
{
if(document.form1.lang.value=="e2a"&&document.form1.key.value=="qw102"){
result=cEtoAqw102(ekey);
}
else if(document.form1.lang.value=="e2a"&&document.form1.key.value=="qw101"){
result=cEtoAqw101(ekey);
}
else if(document.form1.lang.value=="e2a"&&document.form1.key.value=="az101"){
result=cEtoAaz101(ekey);
}
else if(document.form1.lang.value=="e2a"&&document.form1.key.value=="az102"){
result=cEtoAaz102(ekey);
}
else if(document.form1.lang.value=="f2a"&&document.form1.key.value=="qw102"){
result=cFtoAqw102(ekey);
}
else if(document.form1.lang.value=="f2a"&&document.form1.key.value=="qw101"){
result=cFtoAqw101(ekey);
}
else if(document.form1.lang.value=="f2a"&&document.form1.key.value=="az"){
result=cFtoAaz(ekey);
}
return result;
}
function test(){alert('test');}