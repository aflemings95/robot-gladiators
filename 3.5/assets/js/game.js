var acceptanceCriteria = function (){
  //1st. is the pwd at least 8 chars
  var promptCriteria = window.prompt('How long do you want your password to be? Must be min of 8 and no longer than 128 chars.');
// validate their answer
if (promptCriteria < 8 && promptCriteria > 128){
  window.alert("Created Password Incorrectly! Try Again.");
}
return acceptanceCriteria();
}