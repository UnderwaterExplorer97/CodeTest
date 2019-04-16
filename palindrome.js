function isPalindrome(str)
{
  for (var i = 0; i < str.length / 2; i = i+1)
  {
      var c = str[i];
      var c2 = str[str.length - i - 1];
      if(c !== c2)
      {
        return false;
      }
  }
  return true;  
}

$("#submitbutton").on("click", function()
{
    var str = $("#inputtext").val();
    if (isPalindrome(str))
    {
        $("#messagebox").text("Yay! "+str +" is a palindrome");
        $("#messagebox").addClass("is-palindrome");
        $("#messagebox").removeClass("isnot-palindrome");
    }
    else
    {
        $("#messagebox").text("Oops! "+str +" is not a palindrome");
        $("#messagebox").addClass("isnot-palindrome");
        $("#messagebox").removeClass("is-palindrome");
    }
});