/*! Cofoundry 2018-02-20 */
!function(a,b){function c(){this.querySelector('input[type="submit"]').setAttribute("disabled","disabled")}function d(){var c=a.getElementById("ReturnUrl"),d=b.location.hash;c.value&&d&&(c.value=c.value+d)}a.getElementById("MainForm").addEventListener("submit",c,!1),d()}(document,window);