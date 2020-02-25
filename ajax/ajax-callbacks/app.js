const xhr = new easyHttp();
const simpleData = {
  title: "Jack Nick, The struggler",
  body: "Something"
};

// xhr.get("https://jsonplaceholder.typicode.com/posts");

// xhr.post("https://jsonplaceholder.typicode.com/posts", simpleData, function(
//   err,
//   post
// ) {
//   return err ? console.log(err) : console.log(post);
// });

// xhr.put("https://jsonplaceholder.typicode.com/posts/1", simpleData, function(
//   err,
//   post
// ) {
//   return err ? console.log(err) : console.log(post);
// });

xhr.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  return err ? console.log(err) : console.log(response);
});
