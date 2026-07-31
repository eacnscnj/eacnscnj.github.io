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

  function snippetAround(text, keyword) {
    var index = text.toLowerCase().indexOf(keyword);
    if (index === -1) return text.substring(0, 100);
    var start = Math.max(0, index - 25);
    var end = Math.min(text.length, index + keyword.length + 75);
    return (start > 0 ? "…" : "") + text.substring(start, end) + (end < text.length ? "…" : "");
  }

  function renderSearch(query) {
    var keyword = query.trim().toLowerCase();
    results.innerHTML = "";
    if (!keyword) {
      results.hidden = true;
      return;
    }
    data.filter(function (item) {
      return item.title.toLowerCase().indexOf(keyword) !== -1 ||
        (item.content || "").toLowerCase().indexOf(keyword) !== -1;
    }).slice(0, 8).forEach(function (item) {
      var link = document.createElement("a");
      link.href = item.url;
      var title = document.createElement("strong");
      title.textContent = item.title;
      link.appendChild(title);
      if (item.content) {
        var snippet = document.createElement("span");
        snippet.className = "snippet";
        snippet.textContent = snippetAround(item.content, keyword);
        link.appendChild(snippet);
      }
      results.appendChild(link);
    });
    if (!results.children.length) {
      var empty = document.createElement("span");
      empty.className = "empty";
      empty.textContent = "没有找到相关文章";
      results.appendChild(empty);
    }
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
        input.select();
      }
      if (event.key === "Escape") {
        results.hidden = true;
        input.blur();
      }
    });
    document.addEventListener("click", function (event) {
      if (!input.contains(event.target) && !results.contains(event.target)) {
        results.hidden = true;
      }
    });
  }

  var toggle = document.getElementById("nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
