function getValue()
{
    alert("HELLO WORLD!");
}

function getValue2()
{
    let msg = '';

    msg = document.getElementById("message").value;

    Swal.fire(
        {
            backdrop: false,
            title: 'App Name',
            text: msg
        }
    );

}