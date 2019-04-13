document.addEventListener("deviceready",onDeviceReady, false)

function onDeviceReady()
{
    $('input[type=file]').bootstrapFileInput();
    $('.file-inputs').bootstrapFileInput();
}