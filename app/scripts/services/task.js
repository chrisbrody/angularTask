'use strict';

app.factory('Task', function ($resource) {
  return $resource('https://newsapp9000.firebaseio.com/task/:id.json');
});



// app.factory('Task', function ($firebase, FIREBASE_URL) {
//   var ref = new Firebase(FIREBASE_URL);
//   var task = $firebase(ref.child('task')).$asArray();

//   var Task = {
//     all: task,
//     create: function (post) {
//       return task.$add(post).then(function(postRef) {
//         $firebase(ref.child('user_task').child(post.creatorUID))
//                          .$push(postRef.name());
//         return postRef;
//       });
//     },
//     get: function (postId) {
//       return $firebase(ref.child('task').child(postId)).$asObject();
//     },
//     delete: function (post) {
//       return task.$remove(post);
//       return $firebase.$remove(ref.child('task').child(postId))
//     }
//   };

//   return Task;
// });
