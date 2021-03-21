$(document).ready(function () {
    $("#tweb1").click(function () { $('#mweb1').modal('show'); });
    $("#tweb2").click(function () { $('#mweb2').modal('show'); });
    $("#tweb3").click(function () { $('#mweb3').modal('show'); });
    $("#tcrs1").click(function () { $('#mcrs1').modal('show'); });
    $("#tcrs2").click(function () { $('#mcrs2').modal('show'); });
    
    $("#bweb1").click(function () { $('#mweb1').modal('hide'); });
    $("#bweb2").click(function () { $('#mweb2').modal('hide'); });
    $("#bweb3").click(function () { $('#mweb3').modal('hide'); });
    $("#bcrs1").click(function () { $('#mcrs1').modal('hide'); });
    $("#bcrs2").click(function () { $('#mcrs2').modal('hide'); });
});