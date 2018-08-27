<!DOCTYPE html>
<html lang="en">
<head>
  <title>egg example</title>
  <link rel="stylesheet" href="../public/style/index.css">
</head>
<body>
  <div class="container">
    <ul class="list-ul">
      {% for item in lists%}
      <li class="list-cell">
        <p class="title">{{item.title}}</p>
        <p class="author">{{item.author}}</p>
        <p class="desc">{{item.desc}}</p>
      </li>
      {% endfor %}
    </ul>
  </div>
</body>
</html>