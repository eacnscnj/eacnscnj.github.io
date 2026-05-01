(function () {
  var body = document.getElementById("article-body");
  var toc = document.getElementById("toc");
  if (body && toc) {
    var headings = body.querySelectorAll("h2, h3");
    headings.forEach(function (heading, index) {
      if (!heading.id) heading.id = "heading-" + index;
      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      link.dataset.level = heading.tagName.replace("H", "");
      toc.appendChild(link);
    });
    if (!headings.length) toc.textContent = "暂无目录";
  }

  var input = document.getElementById("site-search");
  var results = document.getElementById("search-results");
  var dataNode = document.getElementById("search-data");
  var data = [];
  try {
    data = JSON.parse(dataNode.textContent || "[]");
  } catch (error) {
    data = [];
  }

  function renderSearch(query) {
    var keyword = query.trim().toLowerCase();
    results.innerHTML = "";
    if (!keyword) {
      results.hidden = true;
      return;
    }
    data.filter(function (item) {
      return item.title.toLowerCase().indexOf(keyword) !== -1;
    }).slice(0, 8).forEach(function (item) {
      var link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.title;
      results.appendChild(link);
    });
    results.hidden = results.children.length === 0;
  }

  if (input && results) {
    input.addEventListener("input", function () {
      renderSearch(input.value);
    });
    document.addEventListener("keydown", function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        input.focus();
      }
      if (event.key === "Escape") {
        results.hidden = true;
        input.blur();
      }
    });
  }
})();
