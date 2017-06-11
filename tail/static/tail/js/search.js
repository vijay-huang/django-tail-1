// search filter
var _filterElement ='';
var _filterValue = '';

var _filterElement = function(elem) {
    var pattern = new RegExp(_filterValue, 'i');
    var element = elem;
    if (pattern.test(element.textContent)) {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  };

var _searchInput = document.getElementById("search");
_searchInput.onkeyup = function(e) {
    _filterValue = this.value;
    _logChildNodes = self.logChildNodes;
    for (i=0; i<_logChildNodes.length; i++) {
        _filterElement(_logChildNodes[i])
        // console.log(_logChildNodes[i]);
    };
    window.scrollTo(0, document.body.scrollHeight);
}
