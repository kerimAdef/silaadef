function Valider(){
    var nom=document.getElementById('Nom').value;
    var prenom=document.getElementById('Prenom').value;
    var N_et_rue=document.getElementById('N_et_rue').value;
    var code_postale= document.getElementById('Code_postale').value;
    var Ville=document.getElementById('Ville').value;
    if(nom==""||prenom==""||N_et_rue==""||code_postale==""||Ville==""){
       alert("veuiller remplir tous les champs");}
       else alert ("formulaire envoyée");
    if(isNaN(code_postale)){
        alert("code postale doit etre un nombre");}}
function Connexion(){
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;
    if(email==""||password==""){
        alert("veuiller remplir tous les champs obligatoires");
    }else
        alert("veuiller lire les conditions générales d'utilisateurs");
    }
var da = new Date();
document.getElementById("date").innerHTML = da;
var autre=document.getElementsByClassName('autre').checked;
function Resultat(){
    var cpt=0;
    if(document.getElementById('Neil').checked ){
         cpt++;} 
    if(document.getElementById('Alex').checked){
        cpt++;}    
    if(document.getElementById('Allain').checked){
        cpt++;}
    document.getElementById('Nam').innerHTML="la bonne reponse";
    document.getElementById('al').innerHTML="la bonne reponse";
    document.getElementById('allai').innerHTML="la bonne reponse";
    document.getElementById('result').innerHTML="Vous avez trouvé "+cpt+"question"; }
function Renitia(){
    document.getElementById('Neil').checked="";
    document.getElementById('Alex').checked="";
    document.getElementById('Allain').checked="";
    document.getElementById('Gut').checked="";
    document.getElementById('Pe').checked="";
    document.getElementById('Stev').checked="";
    document.getElementById('Ma').checked="";
    document.getElementById('Bi').checked="";
    document.getElementById('Be').checked="";
    document.getElementById('St').checked="";
    document.getElementById('Bo').checked="";
    document.getElementById('Lo').checked="";
    document.getElementById('result').innerHTML="";
    document.getElementById('allai').innerHTML="";
    document.getElementById('al').innerHTML="";
    document.getElementById('Nam').innerHTML="";}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);}
function currentSlide(n) {
  showSlides(slideIndex = n);}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  }
  for (i = 0; i<dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";}
var Video=document.getElementById("video");
function playVideo(){
     Video.play();}
function pauseVideo(){
        video.pause();}
function Grand() {
			document.getElementById('video').style.width ='100%';} 	
	function Petit(){
		document.getElementById('video').style.width ='30%';}
	function  Normal(){
        document.getElementById('video').style.width ='50%';}
        
 

  