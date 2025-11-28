document.getElementById("highlightBtn").addEventListener("click", function() {
    const items = document.querySelectorAll("li");
    items.forEach(item => {
        item.style.backgroundColor = "#ffffcc"; // 黄色高亮
        item.style.borderRadius = "5px";
        item.style.padding = "5px";
    });
});