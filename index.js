document.addEventListener("DOMContentLoaded", () =>
{
    document.querySelector(".body").addEventListener("click", () =>
    {
        document.querySelector(".body").classList.toggle("day");
        document.querySelector(".body").classList.toggle("night");
    })
})