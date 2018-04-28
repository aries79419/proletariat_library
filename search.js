function mysearch() {
  // 声明变量
  var input, filter, table, tr, td, i, th;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  th = table.getElementsByTagName("th");
 
  // 循环表格每一行，查找匹配项
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    for(x = 0; x < th.length; x++){
      td = tr[i].getElementsByTagName("td")[x];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
      } 
    }
  }
}