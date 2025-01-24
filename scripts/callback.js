/* author: YueLin */

function hide(container)
{
    if(!container.classList.contains("hidden"))
    {
        container.style.height = container.scrollHeight + "px";
        setTimeout(() => {container.style.height = "0px";}, 5);
        container.parentElement.style.cursor = "pointer";
        container.classList.add("hidden");
    }
}

function unhide(container)
{
    if(container.classList.contains("hidden"))
    {
        container.style.height = container.scrollHeight + "px";
        container.parentElement.style.cursor = "auto";
        container.classList.remove("hidden");
    }
}

function invisible(containers)
{
    return Array.from(containers).some(
        (c) => c.querySelector(".details").classList.contains("hidden")
    );
}

function rotate(arrow, down)
{
    if(down) 
        arrow.style.transform = "rotate(45deg)";
    else 
        arrow.style.transform = "rotate(-135deg)";
}

/* Callback functions */

function callback(element)
{
    const containers = element.parentElement.parentElement.querySelectorAll(
        ".paper, .project, .competition"
    );
    const show = invisible(containers);

    containers.forEach((container) => {
        const details = container.querySelector(".details");
        if(show) unhide(details);
        else hide(details);
    });

    rotate(element.querySelector(".arrow"), !show);
}

function display(event, element)
{
    if(event.target.tagName === "A") return;

    const details = element.querySelector(".details");
    if(details.classList.contains("hidden")) unhide(details);

    rotate(
        element.parentElement.querySelector(".arrow"),
        invisible(document.querySelectorAll("." + element.className))
    );
}