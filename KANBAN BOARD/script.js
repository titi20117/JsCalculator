//by click Board name must be open a window to rename

function renameName() {
    
    var elsBacklog = document.querySelector("backlog");
    var elBoardnameClick = document.getElementById("boardname-click");
    
    elsBacklog.style.display = "none";
    elBoardnameClick.style.display = "block";
    elBoardnameClick.style.Position = "absolute";
    elBoardnameClick.style.top = "0px";
}

var renameBoard = function rename(el) {
    var elClick = document.querySelector("board-name");
    elClick.addEventListener("click", renameName, false);
}
// renameBoard(elClick);