/* author: YueLin */

function hide(container)
{
    if(!container.classList.contains("hidden"))
    {
        container.style.height = container.scrollHeight + "px";
        setTimeout(() => {container.style.height = "0px";}, 10);
        container.classList.add("hidden");
    }
}

function unhide(container)
{
    if(container.classList.contains("hidden"))
    {
        container.style.height = container.scrollHeight + "px";
        setTimeout(() => {container.style.height = "auto";}, 1000);
        container.classList.remove("hidden");
    }
}

function invisible(containers)
{
    return Array.from(containers).some((c) => 
        c.querySelector(".details").classList.contains("hidden")
    );
}

function rotate(arrow, down)
{
    if(down) 
        arrow.style.transform = "rotate(45deg)";
    else 
        arrow.style.transform = "rotate(-135deg)";
}

function callback(element, name)
{
    const containers = document.querySelectorAll(name);
    const show = invisible(containers);

    containers.forEach((container) => {
        const details = container.querySelector(".details");
        if(show) unhide(details);
        else hide(details);
    });

    rotate(element.querySelector(".arrow"), !show);
}

/* Callback functions */

function details(event, element)
{
    if(event.target.tagName === "A") return;

    const details = element.querySelector(".details");
    if(details.classList.contains("hidden"))
        unhide(details);
    else
        hide(details);

    rotate(
        element.parentElement.querySelector(".arrow"),
        invisible(document.querySelectorAll("." + element.className))
    );
}

function papers(element)
{
    callback(element, ".paper");
}

function projects(element)
{
    callback(element, ".project");
}