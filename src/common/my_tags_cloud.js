// let tagsList;
// tagsList = [
//   "java",
//   "html",
//   "css",
//   "vue",
//   "jquery",
//   "react",
//   "springboot",
//   "springcloud",
//   "python",
//   "c++",
//   "go",
//   "nodejs",
//   "ssm",
//   "mybatis",
//   "mysql",
//   "docker",
//   "linux",
//   "elementui",
//   "layui",
//   "shell",
// ];

function tags(tagsList) {
  tagsList.sort(randomSort);
  for (let tagName of tagsList) {
    var a = createTag();
    a.style.fontSize = randomFontSize(30, 60);
    a.style.color = randomHexColor();
    a.text = tagName;
  }
}

function randomHexColor() {
  //随机生成十六进制颜色
  return (
    "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
  );
}

function randomFontSize(min_font, max_font) {
  //随机生成font-size
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min_font + 1, 10) + 'px';
    case 2:
      return parseInt(Math.random() * (max_font - min_font + 1) + min_font, 10) + 'px';
    default:
      return '15px';
  }
}

function createTag() {
  //创建a标签并添加到tag-cloud-tags中
  var a = document.createElement("a");
  var parent = document.getElementById("tag-cloud-tags");
  parent.appendChild(a);
  return a;
}

function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}

export {tags};
