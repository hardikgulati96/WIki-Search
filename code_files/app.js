$(function() {
$("#searchTerm").keypress(function(e){
if(e.keyCode===13)
{
  var searchTerm = $("#searchTerm").val();
  var url="https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&search="+searchTerm+"&format=json&callback=?";
 $.ajax({
url: url,
type: 'GET',
contentType:"application/json; charset=utf-8",
async:false,
dataType: "json",

success: function (data,status,jqXHR)
{
console.log(data);
$("#output").html();
for(var i=0;i<data[1].length;i++)
{ $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>"+ data[1][i]+ "</h2>" + "<p>"+ data[2][i]+ "</p></a></div></div>");
}
}
})
}
});
$("#search").on("click",function(){
  var searchTerm = $("#searchTerm").val();
  var url="https://en.wikipedia.org/w/api.php?action=opensearch&limit=2&search="+searchTerm+"&format=json&callback=?";
 $.ajax({
url: url,
type: 'GET',
contentType:"application/json; charset=utf-8",
async:false,
dataType: "json",

success: function (data,status,jqXHR)
{
console.log(data);
$("#output").html();
for(var i=0;i<data[1].length;i++)
{ $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>"+ data[1][i]+ "</h2>" + "<p>"+ data[2][i]+ "</p></a></div></div>");
}
}
})
.done(function()
{
console.log("success");
})
.fail(function() 
{
console.log("error");
})
.always(function() 
{
console.log("complete");
});
});
});
