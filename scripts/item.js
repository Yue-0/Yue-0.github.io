/* author: YueLin */

function callback(event, element)
{
    if(event.target.tagName === "A") return;
    const details = element.querySelector(".details");
    if (details.style.height === "0px" || !details.style.height)
        details.style.height = details.scrollHeight + "px";
    else
        details.style.height = "0px";
}
